import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import FAQAccordion from '@/components/FAQAccordion';
import { MapPin, Phone, Mail, Globe, Clock } from 'lucide-react';

export const metadata = {
    title: 'Markets & Contact | CoreKAV International',
    description: 'Global Markets We Serve, FAQs, and Contact Information.',
};

export default function MarketsContact() {
    const markets = [
        { region: "South Asia", countries: "Bangladesh, Nepal, Sri Lanka, Bhutan, Maldives" },
        { region: "Middle East / West Asia", countries: "UAE, Saudi Arabia, Oman, Qatar, Bahrain, Kuwait, Iraq, Jordan, Lebanon" },
        { region: "Africa", countries: "Kenya, Nigeria, Ghana, Tanzania, Uganda, Ethiopia, Rwanda, South Africa, Zambia, Zimbabwe+" },
        { region: "South East Asia", countries: "Vietnam, Indonesia, Philippines, Cambodia, Myanmar, Thailand, Laos" },
        { region: "Central Asia", countries: "Kazakhstan, Uzbekistan, Tajikistan, Kyrgyzstan, Turkmenistan" },
        { region: "Emerging Markets", countries: "Peru, Bolivia, Paraguay, Georgia, Armenia, Afghanistan, Mongolia" }
    ];

    const faqs = [
        {
            question: "Do you export compound animal feed in bulk or bagged formats?",
            answer: "Yes. Animal feed is supplied in containerized bulk or bagged formats, depending on buyer specifications, port handling requirements, and destination regulations."
        },
        {
            question: "Which livestock segments do you supply feed for?",
            answer: "We export feed formulations for cattle, poultry, buffalo, sheep, goat, pig/swine, and aquaculture markets."
        },
        {
            question: "Are veterinary consumables supplied in bulk for institutional buyers?",
            answer: "Yes. All veterinary consumables are supplied in bulk quantities suitable for farms, distributors, veterinary hospitals, and government procurement."
        },
        {
            question: "Do you export medical consumables for hospitals and public procurement?",
            answer: "Yes. We export essential medical disposables for hospitals, clinics, NGOs, distributors, and public health procurement agencies."
        },
        {
            question: "Do you supply nutraceutical ingredients in bulk?",
            answer: "Yes. We supply nutraceutical ingredients strictly in bulk, ingredient-grade formats for manufacturers, formulators, and contract processors."
        },
        {
            question: "Do you export finished Ayurvedic products?",
            answer: "No. We export Ayurvedic ingredients and formulation inputs only."
        },
        {
            question: "Do you sell carbon credits directly?",
            answer: "We facilitate verified carbon credit transactions through brokerage and structured arrangements."
        }
    ];

    return (
        <main>
            <Hero
                title="Global Reach & Engagement"
                subtitle="We focus on import-dependent markets with structured buying behaviour across Asia, Africa, and the Middle East."
                bgImage="/markets-hero.jpg"
                variant="internal"
            />

            <SectionWrapper className="bg-white">
                <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Markets We Serve</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {markets.map((m, i) => (
                        <div key={i} className="bg-neutral-50 p-6 border border-neutral-100 rounded-sm hover:border-secondary transition-colors">
                            <Globe className="text-secondary mb-3" size={24} />
                            <h4 className="font-bold text-primary mb-2 uppercase tracking-wider text-sm">{m.region}</h4>
                            <p className="text-sm text-primary/70 leading-relaxed">{m.countries}</p>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-primary text-neutral">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-serif font-bold mb-8">Contact Us</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <MapPin className="text-secondary flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg">Headquarters</h4>
                                    <p className="opacity-80 leading-relaxed">CoreKAV International Trade<br />B-39, 1st Floor, Middle Cir, Connaught Place,<br />New Delhi, Delhi 110001, India</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Phone className="text-secondary flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg">Phone / WhatsApp</h4>
                                    <a href="tel:+919319337377" className="opacity-80 hover:text-white block">+91-9319337377</a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Mail className="text-secondary flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <a href="mailto:info@corekav.com" className="opacity-80 hover:text-white block">info@corekav.com</a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Clock className="text-secondary flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-lg">Business Hours</h4>
                                    <p className="opacity-80">Mon - Sat: 10:00 AM - 7:00 PM IST</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
                        <h3 className="text-xl font-bold mb-6">Send an Inquiry</h3>
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Name" className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50 invalid:border-red-500" />
                                <input type="text" placeholder="Company" className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50" />
                            </div>
                            <input type="email" placeholder="Email Address" className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50" />
                            <input type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50" />
                            <textarea rows="4" placeholder="Message / Product Interests" className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50"></textarea>
                            <button type="submit" className="w-full bg-secondary text-primary font-bold uppercase tracking-widest py-3 hover:bg-white transition-colors">
                                Submit Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-neutral-50" id="faq">
                <h2 className="text-3xl font-serif font-bold text-primary text-center mb-12">Frequently Asked Questions</h2>
                <FAQAccordion items={faqs} />
            </SectionWrapper>
        </main>
    );
}
