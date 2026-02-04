import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Industrial & Electrical Components Exporter India',
    description: 'Power system components, solar accessories, and infrastructure hardware.',
};

export default function IndustrialElectrical() {
    // Client images: save to public/products/industrial/ (see CLIENT_IMAGES_PLACEMENT.md)
    const products = [
        {
            name: "Battery Mounting Racks",
            description: "Steel/Aluminium racks for solar, telecom, and energy storage systems.",
            image: "/products/industrial/Battery-Mounting-Racks.jpg",
            specs: [
                { label: "Material", value: "Steel / Aluminium" },
                { label: "Use", value: "Energy Storage" }
            ]
        },
        {
            name: "IP-Rated Inverter Enclosures",
            description: "Powder-coated enclosures for power electronics and solar inverters.",
            image: "/products/industrial/IP-Rated-Inverter-Enclosures.png",
            specs: [
                { label: "Rating", value: "IP Rated" },
                { label: "Finish", value: "Powder Coated" }
            ]
        },
        {
            name: "Power Cable Connectors",
            description: "MC4 solar connectors, lugs, and cable glands for renewable systems.",
            image: "/products/industrial/Power-Cable-Connectors.png",
            specs: [
                { label: "HS Code", value: "853710" },
                { label: "Type", value: "Connectors" }
            ]
        },
        {
            name: "Power Distribution Boxes",
            description: "DB panels and load centers for industrial and renewable power management.",
            image: "/products/industrial/Power-Distribution-Boxes.png",
            specs: [
                { label: "Application", value: "Solar / Industrial" },
                { label: "Type", value: "Distribution Panel" }
            ]
        }
    ];

    const whySource = [
        "Cost-efficient production without compromising specifications.",
        "Ability to supply project-scale volumes.",
        "Compatibility with international power & solar system standards.",
        "Flexible fabrication for country- and project-specific requirements."
    ];

    const overview = `We are an India-based exporter of industrial and electrical components used in power systems, renewable energy installations, and infrastructure projects.

  Buyers: EPC contractors, renewable energy developers, and industrial distributors.
  Focus: Project-grade supply, export compliance, and repeat institutional orders.`;

    const seoFooter = 'Industrial electrical components exporter India | Renewable energy components supplier | Battery racks exporter India | IP rated inverter enclosures | Power distribution panels export';

    return (
        <ExportPageTemplate
            title="Electrical, Industrial & Renewable Energy Components"
            subtitle="Electrical, Power & Renewable Energy Components"
            heroImage="/Banner 7. Electrical, Industrial & Renewable Energy Components.png"
            overview={overview}
            products={products}
            whySource={whySource}
            seoFooter={seoFooter}
        />
    );
}
