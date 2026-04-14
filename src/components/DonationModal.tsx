import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { openRazorpayCheckout } from "@/lib/razorpay";
import { getDonationCampaign } from "@/lib/donations";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  sevaType: string;
}

const RAZORPAY_KEY_ID = import.meta.env.VITE_RAZORPAY_KEY_ID ?? "";

export function DonationModal({
  isOpen,
  onClose,
  sevaType,
}: DonationModalProps) {
  const navigate = useNavigate();
  const campaign = useMemo(() => getDonationCampaign(sevaType), [sevaType]);
  const [amount, setAmount] = useState(campaign.defaultAmount);
  const [customAmount, setCustomAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setAmount(campaign.defaultAmount);
    setCustomAmount("");
    setErrorMessage("");
  }, [campaign]);

  if (!isOpen) return null;

  const finalAmount = customAmount ? parseInt(customAmount, 10) : amount;

  const handleDonate = async () => {
    if (!name || !phone || !finalAmount || finalAmount < 1) {
      setErrorMessage(
        "Please enter your name, phone number, and a valid donation amount.",
      );
      return;
    }

    if (!RAZORPAY_KEY_ID) {
      setErrorMessage(
        "Payment setup is incomplete. Add VITE_RAZORPAY_KEY_ID before going live.",
      );
      return;
    }

    setErrorMessage("");
    setIsProcessing(true);

    await openRazorpayCheckout({
      amount: finalAmount,
      name,
      email,
      phone,
      sevaType: campaign.name,
      razorpayKeyId: RAZORPAY_KEY_ID,
      onSuccess: (paymentId) => {
        setIsProcessing(false);
        onClose();
        navigate({
          to: "/thank-you" as any,
          search: {
            paymentId,
            amount: String(finalAmount),
            seva: campaign.name,
          } as any,
        });
      },
      onFailure: (error) => {
        setIsProcessing(false);
        setErrorMessage(error || "Unable to start the payment. Please try again.");
      },
    });
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/50 p-4"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-2xl bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="rounded-t-2xl bg-primary p-6">
          <h3 className="text-xl font-bold text-primary-foreground">
            {campaign.name}
          </h3>
          <p className="mt-1 text-sm text-primary-foreground/80">
            {campaign.blurb}
          </p>
        </div>

        <div className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Select Amount (₹)
            </label>
            <div className="grid grid-cols-3 gap-2">
              {campaign.presetAmounts.map((preset) => (
                <button
                  key={preset}
                  onClick={() => {
                    setAmount(preset);
                    setCustomAmount("");
                    setErrorMessage("");
                  }}
                  className={`rounded-lg py-2 text-sm font-semibold transition-colors ${
                    amount === preset && !customAmount
                      ? "bg-donate-btn text-donate-btn-foreground"
                      : "bg-muted text-foreground hover:bg-accent"
                  }`}
                >
                  ₹{preset.toLocaleString()}
                </button>
              ))}
            </div>

            {campaign.mealCount ? (
              <p className="mt-3 rounded-lg bg-accent/40 px-4 py-3 text-sm text-foreground/80">
                This annadana seva is priced at ₹25 per meal. For{" "}
                {campaign.mealCount} people, the recommended amount is{" "}
                <strong>₹{campaign.defaultAmount.toLocaleString()}</strong>.
              </p>
            ) : null}

            <input
              type="number"
              placeholder="Or enter custom amount"
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setErrorMessage("");
              }}
              className="mt-3 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full Name *"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrorMessage("");
              }}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
            <input
              type="tel"
              placeholder="Phone Number *"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setErrorMessage("");
              }}
              required
              className="w-full rounded-lg border border-border bg-background px-4 py-2 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring"
            />
          </div>

          {errorMessage ? (
            <p className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {errorMessage}
            </p>
          ) : null}

          <button
            onClick={handleDonate}
            disabled={isProcessing || !name || !phone || !finalAmount}
            className="gold-shine-button w-full py-3 text-lg font-bold"
          >
            {isProcessing
              ? "Processing..."
              : `Donate ₹${(finalAmount || 0).toLocaleString()}`}
          </button>
        </div>
      </div>
    </div>
  );
}
