import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ContactCTA from '@/components/ContactCTA';
import { Target, Shield, CreditCard, Award, Users, BarChart, CheckCircle } from 'lucide-react';

export const metadata = {
    title: 'About Us | CoreKAV International Trade',
    description: 'We are an India-based diversified export enterprise serving institutional supply chains across agriculture, healthcare, and industry.',
};

export default function About() {
    return (
        <main>
            <Hero
                title="Institutional & Compliance-Led Export"
                subtitle="We are a professionally managed export company established to supply essential, non-cyclical product categories to import-dependent markets."
                bgImage="/about-hero.jpg"
                variant="internal"
            />

            <SectionWrapper className="bg-white">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Who We Are</h2>
                        <div className="h-1 w-20 bg-secondary mb-8" />
                        <div className="space-y-6 text-primary/80 leading-loose text-lg font-light">
                            <p>
                                We are an India-based diversified export enterprise serving institutional supply chains across agriculture, healthcare, industry, energy, and construction. Our business is structured to support long-term export relationships, not transactional or opportunistic trading.
                            </p>
                            <p>
                                Our diversified structure allows us to maintain:
                            </p>
                            <ul className="space-y-3 pl-4">
                                {[
                                    "Controlled and steady scale-up",
                                    "Predictable working capital cycles",
                                    "Strong and transparent banking relationships",
                                    "Long-term presence across multiple regions"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle size={16} className="text-secondary" /> {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="bg-neutral-50 p-8 border border-neutral-100 rounded-sm">
                        <h3 className="text-2xl font-serif font-bold text-primary mb-6">Our Export Philosophy</h3>
                        <p className="text-primary/70 mb-6 italic">&quot;Quality Consistency, Documentation Discipline, Pricing Transparency, and Delivery Reliability.&quot;</p>
                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <Target className="text-secondary mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-primary">Focused Markets</h4>
                                    <p className="text-sm text-primary/70">Fewer, carefully selected markets managed deeply.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <BarChart className="text-secondary mt-1" size={24} />
                                <div>
                                    <h4 className="font-bold text-primary">Program-Based Procurement</h4>
                                    <p className="text-sm text-primary/70">Deliberate focus on repeat and long-term relationships.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-primary text-neutral relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 skew-x-12 transform translate-x-20" />

                <div className="relative z-10 grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">Execution & Quality Discipline</h3>
                        <p className="text-neutral/70 mb-6 font-light leading-relaxed">
                            Our export execution is structured around traceability, compliance, and delivery discipline:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Bulk and containerized shipments",
                                "Source-verified raw materials",
                                "Batch-wise processing & grading",
                                "Export-grade packaging (drums, bags)",
                                "Destination-aligned documentation",
                                "OEM / Private-label options"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/5 p-3 text-sm border border-white/10 rounded-sm">
                                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">Payment & Risk Management</h3>
                        <p className="text-neutral/70 mb-6 font-light leading-relaxed">
                            We operate under bankable, export-safe payment terms suited for institutional buyers:
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-white/10 p-4 border-l-4 border-secondary">
                                <CreditCard className="text-secondary" />
                                <span className="font-bold">Advance Payment</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/10 p-4 border-l-4 border-secondary">
                                <CreditCard className="text-secondary" />
                                <span className="font-bold">Documents Against Payment (DP)</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white/10 p-4 border-l-4 border-secondary">
                                <CreditCard className="text-secondary" />
                                <span className="font-bold">Letter of Credit (LC)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-white">
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h2 className="text-3xl font-serif font-bold text-primary mb-6">Buyer & Partner Engagement</h2>
                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        <div className="p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-all">
                            <h4 className="font-bold text-primary mb-3 text-lg border-b border-secondary/30 pb-2">Importers & Institutions</h4>
                            <ul className="text-sm space-y-2 text-primary/70 list-disc pl-4">
                                <li>Product specs & grade discussions</li>
                                <li>Volume & shipment planning</li>
                                <li>Trial & repeat shipment cycles</li>
                            </ul>
                        </div>
                        <div className="p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-all">
                            <h4 className="font-bold text-primary mb-3 text-lg border-b border-secondary/30 pb-2">Banks & Financials</h4>
                            <ul className="text-sm space-y-2 text-primary/70 list-disc pl-4">
                                <li>HS-code mapping support</li>
                                <li>Trade documentation review</li>
                                <li>Transaction modeling</li>
                            </ul>
                        </div>
                        <div className="p-6 border border-neutral-100 shadow-sm hover:shadow-md transition-all">
                            <h4 className="font-bold text-primary mb-3 text-lg border-b border-secondary/30 pb-2">Strategic Partners</h4>
                            <ul className="text-sm space-y-2 text-primary/70 list-disc pl-4">
                                <li>Distributors & Representatives</li>
                                <li>Sourcing collaborators</li>
                                <li>Compliance-driven partnerships</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SectionWrapper>

            <ContactCTA />
        </main>
    );
}
