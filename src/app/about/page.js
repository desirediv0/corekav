import SectionWrapper from '@/components/SectionWrapper';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'About Us | CoreKAV International',
    description: 'Who We Are - Professional Export Management.',
};

export default function About() {
    return (
        <main>
            <Hero
                title="Who We Are"
                subtitle="Professional Export Management & Institutional Supply"
                variant="internal"
            // bgImage="/about-hero.jpg"
            />

            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto space-y-12 text-primary/80">

                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none">
                        <p className="text-xl leading-relaxed">
                            We are an <strong>India-based professionally managed export company</strong> supplying essential, high-rotation products to institutional buyers, importers, distributors, EPC contractors, and government-linked procurement entities across South Asia, South East Asia, the Middle East (including GCC), Africa, Central Asia, and select emerging markets.
                        </p>
                        <p>
                            Our operations are built on repeat-order relationships, compliance-led sourcing, conservative financial planning, and disciplined execution, positioning us as a <strong>long-term export partner</strong>.
                        </p>
                    </div>

                    {/* Export Philosophy */}
                    <div className="bg-neutral/30 p-8 rounded-2xl border border-secondary/10">
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6">Our Export Philosophy</h2>
                        <blockquote className="text-xl italic font-serif text-secondary mb-6">
                            &quot;Quality Consistency, Documentation Discipline, Pricing Transparency, and Delivery Reliability.&quot;
                        </blockquote>
                        <ul className="space-y-3 list-disc pl-5">
                            <li>Fewer, carefully selected markets.</li>
                            <li>Key product categories, managed deeply.</li>
                            <li>Repeat and program-based procurement relationships.</li>
                        </ul>
                    </div>

                    {/* Payment & Execution */}
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

                    {/* Target Markets */}
                    <div>
                        <h3 className="text-xl font-bold text-primary mb-6">Markets We Serve</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                            <div>
                                <strong className="block text-secondary mb-1">South Asia</strong>
                                <p>Bangladesh, Nepal, Sri Lanka, Bhutan, Maldives</p>
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
                                <strong className="block text-secondary mb-1">South East Asia</strong>
                                <p>Vietnam, Indonesia, Philippines, Thailand, Myanmar</p>
                            </div>
                            <div>
                                <strong className="block text-secondary mb-1">Central Asia</strong>
                                <p>Kazakhstan, Uzbekistan, Tajikistan</p>
                            </div>
                        </div>
                    </div>

                </div>
            </SectionWrapper>
        </main>
    );
}
