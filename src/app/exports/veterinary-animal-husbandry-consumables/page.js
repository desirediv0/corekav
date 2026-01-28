import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Veterinary Consumables Exporter India | HS Code 901831',
    description: 'Supplying Essential Veterinary Disposables & Farm-Use Consumables to Global Institutional Buyers.',
};

export default function Veterinary() {
    const products = [
        {
            name: "Vet-Grade Disposable Syringes",
            description: "Disposable veterinary syringes supplied in bulk for farm and clinical use (Livestock vaccination, routine procedures).",
            specs: [
                { label: "Use", value: "Bulk Farm / Clinical" },
                { label: "Application", value: "Vaccination / Routine" }
            ]
        },
        {
            name: "Sterile & Reusable Needles",
            description: "Sterile disposable and reusable veterinary needles suitable for livestock and large-animal use (Cattle, poultry, sheep, swine).",
            specs: [
                { label: "Types", value: "Disposable / Reusable" },
                { label: "Target", value: "Large Animal / Livestock" }
            ]
        },
        {
            name: "IV Sets & Infusion Tubing",
            description: "Veterinary-grade IV sets and infusion tubing used for fluid therapy and emergency care in animals.",
            specs: [
                { label: "Grade", value: "Veterinary Grade" },
                { label: "Use", value: "Fluid Therapy" }
            ]
        },
        {
            name: "Latex & Nitrile Gloves",
            description: "Protective gloves for veterinary professionals and farm workers. Latex exam gloves and Nitrile options.",
            specs: [
                { label: "Material", value: "Latex / Nitrile" },
                { label: "Use", value: "Protection / Exam" }
            ]
        },
        {
            name: "Hoof Rasps & Knives",
            description: "Hand tools used for hoof care, trimming, and animal welfare. For commercial dairy farms and cooperatives.",
            specs: [
                { label: "Type", value: "Hand Tools" },
                { label: "Application", value: "Hoof Care" }
            ]
        },
        {
            name: "Surgical Instruments",
            description: "Basic veterinary surgical instruments (Forceps, Clamps, Trays) supplied for routine use.",
            specs: [
                { label: "Items", value: "Forceps, Clamps" },
                { label: "Grade", value: "Surgical Steel" }
            ]
        }
    ];

    const whySource = [
        "Cost-efficient manufacturing at scale.",
        "Availability of farm-grade and institutional-grade products.",
        "Consistent quality suitable for routine veterinary use.",
        "Strong export experience to import-dependent livestock markets."
    ];

    const overview = `We are an India-based exporter of veterinary and animal husbandry consumables, supplying to commercial farms, veterinary hospitals, distributors, cooperatives, NGOs, and institutional buyers across South Asia, Middle East (including GCC), Africa, South East Asia, Central Asia, and select emerging markets.

  Our veterinary exports focus on essential, high-rotation consumables used in routine animal healthcare, livestock management, and farm operations. These products are often procured alongside animal feed and nutritional products, enabling logistics efficiency.`;

    return (
        <ExportPageTemplate
            title="Veterinary & Animal Husbandry Consumables"
            subtitle="Supplying Essential Veterinary Disposables & Farm-Use Consumables to Global Institutional Buyers. HS Code 901831."
            overview={overview}
            products={products}
            whySource={whySource}
        />
    );
}
