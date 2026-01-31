import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Animal Feed Exporter India | Compound Feed & Concentrates',
    description: 'Bulk compound feed, mineral mixtures, and nutritional concentrates for livestock.',
};

export default function AnimalFeed() {
    const products = [
        {
            name: "Mineral & Vitamin Premix",
            description: "Balanced macro & trace minerals for dairy cattle, sheep & goat. Improves milk yield.",
            image: "/products/animal-feed/Mineral-Vitamin-Premix.jpg",
            specs: [
                { label: "Use", value: "Dairy, Small Ruminants" },
                { label: "Form", value: "Powder / Granules" }
            ]
        },
        {
            name: "Specialty Mineral Premix",
            description: "High-bioavailability chelated minerals for high-yielding dairy and breeder animals.",
            image: "/products/animal-feed/Specialty-Mineral-Premix.jpg",
            specs: [
                { label: "Benefit", value: "Immunity & Stress Support" },
                { label: "Form", value: "Powder" }
            ]
        },
        {
            name: "Protein & Mineral Feed Blocks",
            description: "Solid lick blocks (~20% protein) for rumen efficiency and fodder-deficit regions.",
            image: "/products/animal-feed/Protein-Mineral-Feed-Blocks.jpg",
            specs: [
                { label: "Use", value: "Cattle, Buffalo, Sheep" },
                { label: "Form", value: "Solid Block" }
            ]
        },
        {
            name: "Molasses Mineral Block",
            description: "Energy-rich solid blocks to prevent weight loss during dry seasons and improve palatability.",
            image: "/products/animal-feed/Molasses-Mineral-Block.jpg",
            specs: [
                { label: "Benefit", value: "Energy Supplementation" },
                { label: "Form", value: "Solid Block" }
            ]
        },
        {
            name: "Lactation Concentrate",
            description: "Pelleted concentrate with balanced protein-energy ratio for peak lactation support.",
            image: "/products/animal-feed/Lactation-Concentrate.jpg",
            specs: [
                { label: "Use", value: "High-yield Dairy Cows" },
                { label: "Form", value: "Pellets / Mash" }
            ]
        },
        {
            name: "Digestive Feed Supplement",
            description: "Gut health enhancer to improve nutrient absorption and reduce feed wastage.",
            image: "/products/animal-feed/Digestive-Feed-Supplement.jpg",
            specs: [
                { label: "Benefit", value: "Gut Health" },
                { label: "Form", value: "Powder / Liquid" }
            ]
        }
    ];

    const whySource = [
        "Strong agricultural raw material base.",
        "Cost-efficient feed manufacturing at scale.",
        "Ability to customize formulations for different species and climates.",
        "Experience in supplying import-dependent livestock markets."
    ];

    const overview = `We are an **India-based animal feed exporter** supplying finished compound feed, concentrates, supplements, and bio-processed feed products to institutional buyers.
  
  **Markets Served**: South Asia, Middle East (GCC), Africa, South East Asia.
  **Our Role**: Bulk export supplier for commercial farms, integrators, and government agencies. We do not sell retail branded feed.`;



    return (
        <ExportPageTemplate
            title="Animal Feed Supplements & Nutritional Concentrates"
            subtitle="Compound feed, mineral mixtures, and nutritional solutions for livestock."
            overview={overview}
            products={products}
            whySource={whySource}
        >
        </ExportPageTemplate>
    );
}
