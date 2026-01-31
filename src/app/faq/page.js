import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import FAQAccordion from '@/components/FAQAccordion';
import ContactCTA from '@/components/ContactCTA';

export const metadata = {
    title: 'Frequently Asked Questions | CoreKAV International',
    description: 'Common questions about our export processes, products, and services.',
};

export default function FAQ() {
    const nutraFAQs = [
        { question: "Do you supply nutraceutical ingredients in bulk for formulation use?", answer: "Yes. We supply nutraceutical ingredients strictly in bulk, ingredient-grade formats for manufacturers, formulators, and contract processors." },
        { question: "Are your nutraceutical ingredients suitable for regulated markets?", answer: "Ingredients are supplied with batch documentation and traceability aligned with destination market requirements. Regulatory approvals remain the responsibility of the importer." },
        { question: "Do you support multi-ingredient export programs?", answer: "Yes. We consolidate multiple nutraceutical ingredients under a single export program to support efficient procurement and logistics." },
        { question: "What packaging formats are used?", answer: "Export-grade bulk packaging such as fiber drums, HDPE drums, and multilayer bags, depending on the ingredient." },
        { question: "What commercial terms are offered?", answer: "We operate under advance payment, DP, and LC for established buyers." }
    ];

    const herbalFAQs = [
        { question: "Do you supply standardized and non-standardized herbal extracts?", answer: "Yes. Both standardized and non-standardized extracts are supplied based on buyer specifications." },
        { question: "Is raw material traceability available?", answer: "Yes. Herbal extracts are sourced through traceable supply chains with batch-level identification." },
        { question: "Can you support long-term supply contracts?", answer: "Yes. We prioritize repeat and long-term supply relationships." },
        { question: "Do you provide formulation or application guidance?", answer: "We support ingredient-level clarity; formulation responsibility rests with the buyer." },
        { question: "What shipment volumes do you handle?", answer: "From trial bulk shipments to full container loads." }
    ];

    const ayurvedaFAQs = [
        { question: "Do you export finished Ayurvedic products?", answer: "No. We export Ayurvedic ingredients and formulation inputs only." },
        { question: "Are ingredients aligned with classical Ayurvedic use?", answer: "Yes. Ingredients are sourced and processed in line with traditional Ayurvedic references adapted for export use." },
        { question: "Who are your typical buyers?", answer: "Ayurvedic brands, herbal manufacturers, nutraceutical formulators, and bulk importers." },
        { question: "Do you support beauty and personal care applications?", answer: "Yes. Ingredients are supplied for beauty, skincare, wellness, and personal care formulations." }
    ];

    const makahanaFAQs = [
        { question: "Do you export Makhana in bulk quantities?", answer: "Yes. We export bulk, export-grade Makhana for food processors, distributors, and institutional buyers." },
        { question: "What grades and specifications of Makhana are available?", answer: "Makhana is supplied based on puff size, moisture content, cleanliness, and breakage tolerance, as per buyer requirements." },
        { question: "Is Makhana suitable for food and functional food applications?", answer: "Yes. Makhana is widely used in snack foods, functional foods, and traditional dietary applications." },
        { question: "Can you support consistent supply across seasons?", answer: "Yes. We structure procurement and inventory planning to support repeat and predictable supply." }
    ];

    const feedFAQs = [
        { question: "Do you export compound animal feed in bulk or bagged formats?", answer: "Yes. Animal feed is supplied in containerized bulk or bagged formats, depending on buyer specifications, port handling requirements, and destination regulations." },
        { question: "Which livestock segments do you supply feed for?", answer: "We export feed formulations for cattle, poultry, buffalo, sheep, goat, pig/swine, and aquaculture markets." },
        { question: "Can feed formulations be customized for local feeding practices?", answer: "Yes. Feed composition can be aligned with local livestock practices, climate conditions, and nutritional requirements, subject to regulatory approvals." },
        { question: "What documentation is provided for animal feed exports?", answer: "Standard documentation includes commercial invoice, packing list, certificate of origin, phytosanitary certificate (where required), and lab analysis reports." }
    ];

    const vetFAQs = [
        { question: "Are veterinary consumables supplied in bulk for institutional buyers?", answer: "Yes. All veterinary consumables are supplied in bulk quantities suitable for farms, distributors, veterinary hospitals, and government procurement." },
        { question: "Do you export both disposable and reusable veterinary products?", answer: "Yes. Our range includes disposable syringes, needles, gloves, IV sets, as well as reusable hand tools and surgical instruments." },
        { question: "Can veterinary consumables be supplied alongside animal feed shipments?", answer: "Yes. Veterinary consumables are often shipped alongside feed orders to optimize logistics and procurement efficiency." },
        { question: "Are products compliant with export and destination-country standards?", answer: "Products are sourced from compliant Indian manufacturers and supplied with standard export documentation and quality certifications as applicable." }
    ];

    const medFAQs = [
        { question: "Do you export medical consumables for hospitals and public procurement?", answer: "Yes. We export essential medical disposables for hospitals, clinics, NGOs, distributors, and public health procurement agencies." },
        { question: "Are the medical products sourced from compliant manufacturers?", answer: "Yes. Products are sourced from Indian manufacturers compliant with applicable regulatory and quality standards." },
        { question: "Can you supply high-volume medical disposables on repeat orders?", answer: "Yes. Our focus is on high-volume, repeat-order medical consumables with predictable supply continuity." }
    ];

    const industrialFAQs = [
        { question: "What types of electrical components do you export?", answer: "We export battery mounting racks, inverter enclosures, power cable connectors, cooling accessories, and power distribution boxes." },
        { question: "Are these products suitable for renewable energy projects?", answer: "Yes. These components are widely used in solar, renewable energy, and power infrastructure installations." },
        { question: "Who typically procures these electrical components?", answer: "Our buyers include EPC contractors, renewable energy developers, industrial distributors, and infrastructure project suppliers." }
    ];

    const carbonFAQs = [
        { question: "Do you sell carbon credits directly?", answer: "We facilitate verified carbon credit transactions through brokerage and structured arrangements." },
        { question: "Are credits suitable for ESG and sustainability reporting?", answer: "Yes. We focus on registry-listed and verified credits aligned with ESG disclosure standards." },
        { question: "Do you structure long-term carbon offtake agreements?", answer: "Yes. We support multi-year offtake and supply models for corporates." }
    ];

    return (
        <main>
            <Hero
                title="Frequently Asked Questions"
                subtitle="Common questions about our products, export processes, and services."
                variant="internal"
            // bgImage="/faq-hero.jpg"
            />

            <SectionWrapper className="bg-white">
                <div className="max-w-4xl mx-auto space-y-12">

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">Nutraceutical Ingredients</h2>
                        <FAQAccordion items={nutraFAQs} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">Herbal Extracts</h2>
                        <FAQAccordion items={herbalFAQs} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">Ayurveda (Ingredients)</h2>
                        <FAQAccordion items={ayurvedaFAQs} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">Specialised Agro (Makhana)</h2>
                        <FAQAccordion items={makahanaFAQs} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">Animal Feed Exports</h2>
                        <FAQAccordion items={feedFAQs} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">Veterinary Consumables</h2>
                        <FAQAccordion items={vetFAQs} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">Medical Consumables</h2>
                        <FAQAccordion items={medFAQs} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">Industrial & Electrical</h2>
                        <FAQAccordion items={industrialFAQs} />
                    </div>

                    <div>
                        <h2 className="text-2xl font-serif font-bold text-primary mb-6 border-b border-secondary/20 pb-2">Carbon & ESG</h2>
                        <FAQAccordion items={carbonFAQs} />
                    </div>

                </div>
            </SectionWrapper>
            <ContactCTA />
        </main>
    );
}
