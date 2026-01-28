import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Herbal Extracts & Nutraceutical Ingredients Exporter India',
    description: 'Ayurveda-based functional ingredients, Men’s Vitality, Premium Beauty & Personal Care inputs.',
};

export default function Nutraceuticals() {
    const products = [
        {
            name: "Tocopherol (Vitamin E)",
            description: "Antioxidant for pharma, nutraceuticals & cosmetics. Protects against oxidative damage. HS Code: 293628.",
            specs: [
                { label: "Forms", value: "Mixed Tocopherols, Acetate" },
                { label: "Use", value: "Antioxidant / Stabilizer" }
            ]
        },
        {
            name: "Shilajit (Purified Resin)",
            description: "Men’s vitality & longevity. Rich in fulvic & humic minerals. Supports cellular energy & stamina. HS Code: 121190/300390.",
            specs: [
                { label: "Forms", value: "Resin, Capsules, Powder" },
                { label: "Benefit", value: "Vitality & Stamina" }
            ]
        },
        {
            name: "Shilajit + Ashwagandha Complex",
            description: "90-day vitality program input. Stress balance, hormonal support, endurance. Non-habit forming.",
            specs: [
                { label: "Blend", value: "Resin + Extract" },
                { label: "Target", value: "Men's Wellness" }
            ]
        },
        {
            name: "Ashwagandha Extract",
            description: "Adaptogenic stress control, hormonal balance. Standardized to ≥5% Withanolides. GMP Certified.",
            specs: [
                { label: "Standard", value: "≥5% Withanolides" },
                { label: "Use", value: "Stress / Sleep" }
            ]
        },
        {
            name: "Targeted Herbal Extracts",
            description: "Triphala (Digestion), Shatavari (Women's Health), Brahmi (Memory), Boswellia (Joints), Tulsi (Immunity), Turmeric Curcumin (Inflammation).",
            specs: [
                { label: "Grade", value: "Standardized Extracts" },
                { label: "Cert", value: "GMP / ISO" }
            ]
        },
        {
            name: "Premium Beauty Oils",
            description: "Kumkumadi Oil (Skin brightening), Bhringraj Hair Oil (Scalp health), Moringa Oil (Carrier oil).",
            specs: [
                { label: "Use", value: "Cosmetic / Personal Care" },
                { label: "Type", value: "Herbal Oils" }
            ]
        }
    ];

    const whySource = [
        "Deep-rooted Ayurvedic and botanical knowledge systems.",
        "Sourcing of medicinal plants and functional herbs at scale.",
        "Mature extraction, drying, and standardization capabilities.",
        "Cost-efficient production aligned with global quality expectations."
    ];

    const overview = `We are an India-based exporter of herbal extracts, nutraceutical-grade botanicals, and Ayurveda-based functional ingredients used across dietary supplements, men’s vitality & longevity formulations, and premium beauty, skincare, and personal care products.

  **Our role is strictly bulk ingredient export and formulation supply.** We do not export finished consumer supplements or retail cosmetic products directly to consumers.`;

    return (
        <ExportPageTemplate
            title="Nutraceuticals, Herbal & Ayurveda"
            subtitle="Herbal Extracts, Health Supplements, Personal Care, & Vitality Ingredients."
            overview={overview}
            products={products}
            whySource={whySource}
        />
    );
}
