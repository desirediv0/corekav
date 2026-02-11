import SectionWrapper from '@/components/SectionWrapper';
import Hero from '@/components/Hero';

export const metadata = {
    title: 'Privacy Policy | COREKAV International',
    description: 'Privacy Policy and Data Protection practices of COREKAV INTERNATIONAL TRADE.',
};

export default function PrivacyPolicy() {
    return (
        <main>
            <Hero title="Privacy Policy" variant="internal" />

            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto prose prose-lg prose-headings:text-primary prose-headings:font-bold prose-headings:font-serif text-justify">
                    <p>At COREKAV INTERNATIONAL TRADE (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), we are committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, and handle your information when you visit our website or engage with our services.</p>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">1. Information We Collect</h3>
                    <p>We collect information necessary to facilitate international trade inquiries and processing:</p>
                    <ul>
                        <li><strong>Personal Contact Information:</strong> Name, Email Address, Phone Number, Company Name, and Designation.</li>
                        <li><strong>Business Information:</strong> Import/Export license details, Port of Destination, and Product Requirements.</li>
                        <li><strong>Technical Data:</strong> IP address, browser type, and usage patterns on our website (via standard analytics).</li>
                    </ul>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">2. How We Use Your Information</h3>
                    <p>The information collected is strictly used for business purposes:</p>
                    <ul>
                        <li>To respond to your product inquiries and provide quotations (Proforma Invoices).</li>
                        <li>To facilitate export documentation and compliance with Indian Customs and international trade laws.</li>
                        <li>To communicate updates regarding orders, shipments, or regulatory changes.</li>
                    </ul>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">3. Data Protection</h3>
                    <p>We implement industry-standard security measures to protect your data. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties, except for trusted third parties who assist us in operating our website or conducting our business (e.g., Logistics Partners, Customs Agents), so long as those parties agree to keep this information confidential.</p>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">4. International Data Transfers</h3>
                    <p>As an export entity, necessary business data (such as shipping documents) may be shared with relevant authorities (Customs, Port Authorities) in both the country of origin (India) and the destination country to facilitate lawful trade.</p>

                    <h3 className="text-primary font-bold text-xl mt-8 mb-2">5. Contact Us</h3>
                    <p>If you have any questions regarding this Privacy Policy, please contact us at:</p>
                    <p>
                        <strong>COREKAV INTERNATIONAL TRADE</strong><br />
                        Email: <a href="mailto:info@corekav.com" className="text-secondary font-bold">info@corekav.com</a>
                    </p>
                </div>
            </SectionWrapper>
        </main>
    );
}
