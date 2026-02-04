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
            name: "Latex & Nitrile Examination Gloves",
            description: "Latex and Nitrile examination gloves for medical and specific handling. High-volume consumables for hospitals and clinics.",
            image: "/products/medical/Examination-Gloves.jpeg",
            specs: [
                { label: "HS Code", value: "401511" },
                { label: "Material", value: "Latex / Nitrile" }
            ]
        },
        {
            name: "Wound Care Consumables",
            description: "Sterile gauze, adhesive bandages, and dressing materials for daily clinical use.",
            specs: [
                { label: "Use", value: "Wound Care" },
                { label: "Type", value: "Disposable" }
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

    const overview = `We are an India-based exporter of human medical consumables and hospital-use disposables, supplying to hospitals, clinics, medical distributors, NGOs, and public procurement agencies across South Asia, Middle East (including GCC), Africa, South East Asia, Central Asia, and select emerging markets.

  Our exports focus on essential, high-volume medical products sourced from compliant Indian manufacturers, supplied under structured export documentation and disciplined commercial terms. We do not operate as a retail brand; we function as a reliable institutional export supplier. We work with buyers who value continuity of supply, regulatory clarity, and predictable pricing, especially for public healthcare, donor-funded programs, and private hospital networks.`;

    const seoFooter = 'Medical consumables exporter India | Hospital disposables supplier | Medical disposables bulk export | Healthcare consumables India';

    return (
        <ExportPageTemplate
            title="Human Medical Consumables"
            subtitle="Essential hospital disposables and healthcare products."
            heroImage="/Banner 6 Human Medical Consumables .png"
            overview={overview}
            products={products}
            whySource={whySource}
            seoFooter={seoFooter}
        />
    );
}
