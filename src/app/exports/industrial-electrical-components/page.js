import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Industrial & Electrical Components Exporter India | HS Code 853710',
    description: 'Supplying Power, Solar & Infrastructure Projects Across Asia, Middle East, Africa & Emerging Markets.',
};

export default function Industrial() {
    const products = [
        {
            name: "Battery Mounting Racks",
            description: "Steel/Aluminium racks for solar plants, telecom power systems, and energy storage. Floor or wall-mounted designs.",
            specs: [
                { label: "Material", value: "Steel / Aluminium" },
                { label: "Finish", value: "Corrosion-resistant" }
            ]
        },
        {
            name: "IP-Rated Inverter Enclosures",
            description: "Powder-coated IP-rated enclosures for solar inverters and power electronics protection. Outdoor/Indoor use.",
            specs: [
                { label: "Rating", value: "IP Rated" },
                { label: "Finish", value: "Powder-Coated" }
            ]
        },
        {
            name: "Power Cable Connectors",
            description: "MC4 solar connectors, Copper/Aluminium cable lugs, and Industrial cable glands for renewable power systems.",
            specs: [
                { label: "Types", value: "MC4, Lugs, Glands" },
                { label: "Application", value: "Interconnection" }
            ]
        },
        {
            name: "Power Distribution Boxes",
            description: "DB Panels and Load Centers for controlled power management in solar plants, commercial buildings, and industries.",
            specs: [
                { label: "Type", value: "DB Panel / Load Centre" },
                { label: "Use", value: "Power Management" }
            ]
        }
    ];

    const whySource = [
        "Cost-efficient production without compromising specifications.",
        "Ability to supply project-scale volumes.",
        "Compatibility with international power & solar system standards.",
        "Flexible fabrication for country- and project-specific requirements."
    ];

    const overview = `We are an India-based exporter of industrial and electrical components used in power systems, renewable energy installations, and infrastructure projects. Our exports support EPC contractors, renewable energy developers, industrial distributors, and project integrators across South Asia, Middle East (including GCC), Africa, South East Asia, Central Asia, and select global markets.

  Our business is structured around project-grade supply, export compliance, and repeat institutional orders — not retail trading or catalogue selling.`;

    return (
        <ExportPageTemplate
            title="Industrial, Electrical & Renewable Components"
            subtitle="Supplying Power, Solar & Infrastructure Projects Across Asia, Middle East & Emerging Markets. HS Code 853710."
            overview={overview}
            products={products}
            whySource={whySource}
        />
    );
}
