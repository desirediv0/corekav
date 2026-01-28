import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Makhana & Spices Exporter India | Fox Nuts & Functional Ingredients',
    description: 'Exotic Spices, Makhana (Fox Nuts), and Plant-Based Functional Ingredients. HS Code 080290.',
};

export default function Spices() {
    const products = [
        {
            name: "Makhana (Fox Nuts / Lotus Seeds)",
            description: "Healthy snack & functional food ingredient. Low GI, Rich in Magnesium/Potassium. Used in snacks, traditional medicine, and gluten-free foods.",
            specs: [
                { label: "HS Code", value: "080290" },
                { label: "Forms", value: "Raw, Puffed, Roasted, Flour" }
            ]
        },
        {
            name: "Chilli Oleoresin",
            description: "Natural colouring & flavouring agent. Highly concentrated. Used in processed foods, pharma (capsaicin), and cosmetics.",
            specs: [
                { label: "HS Code", value: "330190" },
                { label: "Active", value: "Capsaicin, Capsanthin" }
            ]
        },
        {
            name: "Saffron",
            description: "Premium spice for culinary, nutraceutical, and cosmetic use. Strong antioxidant & neuroprotective properties.",
            specs: [
                { label: "HS Code", value: "091020" },
                { label: "Forms", value: "Whole Stigmas, Powder" }
            ]
        },
        {
            name: "Pea Protein Isolate",
            description: "~80–85% protein content. Plant-based meat/dairy alternative. Allergen-free, neutral taste.",
            specs: [
                { label: "HS Code", value: "350400" },
                { label: "Form", value: "Powder (Spray-dried)" }
            ]
        },
        {
            name: "Moringa Leaf / Powder",
            description: "Nutritional supplement & functional food blend. 25–30% plant protein. Rich in Calcium, Iron, Potassium.",
            specs: [
                { label: "HS Code", value: "121190" },
                { label: "Forms", value: "Leaf Powder, Dried Leaves" }
            ]
        }
    ];

    const whySource = [
        "India is a globally established origin for spices & botanical ingredients.",
        "Agro-climatic diversity ensuring high quality.",
        "Processing depth and export compliance maturity.",
        "Supply continuity and batch consistency."
    ];

    const overview = `Why Buyers Source from us and India:
  India is a globally established origin for spices, botanical ingredients, and plant-based functional food inputs due to its agro-climatic diversity, processing depth, and export compliance maturity.
  
  We supply **Makhana (Fox Nuts)**, **Spices (Saffron, Chilli Oleoresin)**, and **Plant-Based Functional Ingredients (Pea Protein, Moringa)** to food manufacturers, nutraceutical companies, and bulk distributors.`;

    return (
        <ExportPageTemplate
            title="Spices, Food & Functional Ingredients"
            subtitle="Exotic Spices, Makhana (Fox Nuts), and Plant-Based Functional Ingredients."
            overview={overview}
            products={products}
            whySource={whySource}
        />
    );
}
