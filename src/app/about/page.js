import SectionWrapper from '@/components/SectionWrapper';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'Who We Are | COREKAV International',
    description: 'Institutional Export Supply Chain Partner from India.',
};

export default function About() {
    return (
        <main>
            <Hero
                title="Who We Are"
                subtitle="Institutional Export Supply Chain Partner from India"
                variant="internal"
            />

            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto space-y-12 text-primary/80">

                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl leading-relaxed">
                            We are an India-based, professionally managed export company supporting institutional buyers with reliable, repeat-ready supply of essential, high-rotation products.
                        </p>
                        <p>
                            We work closely with importers, distributors, EPC contractors, and government-linked procurement entities that require consistency, compliance, and on-time execution across large and recurring orders.
                        </p>
                        <p>
                            Our supply chain model is designed for long-term partnerships—built on compliance-led sourcing, disciplined financial planning, and operational reliability. This allows our buyers to reduce supply risk, stabilize procurement costs, and scale confidently across markets.
                        </p>
                        <p>
                            With active trade coverage across South Asia, South East Asia, the Middle East (including the GCC), Africa, Central Asia, and select emerging markets, we act as a single, dependable export partner from India for institutional procurement needs.
                        </p>
                    </div>

                    <div className="bg-neutral/30 p-8 rounded-2xl border border-secondary/10">
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6">Our Export Philosophy</h2>
                        <p className="text-lg text-primary/90 mb-4">Quality Consistency. Documentation Discipline. Pricing Transparency. Delivery Reliability.</p>
                        <ul className="space-y-3 list-disc pl-5">
                            <li>We focus on fewer, carefully selected markets to ensure control, compliance, and consistent execution.</li>
                            <li>We operate within clearly defined product categories, managing them deeply rather than broadly, to maintain quality and supply stability.</li>
                            <li>Our approach prioritizes repeat, program-based procurement relationships—designed for institutional buyers who value predictability, continuity, and long-term supply assurance.</li>
                        </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-4">Payment Structures & Risk</h3>
                            <p className="mb-4">We operate under bankable, export-safe payment terms:</p>
                            <ul className="space-y-2 list-disc pl-5 text-sm">
                                <li>Advance Payment</li>
                                <li>Documents Against Payment (DP)</li>
                                <li>Letter of Credit (LC) for established buyers</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-primary mb-4">Export Execution</h3>
                            <p className="mb-4">Structured around traceability and compliance:</p>
                            <ul className="space-y-2 list-disc pl-5 text-sm">
                                <li>Source-verified raw materials</li>
                                <li>Batch-wise processing & grading</li>
                                <li>Export-grade packaging (drums, bags, cartons)</li>
                                <li>OEM / Private-label options</li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-primary mb-6">Markets We Serve</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <strong className="block text-secondary mb-1">South Asia</strong>
                                <p>Bangladesh, Nepal, Sri Lanka, Bhutan, Maldives</p>
                            </div>
                            <div>
                                <strong className="block text-secondary mb-1">South East Asia</strong>
                                <p>Vietnam, Indonesia, Philippines, Thailand, Myanmar, Cambodia, Laos</p>
                            </div>
                            <div>
                                <strong className="block text-secondary mb-1">Middle East</strong>
                                <p>UAE, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait, Iraq</p>
                            </div>
                            <div>
                                <strong className="block text-secondary mb-1">Africa</strong>
                                <p>Kenya, Nigeria, Ghana, Tanzania, South Africa, Ethiopia</p>
                            </div>
                            <div>
                                <strong className="block text-secondary mb-1">Central Asia</strong>
                                <p>Kazakhstan, Uzbekistan, Tajikistan</p>
                            </div>
                            <div>
                                <strong className="block text-secondary mb-1">USA</strong>
                                <p>United States</p>
                            </div>
                            <div>
                                <strong className="block text-secondary mb-1">Latin America and Caribbean</strong>
                                <p>Peru, Bolivia, Paraguay, Brazil, Mexico, Caribbean nations</p>
                            </div>
                        </div>
                    </div>

                </div>
            </SectionWrapper>
        </main>
    );
}
