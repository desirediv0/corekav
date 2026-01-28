import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Animal Feed Exporter India | Compound Feed & Concentrates',
    description: 'Supplying Compound Feed, Concentrates & Nutritional Products to Global Livestock Markets. HS Code 230990.',
};

export default function AnimalFeed() {
    const products = [
        {
            name: "Mineral & Vitamin Blend",
            description: "Balanced macro & trace minerals for Dairy cattle, buffalo, sheep & goat. Improves milk yield & fertility.",
            specs: [
                { label: "Form", value: "Powder / Granules" },
                { label: "Application", value: "Milk yield & fertility support" }
            ]
        },
        {
            name: "Specialty Mineral Premix",
            description: "Chelated Zinc, Copper, Manganese for high-yield dairy & breeder animals. Higher bioavailability.",
            specs: [
                { label: "Form", value: "Powder" },
                { label: "Key", value: "Stress & immunity support" }
            ]
        },
        {
            name: "High-Protein Feed Block",
            description: "~20% CP. Ideal for fodder-deficit regions. Improves rumen efficiency for Cattle, buffalo, sheep, goats.",
            specs: [
                { label: "Form", value: "Solid lick blocks" },
                { label: "Protein", value: "~20% CP" }
            ]
        },
        {
            name: "Molasses-Based Energy Concentrates",
            description: "Liquid/Semi-solid quick energy source for Dairy cattle & buffalo. Enhances milk production.",
            specs: [
                { label: "Form", value: "Liquid / Semi-solid" },
                { label: "Benefit", value: "Quick energy source" }
            ]
        },
        {
            name: "Lactation Concentrate",
            description: "Pellets/Mash for High-yield dairy cows. Supports peak lactation and milk volume.",
            specs: [
                { label: "Form", value: "Pellets / Mash" },
                { label: "Use", value: "Peak lactation support" }
            ]
        },
        {
            name: "Complete Compound Feed",
            description: "Finished feed pellets/flakes for Poultry, Cattle, Buffalo, Sheep, Goat, Swine and Aquaculture.",
            specs: [
                { label: "Types", value: "Cattle, Poultry, Aqua, Swine" },
                { label: "Packaging", value: "Bulk / Bagged" }
            ]
        }
    ];

    const whySource = [
        "Strong agricultural raw material base.",
        "Cost-efficient feed manufacturing at scale.",
        "Ability to customize formulations for different species.",
        "Experience in supplying import-dependent markets."
    ];

    const overview = `We are an India-based animal feed exporter supplying finished compound feed, concentrates, supplements, and bio-processed feed products to institutional buyers across South Asia, Middle East (including GCC), Africa, South East Asia, Central Asia, and select emerging markets.

  Our exports are designed for commercial livestock farms, poultry integrators, aquaculture operators, cooperatives, distributors, and government procurement agencies. ALL products are supplied in containerized bulk or bagged formats, aligned with buyer specifications.
  
  **We operate as a bulk export supplier, not a retail or branded feed seller.**`;

    return (
        <ExportPageTemplate
            title="Animal Feed Export"
            subtitle="Supplying Compound Feed, Concentrates & Nutritional Products to Global Livestock Markets. HS Code 230990."
            overview={overview}
            products={products}
            whySource={whySource}
        />
    );
}
