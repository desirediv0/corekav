import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Carbon Credits & ESG Solutions India',
    description: 'Carbon project aggregation, credit brokerage, and ESG advisory services.',
};

export default function CarbonESG() {
    const products = [
        {
            name: "Carbon Trading",
            description: "Spot and structured carbon credit transactions. Verified credits aligned with recognized standards and registries, market-linked pricing, disciplined trade execution and settlement.",
            image: "/Banner 8. Carbon .png",
            specs: [
                { label: "Focus", value: "Verified Credits" },
                { label: "Model", value: "Risk-managed" }
            ]
        },
        {
            name: "Carbon Portfolio",
            description: "JV structures, co-investment models, and strategic partnerships in carbon portfolios. Focus on renewable energy, forestry and mangrove, and waste-to-energy projects.",
            image: "/esg-hero.jpg",
            specs: [
                { label: "Sectors", value: "Renewable, Forestry, W2E" },
                { label: "Goal", value: "High-integrity" }
            ]
        },
        {
            name: "Forestry and Mangrove Projects",
            description: "Nature-based solutions including afforestation, reforestation, and blue-carbon mangrove ecosystems, aligned with biodiversity and climate resilience goals.",
            image: "/markets-hero.jpg",
            specs: [
                { label: "Type", value: "Nature-based" },
                { label: "Standard", value: "Verified" }
            ]
        },
        {
            name: "Carbon Project Aggregation",
            description: "Aggregating eligible projects into bankable portfolios for scale and diversification.",
            specs: [
                { label: "Focus", value: "Scale & Access" },
                { label: "Target", value: "Developers & Corporates" }
            ]
        },
        {
            name: "Carbon Credit Brokerage",
            description: "Intermediary between verified project owners and qualified buyers. Registry-listed credits, transparent pricing, counterparty due diligence.",
            specs: [
                { label: "Type", value: "Verified Credits" },
                { label: "Model", value: "Transparent Pricing" }
            ]
        },
        {
            name: "Advisory Services",
            description: "Buy/Sell-side advisory, feasibility assessment, and net-zero strategy planning.",
            specs: [
                { label: "Scope", value: "Strategic Advisory" },
                { label: "Goal", value: "Long-term Decarbonization" }
            ]
        },
        {
            name: "Corporate Offtake & Long-Term Supply Model",
            description: "Long-term carbon credit offtake agreements between corporates and curated project portfolios. Secure predictable and traceable credit supply; support multi-year ESG and net-zero roadmaps; reduce price volatility.",
            specs: [
                { label: "Benefit", value: "Price Certainty" },
                { label: "Target", value: "Large Emitters" }
            ]
        }
    ];

    const whySource = [
        "Focus on high-integrity sectors: Renewable Energy, Forestry/Mangroves, Waste-to-Energy.",
        "Alignment with corporate ESG and sustainability frameworks.",
        "Governance-first approach to trading and settlement.",
        "Support for multi-year ESG and net-zero roadmaps."
    ];

    const overview = `We provide structured carbon market solutions supporting corporate sustainability strategies and long-term decarbonization goals.

  Services: Project aggregation, credit brokerage, trading, and strategic advisory.
  Focus: Verified credits, governance discipline, and long-term value creation.

  Engagement Model: We engage through strategic advisory mandates, brokerage and offtake arrangements, and portfolio participation and JV structures. All engagements are governed by clear documentation, risk controls, and execution discipline.`;

    const seoFooter = 'Carbon credit solutions provider India | ESG carbon advisory services | Carbon project aggregation India | Carbon credit brokerage | Corporate carbon offtake solutions | Carbon trading advisory | ESG sustainability solutions provider | Renewable energy carbon credits | Forestry mangrove carbon projects | Waste-to-energy carbon credits | Carbon portfolio investment India';

    return (
        <ExportPageTemplate
            title="Carbon Trading, Consulting & Project Aggregation"
            subtitle="Strategic solutions to sustainability and carbon credit market"
            heroImage="/Banner 8. Carbon .png"
            overview={overview}
            products={products}
            whySource={whySource}
            seoFooter={seoFooter}
        />
    );
}
