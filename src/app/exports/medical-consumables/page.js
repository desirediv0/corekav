import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Human Medical Consumables Exporter India',
    description: 'Hospital disposables, syringes, gloves, and diagnostic consumables.',
};

export default function MedicalConsumables() {
    // Client images: save to public/products/medical/ (see CLIENT_IMAGES_PLACEMENT.md)
    const products = [
        {
            name: "Disposable Medical Syringes",
            description: "Single-use syringes (Luer Lock/Slip) for hospital and clinical use.",
            image: "/products/medical/Disposable-Medical-Syringes.jpeg",
            specs: [
                { label: "HS Code", value: "901831" },
                { label: "Type", value: "Disposable" }
            ]
        },
        {
            name: "Sterile Hypodermic Needles",
            description: "Bulk sterile needles for clinical, vaccination, and diagnostic use.",
            image: "/products/medical/Hypodermic-Needles.jpeg",
            specs: [
                { label: "Use", value: "Clinical / Immunization" },
                { label: "Sterility", value: "EO Sterile" }
            ]
        },
        {
            name: "IV Sets & Cannulae",
            description: "IV infusion sets, flow regulators, and IV cannulae for patient care.",
            image: "/products/medical/IV-Infusion-Sets-Cannulae.jpg",
            specs: [
                { label: "Application", value: "Infusion / Emergency" },
                { label: "Type", value: "Disposable" }
            ]
        },
        {
            name: "Examination Gloves",
            description: "Latex and Nitrile examination gloves for medical and specific handling.",
            image: "/products/medical/Examination-Gloves.jpeg",
            specs: [
                { label: "HS Code", value: "401511" },
                { label: "Material", value: "Latex / Nitrile" }
            ]
        },
        {
            name: "Diagnostic Labware",
            description: "Blood collection tubes, specimen trays, and basic laboratory plastics.",
            image: "/products/medical/Diagnostic-Lab-Consumables.png",
            specs: [
                { label: "Use", value: "Pathology / Diagnostics" },
                { label: "Material", value: "Medical Grade Plastic" }
            ]
        }
    ];

    const whySource = [
        "Reliable manufacturing base for compliant medical disposables.",
        "Competitive pricing for bulk institutional procurement.",
        "Familiarity with international hospital usage standards.",
        "Ability to supply continuous volumes for public health systems."
    ];

    const overview = `We are an **India-based exporter of human medical consumables**, supplying to hospitals, clinics, NGOs, and public procurement agencies.
  
  **Focus**: Essential, high-volume products sourced from compliant manufacturers.
  **Execution**: Structured export documentation and disciplined commercial terms for institutional buyers.`;



    return (
        <ExportPageTemplate
            title="Human Medical Consumables"
            subtitle="Essential hospital disposables and healthcare products."
            overview={overview}
            products={products}
            whySource={whySource}
        >

        </ExportPageTemplate>
    );
}
