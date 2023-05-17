import Cream from "./pics/Cream.jpg";
import Cream2 from "./pics/Cream2.jpg";
import Cream3 from "./pics/Cream3.jpg";
import Cream4 from "./pics/Cream4.jpg";
import Aloe from "./pics/Aloe.jpg";
import LotionBlocks from "./pics/LotionBlocks.jpg";
import BoCR1 from "./pics/BoCR1.jpg";
import BoCR2 from "./pics/BoCR2.jpg";
import BoCR3 from "./pics/BoCR3.jpg";
import BoCR4 from "./pics/BoCR4.jpg";
import BoCR5 from "./pics/BoCR5.jpg";
import BoCR6 from "./pics/BoCR6.jpg";
import BoCR7 from "./pics/BoCR7.jpg";
import Serum1 from "./pics/Serum1.jpg";
import Serum2 from "./pics/Serum2.jpg";
import Serum3 from "./pics/Serum3.jpg";
import Serum4 from "./pics/Serum4.jpg";
import Serum5 from "./pics/Serum5.jpg";
import Serum6 from "./pics/Serum6.jpg";
import Serum7 from "./pics/Serum7.jpg";
import Serum8 from "./pics/Serum8.jpg";
import RollerBrush from "./pics/RollerBrush.jpg";
import Soap from "./pics/Soap.jpg";
import Soap2 from "./pics/Soap2.jpg";
import Soap3 from "./pics/Soap3.jpg";
import Soap4 from "./pics/Soap4.jpg";
import Soap5 from "./pics/Soap5.jpg";
import Soap6 from "./pics/Soap6.jpg";

