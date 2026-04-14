import annadanaSevaReal from "@/assets/annadana-seva-real.jpg";
import akshayaSevaReal from "@/assets/akshaya-tritiya-seva-real.png";
import chandanAlankarReal from "@/assets/chandan-alankar-real.webp";
import gauSevaReal from "@/assets/gau-seva-real.jpeg";
import mahalakshmiHomaReal from "@/assets/mahalakshmi-homa-real.jpg";
import mandirNirmanReal from "@/assets/mandir-nirman-real.jpg";

export interface DonationCampaign {
  name: string;
  image: string;
  blurb: string;
  defaultAmount: number;
  presetAmounts: number[];
  badge?: string;
  mealCount?: number;
}

const mealRate = 25;

function mealCampaign(count: number): DonationCampaign {
  const amount = count * mealRate;

  return {
    name: `Feed ${count} People`,
    image: annadanaSevaReal,
    blurb: `Sponsor prasadam for ${count} people at ₹${mealRate} per meal on this auspicious day.`,
    defaultAmount: amount,
    presetAmounts: [amount, amount + 1000, amount + 2500],
    badge: `${count} meals`,
    mealCount: count,
  };
}

export const donationCampaigns: DonationCampaign[] = [
  {
    name: "Mahalakshmi Homa",
    image: mahalakshmiHomaReal,
    blurb: "Offer sacred homa seva on Akshaya Tritiya for prosperity and blessings.",
    defaultAmount: 1100,
    presetAmounts: [501, 1100, 2100, 5100],
  },
  {
    name: "Annadana Seva",
    image: annadanaSevaReal,
    blurb: "Support prasadam distribution and feed devotees with devotion and care.",
    defaultAmount: 1100,
    presetAmounts: [501, 1100, 2100, 5100],
  },
  {
    name: "Gau Seva",
    image: gauSevaReal,
    blurb: "Serve and protect Gau Mata through nutritious daily seva offerings.",
    defaultAmount: 1100,
    presetAmounts: [501, 1100, 2100, 5100],
  },
  {
    name: "Mandir Nirman Seva",
    image: mandirNirmanReal,
    blurb: "Contribute towards the divine construction of the temple project.",
    defaultAmount: 2100,
    presetAmounts: [1100, 2100, 5100, 11000],
  },
  {
    name: "Chandan Alankar Seva",
    image: chandanAlankarReal,
    blurb: "Offer fragrant sandalwood decoration seva for the deities.",
    defaultAmount: 501,
    presetAmounts: [251, 501, 1100, 2100],
  },
  {
    name: "Akshaya Tritiya Seva",
    image: akshayaSevaReal,
    blurb: "Make a general offering for the festival and associated seva programs.",
    defaultAmount: 1100,
    presetAmounts: [251, 501, 1100, 2100, 5100],
  },
  mealCampaign(100),
  mealCampaign(200),
  mealCampaign(400),
  mealCampaign(500),
  mealCampaign(1000),
];

export function getDonationCampaign(sevaType: string): DonationCampaign {
  return (
    donationCampaigns.find((campaign) => campaign.name === sevaType) ?? {
      name: sevaType,
      image: annadanaSevaReal,
      blurb: "Support seva through your contribution.",
      defaultAmount: 1100,
      presetAmounts: [251, 501, 1100, 2100],
    }
  );
}
