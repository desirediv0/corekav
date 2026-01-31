import ExportPageTemplate from '@/components/ExportPageTemplate';

export const metadata = {
    title: 'Nutraceutical, Herbal & Ayurveda Ingredients Exporter India',
    description: 'Bulk herbal extracts, nutraceutical ingredients, and Ayurveda functional inputs.',
};

export default function Nutraceuticals() {
    // Client images: save to public/products/herbal/ with these names to show on cards
    const products = [
        {
            name: "Ashwagandha Extract",
            description: "Adaptogenic stress control, hormonal balance. Standardized to ≥5% Withanolides.",
            image: "/products/herbal/Ashwagandha-Extract.png",
            specs: [
                { label: "HS Code", value: "121190 / 130219" },
                { label: "Use", value: "Stress relief, sleep" }
            ]
        },
        {
            name: "Shilajit (Purified Resin)",
            description: "Hormonal balance, vitality, and cellular energy. Rich in Fulvic & Humic minerals.",
            image: "/products/herbal/Shilajit.jpg",
            specs: [
                { label: "HS Code", value: "121190 / 300390" },
                { label: "Forms", value: "Resin, Powder, Capsules" }
            ]
        },
        {
            name: "Shatavari Root Extract",
            description: "Rejuvenative tonic for women's health. Supports hormonal balance.",
            image: "/products/herbal/Shatavari-Root-Extract.jpeg",
            specs: [
                { label: "HS Code", value: "121190" },
                { label: "Certifications", value: "GMP, ISO" }
            ]
        },
        {
            name: "Boswellia Extract (Shallaki)",
            description: "Anti-inflammatory support for joint health and mobility.",
            image: "/products/herbal/Boswellia-Serrata-Extract.jpg",
            specs: [
                { label: "HS Code", value: "130219" },
                { label: "Global Name", value: "Boswellia Serrata" }
            ]
        },
        {
            name: "Moringa Leaf Powder",
            description: "Nutritious superfood rich in protein, calcium, and iron. Used in supplements and feed.",
            image: "/products/herbal/Moringa-Leaf-Powder.jpg",
            specs: [
                { label: "HS Code", value: "12119" },
                { label: "Forms", value: "Leaf Powder (60-100 mesh)" }
            ]
        },
        {
            name: "Tocopherol (Vitamin E)",
            description: "Powerful antioxidant for pharma, cosmetics, and food preservation.",
            image: "/products/herbal/Tocopherol.jpg",
            specs: [
                { label: "HS Code", value: "293628" },
                { label: "Forms", value: "Oil, Powder" }
            ]
        },
        {
            name: "Brahmi Extract",
            description: "Cognitive support herb known for enhancing memory and focus (Bacopa Monnieri).",
            image: "/products/herbal/Brahmi-Extract.jpg",
            specs: [
                { label: "Active", value: "Bacosides" },
                { label: "Use", value: "Brain Health" }
            ]
        },
        {
            name: "Triphala Extract",
            description: "Traditional Ayurvedic digestive tonic composed of three fruits: Amla, Bibhitaki, and Haritaki.",
            image: "/products/herbal/Triphala-Extract.jpg",
            specs: [
                { label: "Benefit", value: "Digestion & Detox" },
                { label: "Form", value: "Extract Powder" }
            ]
        },
        {
            name: "Tulsi Extract (Holy Basil)",
            description: "Adaptogenic herb for immunity, respiratory health, and stress relief.",
            image: "/products/herbal/Tulsi-Extract.jpg",
            specs: [
                { label: "Active", value: "Ursolic Acid" },
                { label: "Use", value: "Immunity" }
            ]
        }
    ];

    const whySource = [
        "Deep-rooted Ayurvedic and botanical knowledge systems.",
        "Sourcing of medicinal plants and functional herbs at scale.",
        "Mature extraction, drying, and standardization capabilities.",
        "Cost-efficient production aligned with global quality expectations."
    ];

    const overview = `We are an **India-based exporter of herbal extracts, nutraceutical-grade botanicals, and Ayurveda-based functional ingredients** used across dietary supplements, men’s vitality & longevity formulations, and premium beauty products.

  **Our Role**: Strictly bulk ingredient export and formulation supply. We do not export finished consumer supplements effectively.
  
  **Key Products**: Ashwagandha, Shilajit, Shatavari, Boswellia, Moringa, Vitamin E.`;

    // Using the new collage image for Nutra


    return (
        <ExportPageTemplate
            title="Nutraceutical, Herbal Extracts & Ayurveda Ingredients"
            subtitle="Botanical functional ingredients for supplements and personal care."
            overview={overview}
            products={products}
            whySource={whySource}
        >

        </ExportPageTemplate>
    );
}
