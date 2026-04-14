import akshayaSeva from "@/assets/akshaya-seva.jpg";
import gauSeva from "@/assets/gau-seva.jpg";
import mandirNirman from "@/assets/mandir-nirman.jpg";
import chandanSeva from "@/assets/chandan-seva.jpg";
import annaSeva from "@/assets/anna-seva.jpg";

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
    image: annaSeva,
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
    image: akshayaSeva,
    blurb: "Offer sacred homa seva on Akshaya Tritiya for prosperity and blessings.",
    defaultAmount: 1100,
    presetAmounts: [501, 1100, 2100, 5100],
  },
  {
    name: "Annadana Seva",
    image: annaSeva,
    blurb: "Support prasadam distribution and feed devotees with devotion and care.",
    defaultAmount: 1100,
    presetAmounts: [501, 1100, 2100, 5100],
  },
  {
    name: "Gau Seva",
    image: gauSeva,
    blurb: "Serve and protect Gau Mata through nutritious daily seva offerings.",
    defaultAmount: 1100,
    presetAmounts: [501, 1100, 2100, 5100],
  },
  {
    name: "Mandir Nirman Seva",
    image: mandirNirman,
    blurb: "Contribute towards the divine construction of the temple project.",
    defaultAmount: 2100,
    presetAmounts: [1100, 2100, 5100, 11000],
  },
  {
    name: "Chandan Alankar Seva",
    image: chandanSeva,
    blurb: "Offer fragrant sandalwood decoration seva for the deities.",
    defaultAmount: 501,
    presetAmounts: [251, 501, 1100, 2100],
  },
  {
    name: "Akshaya Tritiya Seva",
    image: akshayaSeva,
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
      image: annaSeva,
      blurb: "Support seva through your contribution.",
      defaultAmount: 1100,
      presetAmounts: [251, 501, 1100, 2100],
    }
  );
}
