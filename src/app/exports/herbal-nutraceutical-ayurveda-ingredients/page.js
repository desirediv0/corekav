import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Nutraceutical, Herbal & Ayurveda Ingredients Exporter India',
    description: 'Bulk herbal extracts, nutraceutical ingredients, and Ayurveda functional inputs.',
};

export default function Nutraceuticals() {
    // Client images: save to public/products/herbal/ with these names to show on cards
    const products = [
        {
            name: "Ashwagandha Extract (Indian Ginseng)",
            description: "Adaptogenic stress control, hormonal balance. Standardized to ≥5% Withanolides.",
            image: "/products/herbal/ashwagandha-extract-2.png",
            specs: [
                { label: "HS Code", value: "121190 / 130219" },
                { label: "Use", value: "Stress relief, sleep" }
            ]
        },
        {
            name: "Shilajit (Mineral Pitch / Asphaltum)",
            description: "Hormonal balance, vitality, and cellular energy. Rich in Fulvic & Humic minerals.",
            image: "/products/herbal/Shilajit.jpg",
            specs: [
                { label: "HS Code", value: "121190 / 300390" },
                { label: "Forms", value: "Resin, Powder, Capsules" }
            ]
        },
        {
            name: "Shatavari Root Extract (Wild Asparagus)",
            description: "Rejuvenative tonic for women's health. Supports hormonal balance.",
            image: "/products/herbal/Shatavari-Root-Extract.jpeg",
            specs: [
                { label: "HS Code", value: "121190" },
                { label: "Certifications", value: "GMP, ISO" }
            ]
        },
        {
            name: "Boswellia Extract (Indian Frankincense)",
            description: "Anti-inflammatory support for joint health and mobility.",
            image: "/products/herbal/Boswellia-Serrata-Extract.jpg",
            specs: [
                { label: "HS Code", value: "130219" },
                { label: "Global Name", value: "Boswellia Serrata" }
            ]
        },
        {
            name: "Moringa Leaf Powder (Drumstick Tree)",
            description: "Nutritious superfood rich in protein, calcium, and iron. Used in supplements and feed.",
            image: "/products/herbal/Moringa-Leaf-Powder.jpg",
            specs: [
                { label: "HS Code", value: "12119" },
                { label: "Forms", value: "Leaf Powder (60-100 mesh)" }
            ]
        },
        {
            name: "Tocopherol (Vitamin E)",
            description: "Powerful antioxidant for pharma, cosmetics, and food preservation.",
            image: "/products/herbal/Tocopherol.jpg",
            specs: [
                { label: "HS Code", value: "293628" },
                { label: "Forms", value: "Oil, Powder" }
            ]
        },
        {
            name: "Brahmi Extract (Water Hyssop / Bacopa)",
            description: "Cognitive support herb known for enhancing memory and focus (Bacopa Monnieri).",
            image: "/products/herbal/Brahmi-Extract.jpg",
            specs: [
                { label: "Active", value: "Bacosides" },
                { label: "Use", value: "Brain Health" }
            ]
        },
        {
            name: "Triphala Extract (Three Fruits)",
            description: "Traditional Ayurvedic digestive tonic composed of three fruits: Amla, Bibhitaki, and Haritaki.",
            image: "/products/herbal/Triphala-Extract.jpg",
            specs: [
                { label: "Benefit", value: "Digestion & Detox" },
                { label: "Form", value: "Extract Powder" }
            ]
        },
        {
            name: "Tulsi Extract (Holy Basil)",
            description: "Adaptogenic herb for immunity, respiratory health, and stress relief.",
            image: "/products/herbal/Tulsi-Extract.jpg",
            specs: [
                { label: "Active", value: "Ursolic Acid" },
                { label: "Use", value: "Immunity" }
            ]
        },
        {
            name: "Shilajit + Ashwagandha Vitality Complex",
            description: "90-day vitality program. Supports energy, stamina, hormonal balance, and men's wellness. Non-habit forming.",
            image: "/products/herbal/Ashwagandha-Extract.png",
            specs: [
                { label: "HS Code", value: "121190 / 300390" },
                { label: "Forms", value: "Capsules, Resin + Extract, Powder" }
            ]
        }
    ];

    const seoFooter = 'Herbal extracts exporter India | Nutraceutical ingredients exporter | Ayurvedic ingredients supplier India | Herbal nutraceutical raw materials export | Men vitality supplement ingredients supplier | Longevity supplement ingredient exporter India | Ayurvedic skincare raw material exporter | Herbal cosmetic ingredients supplier India | Botanical extract exporter India | Functional herbal ingredients export | Bulk nutraceutical ingredient supplier | Ayurveda personal care ingredients exporter';

    const whySource = [
        "Deep-rooted Ayurvedic and botanical knowledge systems.",
        "Sourcing of medicinal plants and functional herbs at scale.",
        "Mature extraction, drying, and standardization capabilities.",
        "Cost-efficient production aligned with global quality expectations."
    ];

    const overview = `We are an India-based exporter of herbal extracts, nutraceutical-grade botanicals, and Ayurveda-based functional ingredients used across dietary supplements, men’s vitality & longevity formulations, and premium beauty products.

  Our Role: Strictly bulk ingredient export and formulation supply. We do not export finished consumer supplements.
  
  Key Products: Ashwagandha (Indian Ginseng), Shilajit, Shatavari (Wild Asparagus), Boswellia (Frankincense), Moringa, Vitamin E, Vitality Complex.
  
  Export Format: Raw Extracts, Capsules, Powders, Oils.
  
  Enquiry for Supply: If you are sourcing herbal extracts, nutraceutical ingredients, or Ayurveda-based functional inputs from India, we welcome structured discussions covering botanical type, extract ratio, volumes, MOQs, packaging formats, and regulatory documentation.`;

    // Using the new collage image for Nutra


    return (
        <ExportPageTemplate
            title="Nutraceutical, Herbal Extracts & Ayurveda Ingredients"
            subtitle="Botanical functional ingredients for supplements and personal care."
            heroImage="/Banner1. Nutraceutical, Herbal Extracts & Ayurveda Ingredients.png"
            overview={overview}
            products={products}
            whySource={whySource}
            seoFooter={seoFooter}
        />
    );
}
