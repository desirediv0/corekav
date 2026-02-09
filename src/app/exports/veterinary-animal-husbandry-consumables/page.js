import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Veterinary Consumables Exporter India',
    description: 'Veterinary disposables, syringes, needles, and farm instruments.',
};

export default function Veterinary() {
    // Client images: save to public/products/veterinary/ (see CLIENT_IMAGES_PLACEMENT.md)
    const products = [
        {
            name: "Vet-Grade Disposable Syringes",
            description: "Bulk syringes for livestock vaccination and routine procedures.",
            image: "/products/veterinary/Vet-Grade-Disposable-Syringes.jpeg",
            specs: [
                { label: "HS Code", value: "901831" },
                { label: "Use", value: "Farm & Clinical" }
            ]
        },
        {
            name: "Veterinary Needles",
            description: "Sterile disposable and reusable needles for large animals and livestock.",
            image: "/products/veterinary/Veterinary-Needles.png",
            specs: [
                { label: "Type", value: "Sterile & Reusable" },
                { label: "Use", value: "Cattle, Poultry, Sheep" }
            ]
        },
        {
            name: "IV Sets & Infusion Tubing",
            description: "Veterinary-grade IV sets for fluid therapy in animals.",
            image: "/products/veterinary/IV-Sets.jpg",
            specs: [
                { label: "Application", value: "Fluid Therapy" },
                { label: "Grade", value: "Veterinary" }
            ]
        },
        {
            name: "Hoof Care Tools & Instruments",
            description: "Hoof rasps, knives, and surgical instruments (forceps, clamps).",
            image: "/products/veterinary/Hoof-Care-Tools-Farm-Instruments.jpg",
            specs: [
                { label: "Type", value: "Hand Tools" },
                { label: "Use", value: "Hoof Care, Surgery" }
            ]
        },
        {
            name: "Gloves (Latex & Nitrile)",
            description: "Protective gloves for veterinary professionals and farm workers.",
            image: "/products/veterinary/Gloves.png",
            specs: [
                { label: "Material", value: "Latex / Nitrile" },
                { label: "Use", value: "Examination, Handling" }
            ]
        },
        {
            name: "Surgical Instruments (Forceps, Clamps, Trays)",
            description: "Basic veterinary surgical and procedural instruments for routine use.",
            specs: [
                { label: "Type", value: "Forceps, Clamps, Trays" },
                { label: "Use", value: "Surgery, Procedures" }
            ]
        },
        {
            name: "Tubs & Containers (OEM / White-Label)",
            description: "Plastic and metal accessories for veterinary procedures, storage, and handling.",
            specs: [
                { label: "Type", value: "OEM / White-Label" },
                { label: "Use", value: "Storage, Handling" }
            ]
        },
        {
            name: "Sample Collection Tubes & Veterinary Labware",
            description: "Consumables for diagnostic sampling and basic veterinary laboratory work.",
            specs: [
                { label: "Use", value: "Diagnostics, Sampling" },
                { label: "Grade", value: "Veterinary" }
            ]
        }
    ];

    const whySource = [
        "Cost-efficient manufacturing at scale.",
        "Availability of farm-grade and institutional-grade products.",
        "Consistent quality suitable for routine veterinary use.",
        "Strong export experience to import-dependent livestock markets."
    ];

    const overview = `We are an India-based exporter of veterinary and animal husbandry consumables, supplying to commercial farms, veterinary hospitals, and distributors.

  Focus: Essential, high-rotation consumables used in routine animal healthcare.`;

    const seoFooter = 'Veterinary consumables exporter India | Animal husbandry supplies exporter | Vet syringes bulk supplier | Livestock consumables export';

    return (
        <ExportPageTemplate
            title="Veterinary & Animal Husbandry Consumables"
            subtitle="Essential veterinary disposables and farm-use instruments."
            heroImage="/Banner 5. Veterinary & Animal Husbandry.png"
            overview={overview}
            products={products}
            whySource={whySource}
            seoFooter={seoFooter}
        />
    );
}
