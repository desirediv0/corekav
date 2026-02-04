import SectionWrapper from '@/components/SectionWrapper';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'Terms of Trade | COREKAV International',
    description: 'Standard Terms and Conditions for Export Orders.',
};

export default function TermsOfTrade() {
    return (
        <main>
            <Hero
                title="Terms of Trade"
                subtitle="General Terms and Conditions for International Supply"
                variant="internal"
            />

            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-primary prose-headings:font-bold prose-headings:font-serif">
                    <p>All export sales and transactions entered into by COREKAV International Trade are subject to the following standard terms and conditions, unless specifically modified by a written contract signed by both parties.</p>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">1. Quotations & Contracts</h3>
                    <p>All Proforma Invoices (PI) issued are valid for the period specified within the document (typically 3-7 working days due to commodity price fluctuations). A contract is deemed binding only upon the receipt of the signed PI and/or the advance payment/Letter of Credit establishment.</p>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">2. Payment Terms</h3>
                    <p>We operate strictly on secure international payment terms:</p>
                    <ul>
                        <li><strong>Telegraphic Transfer (T/T):</strong> Standard terms include an advance deposit upon order confirmation, with the balance against scanned shipping documents (BL/Packing List).</li>
                        <li><strong>Letter of Credit (LC):</strong> 100% Irrevocable LC at Sight from a prime bank is accepted for qualified orders above a certain threshold.</li>
                    </ul>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">3. Incoterms</h3>
                    <p>Unless otherwise agreed, all trade terms (FOB, CIF, CFR, CIP) are interpreted in accordance with the <strong>Incoterms® 2020</strong> rules published by the International Chamber of Commerce (ICC).</p>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">4. Delivery & Logistics</h3>
                    <p>Shipment dates provided are estimates based on current production and vessel schedules. COREKAV International Trade is not liable for delays caused by Force Majeure events, port congestion, or shipping line rescheduling.</p>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">5. Quality & Inspection</h3>
                    <p>Buyers are encouraged to appoint third-party inspection agencies (e.g., SGS, Bureau Veritas) at the time of loading. The findings of such inspections at the load port shall be considered final regarding quality and quantity.</p>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">6. Governing Law</h3>
                    <p>These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.</p>
                </div>
            </SectionWrapper>
        </main>
    );
}
