import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Specialised Agro, Makhana & Saffron Exporter India',
    description: 'Bulk Makhana (Fox Nuts), Pea Protein Isolate, and Saffron exports.',
};

export default function Makhana() {
    // Client images: save to public/products/agro/ (see CLIENT_IMAGES_PLACEMENT.md)
    const products = [
        {
            name: "Makhana (Fox Nuts)",
            description: "Low-GI healthy snack, rich in protein and minerals. Gluten-free and vegan.",
            image: "/products/Nutrients/Makhana.jpeg",
            specs: [
                { label: "HS Code", value: "080290" },
                { label: "Forms", value: "Raw, Roasted, Puffed, Flour" }
            ]
        },
        {
            name: "Pea Protein Isolate",
            description: "80-85% protein content. Allergen-free plant protein for meat/dairy alternatives.",
            image: "/products/Nutrients/Pea-Protein-Isolate.avif",
            specs: [
                { label: "HS Code", value: "350400" },
                { label: "Form", value: "Spray-dried Powder" }
            ]
        },
        {
            name: "Saffron",
            description: "Premium spice for culinary and nutraceutical use. Antioxidant and mood support.",
            image: "/products/Nutrients/Saffron.jpeg",
            specs: [
                { label: "HS Code", value: "091020" },
                { label: "Active", value: "Crocin, Safranal" }
            ]
        },
        {
            name: "Dehydrated Vegetables",
            description: "Various dehydrated vegetable products for food processing.",
            image: "/products/Nutrients/Dehydrated-vegetables.jpg",
            specs: [
                { label: "Use", value: "Instant Foods, Soups" },
                { label: "Grade", value: "Food Grade" }
            ]
        }
    ];

    const whySource = [
        "India is a global leader in Fox Nut (Makhana) production.",
        "Strong plant-based protein manufacturing base.",
        "Consistency in batch quality and moisture control.",
        "Export-grade bulk packaging (bags, drums, cartons)."
    ];

    const overview = `We supply **Specialised Agro-Commodities** focusing on high-value, functional food ingredients like **Makhana, Pea Protein, and Saffron**.
  
  **Focus**: Healthy snacking, plant-based nutrition, and premium spices.
  **Execution**: Batch-wise processing, grading, and strict moisture control for international shipment.`;

    return (
        <ExportPageTemplate
            title="Specialised Agro - Makhana & Saffron"
            subtitle="Fox Nuts, Plant Proteins, and Premium Agro Commodities."
            overview={overview}
            products={products}
            whySource={whySource}
        />
    );
}
