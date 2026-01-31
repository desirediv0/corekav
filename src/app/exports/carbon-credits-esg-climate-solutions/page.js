import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Carbon Credits & ESG Solutions India',
    description: 'Carbon project aggregation, credit brokerage, and ESG advisory services.',
};

export default function CarbonESG() {
    const products = [
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
            description: "Intermediary between verified project owners and qualified buyers.",
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
            name: "Corporate Offtake Models",
            description: "Structuring long-term credit offtake agreements to secure supply and reduce volatility.",
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

    const overview = `We provide **structured carbon market solutions** supporting corporate ESG strategies, sustainability commitments, and long-term decarbonization goals.
  
  **Services**: Project aggregation, credit brokerage, trading, and strategic advisory.
  **Focus**: Verified credits, governance discipline, and long-term value creation.`;

    return (
        <ExportPageTemplate
            title="Carbon Trading, Consulting & Project Aggregation"
            subtitle="Strategic ESG solutions and carbon credit markets."
            overview={overview}
            products={products}
            whySource={whySource}
        />
    );
}
