import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ContactCTA from '@/components/ContactCTA';
import { Leaf, Globe, BarChart, Zap, TreePine, Recycle } from 'lucide-react';

export const metadata = {
    title: 'Carbon Credits & ESG Solutions | CoreKAV International',
    description: 'Structured carbon market solutions supporting corporate ESG strategies, sustainability commitments, and long-term decarbonization goals.',
};

export default function CarbonTrading() {
    const services = [
        {
            title: "Carbon Project Aggregation",
            icon: Leaf,
            description: "We aggregate eligible carbon projects into bankable portfolios. Enables scale, streamlined validation, and compliance.",
            details: ["Access verifiable supply", "Support climate-positive projects", "Streamlined registration"]
        },
        {
            title: "Carbon Credit Brokerage",
            icon: BarChart,
            description: "Professional intermediary between verified project owners and qualified buyers. Registry-listed and verified credits.",
            details: ["Transparent pricing", "Due diligence", "No speculative trading"]
        },
        {
            title: "Advisory & Strategy",
            icon: Globe,
            description: "Advising corporates and developers. Feasibility assessment, Buy-side strategy, Regulatory risk evaluation.",
            details: ["ESG disclosures", "Decarbonization planning", "Long-term value"]
        },
        {
            title: "Corporate Offtake Models",
            icon: Zap,
            description: "Structuring long-term offtake agreements. Secure predictable supply and support net-zero roadmaps.",
            details: ["Revenue certainty", "Price volatility reduction", "Multi-year agreements"]
        }
    ];

    const focusAreas = [
        {
            title: "Renewable Energy",
            icon: Zap,
            desc: "Grid-connected and distributed renewable initiatives delivering verifiable emission reductions."
        },
        {
            title: "Forestry & Mangroves",
            icon: TreePine,
            desc: "Nature-based solutions including afforestation and blue-carbon mangrove ecosystems."
        },
        {
            title: "Waste-to-Energy",
            icon: Recycle,
            desc: "Projects converting municipal/industrial waste into energy, reducing methane emissions."
        }
    ];

    return (
        <main>
            <Hero
                title="Carbon Trading & ESG Climate Solutions"
                subtitle="We provide structured carbon market solutions supporting corporate ESG strategies, sustainability commitments, and long-term decarbonization goals."
                bgImage="/esg-hero-bg.jpg"
                variant="internal"
            />

            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">Our Business Focus</h2>
                    <div className="h-1 w-24 bg-secondary mx-auto mb-6" />
                    <p className="text-primary/70 text-lg leading-relaxed">
                        We work with corporates, project developers, institutional investors, and ESG-focused partners seeking credibility, transparency, and execution reliability in voluntary and emerging compliance markets.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((s, i) => (
                        <div key={i} className="p-8 border border-neutral-100 hover:shadow-lg transition-all rounded-sm group">
                            <s.icon size={40} className="text-secondary mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold text-primary mb-4">{s.title}</h3>
                            <p className="text-primary/70 text-sm leading-relaxed mb-6">{s.description}</p>
                            <ul className="space-y-2">
                                {s.details.map((d, j) => (
                                    <li key={j} className="text-xs text-primary/60 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-secondary rounded-full" /> {d}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-neutral-50">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-4">Strategic Focus Areas</h2>
                    <p className="text-primary/70">We support JV structures and co-investment models in high-integrity sectors.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {focusAreas.map((f, i) => (
                        <div key={i} className="bg-white p-6 shadow-sm border-t-4 border-secondary text-center">
                            <f.icon className="mx-auto text-secondary mb-4" size={32} />
                            <h4 className="font-bold text-lg mb-2">{f.title}</h4>
                            <p className="text-sm text-primary/70">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-primary text-neutral text-center">
                <h2 className="text-3xl font-serif font-bold mb-6">Alignment & Engagement</h2>
                <p className="max-w-3xl mx-auto leading-relaxed opacity-80 mb-8">
                    Our carbon solutions are designed to align with Corporate ESG frameworks, Net-zero strategies, and Climate risk mitigation. We engage through Strategic advisory mandates, Brokerage arrangements, and Portfolio participation.
                </p>
                <div className="inline-block border border-secondary px-8 py-4 text-secondary uppercase tracking-widest font-bold text-sm">
                    Governance First Approach
                </div>
            </SectionWrapper>

            <ContactCTA />
        </main>
    );
}
