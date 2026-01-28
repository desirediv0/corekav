import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Human Medical Consumables Exporter India | HS Code 401511',
    description: 'Supplying Essential Hospital & Healthcare Disposables Across Global Institutional Markets.',
};

export default function Medical() {
    const products = [
        {
            name: "Disposable Medical Syringes",
            description: "Single-use disposable medical syringes (Luer lock / Luer slip) for routine hospital and clinical use.",
            specs: [
                { label: "Format", value: "Luer Lock / Slip" },
                { label: "Source", value: "Compliant Mfg" }
            ]
        },
        {
            name: "Sterile Hypodermic Needles",
            description: "Sterile needles suitable for clinical, vaccination, and diagnostic use. Bulk supply for hospitals & immunization.",
            specs: [
                { label: "Use", value: "Clinical / Vaccination" },
                { label: "Sterility", value: "EO Sterile" }
            ]
        },
        {
            name: "IV Sets & Cannulae",
            description: "IV infusion sets, IV cannulae, and flow regulators used in inpatient and emergency care.",
            specs: [
                { label: "Items", value: "Sets, Cannulae, Regulators" },
                { label: "Target", value: "Emergency / Inpatient" }
            ]
        },
        {
            name: "Latex & Nitrile Gloves",
            description: "High-rotation exam gloves (Latex & Nitrile) supplied in large volumes for medical and diagnostic use.",
            specs: [
                { label: "Material", value: "Latex / Nitrile" },
                { label: "Volume", value: "High Rotation" }
            ]
        },
        {
            name: "Wound Care Consumables",
            description: "Essential wound care products including Sterile gauze, Adhesive bandages, and Dressing materials.",
            specs: [
                { label: "Items", value: "Gauze, Bandages" },
                { label: "Application", value: "Clinical Care" }
            ]
        },
        {
            name: "Labware & Diagnostics",
            description: "Specimen trays, sample containers, blood collection tubes, and basic lab plastics.",
            specs: [
                { label: "Items", value: "Tubes, Containers" },
                { label: "Use", value: "Pathology / Lab" }
            ]
        }
    ];

    const whySource = [
        "Large-scale, compliant production capacity.",
        "Competitive pricing for bulk procurement.",
        "Familiarity with international hospital usage standards.",
        "Ability to supply continuous volumes for public health systems."
    ];

    const overview = `We are an India-based exporter of human medical consumables and hospital-use disposables, supplying to hospitals, clinics, medical distributors, NGOs, and public procurement agencies across South Asia, Middle East (including GCC), Africa, South East Asia, Central Asia, and select emerging markets.

  Our exports focus on essential, high-volume medical products sourced from compliant Indian manufacturers, supplied under structured export documentation. **We do not operate as a retail brand; we function as a reliable institutional export supplier.**`;

    return (
        <ExportPageTemplate
            title="Human Medical Consumables"
            subtitle="Supplying Essential Hospital & Healthcare Disposables Across Global Institutional Markets. HS Code 401511."
            overview={overview}
            products={products}
            whySource={whySource}
        />
    );
}
