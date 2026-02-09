import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Food, Spices & Plant-Based Ingredients Exporter India',
    description: 'Natural Food Colours, Oleoresins, and Functional Plant-Based Ingredients.',
};

export default function FoodSpices() {
    const products = [
        {
            name: "Paprika Oleoresin",
            description: "Natural colouring & mild flavouring agent. Rich red to orange colour with low pungency. Used in snacks, sauces, meat.",
            image: "/products/agro/Paprika-Oleoresin.jpg",
            specs: [
                { label: "HS Code", value: "330190" },
                { label: "Active", value: "Capsanthin, Capsorubin" }
            ]
        },
        {
            name: "Chilli Oleoresin",
            description: "Highly concentrated colour & pungency. Natural alternative to synthetic colours. Used in processed foods and pharma.",
            image: "/products/agro/Chilli-Oleoresin.jpg",
            specs: [
                { label: "HS Code", value: "330190" },
                { label: "Active", value: "Capsaicin" }
            ]
        },
        {
            name: "Annatto Extract",
            description: "Natural yellow–orange colouring agent. Bright, stable colour for dairy, bakery, and beverages.",
            image: "/products/agro/Annatto-Extract.jpg",
            specs: [
                { label: "HS Code", value: "320300" },
                { label: "Forms", value: "Oil/Water Soluble" }
            ]
        },
        {
            name: "Beetroot Red",
            description: "Natural red–pink colouring agent. Clean-label, non-toxic. Used in beverages, dairy, and cosmetics.",
            image: "/products/agro/Beetroot-Red.jpg",
            specs: [
                { label: "HS Code", value: "320300" },
                { label: "Active", value: "Betanin" }
            ]
        },
        {
            name: "Chlorophyll Extract",
            description: "Natural green colouring agent. Deodorizing and antioxidant properties. Used in confectionery and oral care.",
            image: "/products/agro/Chlorophyll-Extract.jpg",
            specs: [
                { label: "HS Code", value: "320300" },
                { label: "Forms", value: "Oil/Water Soluble" }
            ]
        },
        {
            name: "Turmeric Curcumin",
            description: "Anti-inflammatory & joint health support. 95% Curcumin extract.",
            image: "/products/agro/Turmeric-Curcumin-Extract.jpeg",
            specs: [
                { label: "HS Code", value: "130219" },
                { label: "Standard", value: "95% Curcumin" }
            ]
        }
    ];

    const whySource = [
        "India is a globally established origin for spices & botanical ingredients.",
        "Agro-climatic diversity ensuring high quality.",
        "Processing depth and export compliance maturity.",
        "Supply continuity and batch consistency."
    ];

    const overview = `We supply bulk spices, natural food inputs, and plant-based functional ingredients for food processing, nutraceutical, and institutional consumption markets.

  Focus: Natural Food Colours, Oleoresins, and Functional Plant Extracts.

  Export Format: Oil-soluble oleoresins, water-soluble extracts, and standardized powders.`;

    const seoFooter = 'India spices exporter | Natural food colours India | Chilli oleoresin supplier | Paprika oleoresin | Turmeric curcumin exporter | Beetroot red | Plant-based ingredients exporter India';

    return (
        <ExportPageTemplate
            title="Food, Spices & Plant-Based Ingredients"
            subtitle="Exotic Spices, Natural Food Colours, and Functional Ingredients."
            heroImage="/Banner 2. Food, Spices & Plant-Based Ingredients-2.png"
            overview={overview}
            products={products}
            whySource={whySource}
            seoFooter={seoFooter}
        />
    );
}
