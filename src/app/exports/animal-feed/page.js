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
        },
        {
            name: "Molasses-Based Feeds",
            description: "Quick energy source. Improves feed palatability and milk production. Liquid, semi-solid or solid blocks.",
            image: "/products/animal-feed/Molasses-Mineral-Block.jpg",
            specs: [
                { label: "Use", value: "Dairy Cattle & Buffalo" },
                { label: "Form", value: "Liquid / Semi-solid / Block" }
            ]
        },
        {
            name: "Growth Concentrates",
            description: "Pelleted concentrates for accelerated weight gain and strong skeletal development in calves, heifers, small ruminants.",
            image: "/products/animal-feed/Lactation-Concentrate.jpg",
            specs: [
                { label: "Use", value: "Calves, Heifers" },
                { label: "Form", value: "Pellets" }
            ]
        },
        {
            name: "Anti-Stress Feed Supplement",
            description: "Water-soluble electrolyte and vitamin support for heat and transport stress relief. Immunity booster.",
            image: "/products/animal-feed/Specialty-Mineral-Premix.jpg",
            specs: [
                { label: "Use", value: "Livestock & Poultry" },
                { label: "Form", value: "Water-soluble Powder" }
            ]
        },
        {
            name: "Protein Feed Ingredients",
            description: "High protein (~45% CP) pellets or meal for cattle and poultry feed. High palatability, export-friendly.",
            image: "/products/animal-feed/Protein-Mineral-Feed-Blocks.jpg",
            specs: [
                { label: "Protein", value: "~45% CP" },
                { label: "Form", value: "Pellets / Meal" }
            ]
        },
        {
            name: "Feed Functional Ingredients",
            description: "Improves fat digestion, pellet binding and lubrication. Enhances feed efficiency. Liquid or powder.",
            image: "/products/animal-feed/Digestive-Feed-Supplement.jpg",
            specs: [
                { label: "Use", value: "Animal Feed & Pet Food" },
                { label: "Form", value: "Liquid / Powder" }
            ]
        },
        {
            name: "Finished / Compound Feed – Cattle",
            description: "Compound cattle feed in pellets or flakes, formulated for institutional and commercial use.",
            image: "/Finish _ Compound Feeds .png",
            specs: [
                { label: "Form", value: "Pellets / Flakes" },
                { label: "Use", value: "Cattle" }
            ]
        },
        {
            name: "Finished / Compound Feed – Poultry",
            description: "Compound poultry feed formulated as per buyer specification.",
            specs: [
                { label: "Form", value: "As specified" },
                { label: "Use", value: "Poultry" }
            ]
        },
        {
            name: "Finished / Compound Feed – Buffalo, Sheep & Goat, Pig/Swine, Aquaculture",
            description: "Species-specific compound feed for buffalo, sheep & goat, pig/swine, and aquaculture. Formulation as per buyer requirement.",
            specs: [
                { label: "Species", value: "Buffalo, Sheep, Goat, Pig, Aquaculture" },
                { label: "Form", value: "As specified" }
            ]
        }
    ];

    const whySource = [
        "Strong agricultural raw material base.",
        "Cost-efficient feed manufacturing at scale.",
        "Ability to customize formulations for different species and climates.",
        "Experience in supplying import-dependent livestock markets."
    ];

    const overview = `We are an India-based animal feed exporter supplying finished compound feed, concentrates, supplements, and bio-processed feed products to institutional buyers across South Asia, Middle East (including GCC), Africa, South East Asia, Central Asia, and select emerging markets.

  Our exports are designed for commercial livestock farms, poultry integrators, aquaculture operators, cooperatives, distributors, and government procurement agencies. All products are supplied in containerized bulk or bagged formats, aligned with buyer specifications, feeding practices, and destination country regulations. We operate as a bulk export supplier, not a retail or branded feed seller.

  Packaging and Supply Formats: Bulk containerized shipments; bagged protein, mineral and energy concentrates as per buyer requirement; customized packing sizes for distributors and farms; formulation aligned with destination regulations.`;

    const seoFooter = 'Animal feed exporter India | Compound feed supplier | Livestock feed bulk export | Poultry feed exporter India | Aquaculture feed supplier';

    return (
        <ExportPageTemplate
            title="Animal Feed Supplements & Nutritional Concentrates"
            subtitle="Compound feed, mineral mixtures, and nutritional solutions for livestock."
            heroImage="/Banner 4. Animal Feed Supplements & Nutritional Concentrates.png"
            overview={overview}
            products={products}
            whySource={whySource}
            seoFooter={seoFooter}
        />
    );
}