const Products = {
  faceProducts: [
    {
      title: "Calming Hydration Balm",
      description:
        "This balm is a rich extra moisturizing balm for extra dry skin.",
      price: "Price: $20",
      size: "Size: 10oz",
      ingridients: "Ingridients: Shea butter",
      src: Cream,
      id: 1,
    },
    {
      title: "Rejuvinating Morning Citrus",
      description:
        "This lightweight cream wil leave you feeling hydrated and energized!",
      price: "Price: $20",
      size: "Size: 10oz",
      ingridients: "Ingridients: Orange and grapefruit extract",
      src: Cream2,
      id: 2,
    },
    {
      title: "Pure Bliss",
      description: "Nourishing Organic Face Cream.",
      price: "$20",
      size: "10oz",
      ingridients:
        "Organic Argan Oil, Organic Evening Primrose Oil, Organic Green Tea Extract",
      src: Cream3,
      id: 3,
    },
    {
      title: "Revive & Rejuvenate",
      description: "Organic Anti-Aging Face Cream",
      price: "$20",
      size: "10oz",
      ingridients:
        "Organic Aloe Vera, Organic Jojoba Oil, Organic Rosehip Seed Extract",
      src: Cream4,
      id: 4,
    },
    {
      title: "Radiant Glow",
      description: "Organic Brightening Face Cream",
      price: "$20",
      size: "10oz",
      ingridients:
        "Organic Turmeric Extract, Organic Licorice Root Extract, Organic Vitamin C",
      src: Aloe,
      id: 5,
    },
    {
      title: "HydraBotanica",
      description: "Organic Moisturizing Face Cream",
      price: "$20",
      size: "10oz",
      ingridients:
        "Organic Shea Butter, Organic Hyaluronic Acid, Organic Cucumber Extract",
      src: LotionBlocks,
      id: 6,
    },
  ],

  accessories: [
    {
      title: "Wrinkle smoothing rolelr and brush set",
      description:
        "This smooth stone roller is excellent for smoothing out wrinkles and toning skin. It also comes with a high quality brush.",
      price: "Price: $80",
      size: "NA",
      ingridients: "NA",
      src: RollerBrush,
      id: 1,
    },
    {
      title: "Lavender Fields",
      description:
        " Immerse yourself in the calming essence of lavender with this organic soap",
      price: "$10",
      size: "100g",
      ingridients:
        "Organic Lavender Essential Oil, Organic Coconut Oil, Organic Shea Butter",
      src: Soap,
      id: 1,
    },
    {
      title: "Citrus Burst",
      description:
        "Energize your senses with the invigorating scent of citrus.",
      price: "$10",
      size: "100g",
      ingridients:
        "Organic Citrus Extracts, Organic Olive Oil, Organic Jojoba Oil",
      src: Soap2,
      id: 2,
    },
    {
      title: "Oatmeal Delight",
      description:
        "Indulge in the gentle exfoliation and nourishment of this organic oatmeal soap.",
      price: "$10",
      size: "100g",
      ingridients: "Organic Oats, Organic Coconut Milk, Organic Almond Oil",
      src: Soap3,
      id: 3,
    },
    {
      title: "Tea Tree Zen",
      description:
        " Experience the purifying benefits of tea tree oil with this organic soap.",
      price: "$10",
      size: "100g",
      ingridients: "Organic Tea, Tree Essential Oil, Organic Olive Oil",
      src: Soap4,
      id: 4,
    },
    {
      title: "Minty Fresh",
      description:
        "Awaken your senses with the cool and refreshing scent of mint in this organic soap.",
      price: "$10",
      size: "100g",
      ingridients:
        "Organic Peppermint Essential Oil, Organic Coconut Oil, Organic Sunflower Oil",
      src: Soap5,
      id: 5,
    },
    {
      title: "Honey Glow",
      description:
        "Indulge in the nourishing and moisturizing properties of honey with this organic soap.",
      price: "$10",
      size: "100g",
      ingridients: "Organic Honey, Organic Shea Butter, Organic Olive Oil",
      src: Soap6,
      id: 6,
    },
  ],

  serums: [
    {
      title: "Youth Renewal Serum",
      description: "Organic Rosehip Oil, Organic Acai Berry Extract, Organic Green Tea Extract.",
      price: "$70",
      size: "2oz",
      ingridients: "Rejuvenate your skin with this powerful serum that promotes a youthful appearance and reduces signs of aging.",
      src: Serum1,
      id: 1,
    },
    {
      title: "Brightening Glow Serum",
      description: "Achieve a radiant and glowing complexion with this serum that targets dark spots and uneven skin tone.",
      price: "$70",
      size: "2oz",
      ingridients: "Organic Vitamin C, Organic Licorice Root Extract, Organic Lemon Peel Extract.",
      src: Serum2,
      id: 2,
    },
    {
      title: "HydraQuench Serum",
      description: "Deeply hydrate and refresh your skin with this serum that quenches dryness and restores moisture balance.",
      price: "$70",
      size: "2oz",
      ingridients: "Organic Hyaluronic Acid, Organic Aloe Vera Gel, Organic Cucumber Extract.",
      src: Serum3,
      id: 3,
    },
    {
      title: "Firming Lift Serum",
      description: "Lift and firm your skin with this potent serum that improves elasticity and promotes a youthful look.",
      price: "$70",
      size: "2oz",
      ingridients: "Organic Peptides, Organic Hibiscus Extract, Organic Gotu Kola Extract.",
      src: Serum4,
      id: 4,
    },
    {
      title: "Clarifying Balance Serum",
      description: "Restore balance and clarity to your skin with this serum that minimizes pores and controls excess oil.",
      price: "$70",
      size: "2oz",
      ingridients: "Organic Tea Tree Oil, Organic Willow Bark Extract, Organic Witch Hazel Extract.",
      src: Serum5,
      id: 5,
    },
    {
      title: "Soothing Calm Serum",
      description: "Soothe and calm your skin with this gentle serum that reduces redness and irritation.",
      price: "$70",
      size: "2oz",
      ingridients: "Organic Chamomile Extract, Organic Calendula Oil, Organic Lavender Essential Oil.",
      src: Serum6,
      id: 6,
    },
    {
      title: "Radiance Boost Serum",
      description: "Enhance your skin's radiance with this serum that revitalizes and restores a healthy glow.",
      price: "$70",
      size: "2oz",
      ingridients: "Organic Vitamin E, Organic Pomegranate Extract, Organic Rosemary Leaf Extract.",
      src: Serum7,
      id: 7,
    },
    {
      title: "Revitalizing Overnight Serum",
      description: "Wake up to rejuvenated skin with this overnight serum that nourishes and repairs while you sleep.",
      price: "$70",
      size: "2oz",
      ingridients: "Organic Rose Oil, Organic Evening Primrose Oil, Organic Argan Oil.",
      src: Serum8,
      id: 8,
    },
  ],

  body: [
    {
      title: "Silky Smooth Body Cream",
      description: "Indulge in the luxurious texture of this organic body cream. Infused with nourishing botanical extracts and moisturizing oils, it deeply hydrates and softens the skin, leaving it silky smooth and velvety to the touch.",
      price: "$60",
      size: "50oz",
      ingridients: "Organic Shea Butter, Organic Coconut Oil, Organic Jojoba Oil.",
      src: BoCR1,
      id: 1,
    },
    {
      title: "Nourishing Bliss Body Cream",
      description: "Experience pure nourishment with this organic body cream. Enriched with nutrient-rich ingredients and antioxidants, it replenishes and revitalizes the skin, promoting a healthy and radiant appearance.",
      price: "$60",
      size: "50oz",
      ingridients: "Organic Mango Butter, Organic Avocado Oil, Organic Vitamin E.",
      src: BoCR2,
      id: 2,
    },
    {
      title: "Calming Lavender Body Cream",
      description: "Indulge in the calming aroma of lavender with this organic body cream. Infused with organic lavender essential oil and soothing botanicals, it provides deep hydration and relaxation for the body and mind.",
      price: "$60",
      size: "50oz",
      ingridients: " Organic Lavender Essential Oil, Organic Aloe Vera Gel, Organic Chamomile Extract.",
      src: BoCR3,
      id: 3,
    },
    {
      title: "Revitalizing Citrus Body Cream",
      description: "Energize your senses and revitalize your skin with this organic body cream. Bursting with uplifting citrus extracts and invigorating ingredients, it deeply moisturizes and invigorates the skin, leaving it refreshed and revitalized.",
      price: "$60",
      size: "50oz",
      ingridients: "Organic Citrus Extracts, Organic Shea Butter, Organic Olive Oil.",
      src: BoCR4,
      id: 4,
    },
    {
      title: "Firming & Toning Body Cream",
      description: "Achieve firmer and more toned skin with this organic body cream. Formulated with skin-firming botanicals and rejuvenating ingredients, it helps to improve skin elasticity and promote a smoother appearance.",
      price: "$60",
      size: "50oz",
      ingridients: "Organic Coffee Extract, Organic Green Tea Extract, Organic Rosehip Oil.",
      src: BoCR5,
      id: 5,
    },
    {
      title: "Soothing Aloe Vera Body Cream",
      description: "Soothe and hydrate your skin with this organic body cream. Infused with organic aloe vera gel and calming botanicals, it provides deep hydration and relieves dryness, leaving the skin feeling refreshed and nurtured.",
      price: "$60",
      size: "50oz",
      ingridients: "Organic Aloe Vera Gel, Organic Coconut Oil, Organic Calendula Extract.",
      src: BoCR6,
      id: 6,
    },
    {
      title: "Radiant Glow Body Cream",
      description: "Enhance your skin's natural radiance with this organic body cream. Enriched with skin-brightening ingredients and antioxidants, it helps to even out the skin tone and promote a luminous and radiant glow.",
      price: "$60",
      size: "50oz",
      ingridients: "Organic Turmeric Extract, Organic Vitamin C, Organic Rosehip Seed Oil.",
      src: BoCR7,
      id: 7,
    },
  ],
};

// Method

export default Products;
