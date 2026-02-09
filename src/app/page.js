import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ContactCTA from '@/components/ContactCTA';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Globe, ShieldCheck, Factory, Zap, Stethoscope, Sprout } from 'lucide-react';

// What We Do cards – wahi banner images jo har export page par use ho rahe hain
const WHAT_WE_DO_CARD_IMAGES = {
  nutraceutical: '/products/herbal/Ashwagandha-Extract.png',
  foodSpices: '/products/agro/Chilli-Oleoresin.jpg',
  agro: '/products/Nutrients/Makhana.jpeg',
  animalFeed: '/products/animal-feed/Lactation-Concentrate.jpg',
  veterinary: '/products/veterinary/Veterinary-Needles.png',
  medical: '/products/medical/Diagnostic-Lab-Consumables.png',
  industrial: '/products/industrial/Power-Distribution-Boxes.png',
  carbon: '/Banner 8. Carbon .png',
};

export default function Home() {
  return (
    <main>
      <Hero
        title={
          <>

            Nutraceutical, Nutritional, Specialised Agro, Makhana, And Animal Feed
          </>
        }
        subtitle="Supplying verified, compliant and scalable products to global markets across food, specialised agro, nutraceuticals, human and veterinary medical consumables, and electrical energy components."
        variant="home"
        ctaText="View Products"
        ctaLink="#what-we-do"
        bgImage="/Master Banners front page .png"
      />

      {/* WHAT WE DO – Export & Services (infographic-style, LDC-inspired) */}
      <SectionWrapper id="what-we-do" className="bg-neutral/20">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-secondary">Export &amp; Services</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary mt-2 mb-3 sm:mb-4">Products</h2>
          <p className="text-sm sm:text-base text-primary/70 max-w-2xl mx-auto px-1">
            We responsibly source, transform, and deliver essential products across agriculture, nutrition, healthcare, and infrastructure to institutional buyers worldwide.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            title="Food, Spices & Plant-Based"
            desc="Bulk spices, natural food colours, oleoresins, and plant-based functional ingredients."
            icon={Sprout}
            image={WHAT_WE_DO_CARD_IMAGES.foodSpices}
            href="/exports/food-spices-plant-based"
          />
          <ServiceCard
            title="Specialised Agro (Makhana, Saffron)"
            desc="Fox nuts, pea protein, saffron, and dehydrated vegetables."
            icon={Sprout}
            image={WHAT_WE_DO_CARD_IMAGES.agro}
            href="/exports/makhana-fox-nuts-lotus-seeds"
          />
          <ServiceCard
            title="Nutraceutical, Herbal & Ayurveda"
            desc="Botanical extracts, powders, and formulation inputs for supplements and personal care."
            icon={Leaf}
            image={WHAT_WE_DO_CARD_IMAGES.nutraceutical}
            href="/exports/herbal-nutraceutical-ayurveda-ingredients"
          />
          <ServiceCard
            title="Animal Feed & Nutrition"
            desc="Compound feed, concentrates, and supplements for livestock, poultry, and aquaculture."
            icon={Factory}
            image={WHAT_WE_DO_CARD_IMAGES.animalFeed}
            href="/exports/animal-feed"
          />
          <ServiceCard
            title="Veterinary & Animal Husbandry"
            desc="Vet-grade disposables, farm tools, and consumables for commercial livestock."
            icon={ShieldCheck}
            image={WHAT_WE_DO_CARD_IMAGES.veterinary}
            href="/exports/veterinary-animal-husbandry-consumables"
          />
          <ServiceCard
            title="Human Medical Consumables"
            desc="Hospital disposables and diagnostic consumables for healthcare institutions."
            icon={Stethoscope}
            image={WHAT_WE_DO_CARD_IMAGES.medical}
            href="/exports/medical-consumables"
          />
          <ServiceCard
            title="Industrial & Electrical"
            desc="Power system accessories, enclosures, and components for renewable and infrastructure."
            icon={Zap}
            image={WHAT_WE_DO_CARD_IMAGES.industrial}
            href="/exports/industrial-electrical-components"
          />
          <ServiceCard
            title="Carbon &amp; Sustainability"
            desc="Carbon credit trading, project aggregation, and sustainability advisory."
            icon={Globe}
            image={WHAT_WE_DO_CARD_IMAGES.carbon}
            href="/exports/carbon-credits-esg-climate-solutions"
          />
        </div>
      </SectionWrapper>


      {/* Global Markets – Alternate Background (Midnight Blue #0A2540) */}
      <SectionWrapper className="bg-primary-light text-neutral overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-center mb-10 sm:mb-16 px-2">Global Markets We Serve</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            <MarketItem name="South and South East Asia" />
            <MarketItem name="Central Asia" />
            <MarketItem name="Middle East and GCC" />
            <MarketItem name="Africa" />
            <MarketItem name="USA" />
            <MarketItem name="Latin America and Caribbean" />
          </div>

          <div className="mt-20 max-w-3xl mx-auto text-center border-t border-white/10 pt-10 px-4 sm:px-0">
            <p className="text-sm sm:text-base md:text-lg font-light opacity-90 mb-6 sm:mb-8 px-1">
              If you are an importer, distributor, EPC contractor, or institutional buyer seeking a stable and compliant Indian export supplier, we welcome structured discussions.
            </p>
            <div className="inline-block w-full max-w-md p-4 sm:p-6 border border-secondary rounded-xl bg-white/5 backdrop-blur-sm text-left">
              <h3 className="font-bold text-secondary text-base sm:text-lg mb-2">Contact Us</h3>
              <p className="font-semibold text-neutral text-sm sm:text-base">COREKAV International Trade</p>
              <p className="text-sm sm:text-base text-neutral/90">B-39, 1st Floor, Middle Cir, Connaught Place, New Delhi, India 110001</p>
              <p className="mt-3">
                <a href="https://wa.me/919319337377" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary font-bold hover:underline text-sm sm:text-base break-all sm:break-normal">
                  <Image src="/whatsapp.svg" alt="" width={20} height={20} className="shrink-0" /> WhatsApp: +91-9319337377
                </a>
              </p>
              <p className="mt-2">
                <a href="mailto:info@corekav.com" className="text-secondary font-bold hover:underline text-sm sm:text-base break-all">Email: info@corekav.com</a>
              </p>
              <p className="mt-2">
                <a href="https://www.corekav.com" target="_blank" rel="noopener noreferrer" className="text-secondary font-bold hover:underline text-sm sm:text-base break-all">www.corekav.com</a>
              </p>
            </div>
          </div>

        </div>
      </SectionWrapper>

    </main>
  );
}

const ServiceCard = ({ title, desc, icon: Icon, image, href }) => (
  <Link href={href} className="group bg-white rounded shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-secondary/20 block h-full overflow-hidden">
    {/* Client image: top of card (category collage) */}
    {image ? (
      <div className="relative h-40 w-full overflow-hidden bg-neutral-100">
        <Image
          src={encodeURI(image)}
          alt=""
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>
    ) : (
      <div className="w-12 h-12 mt-8 ml-8 bg-primary/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
        <Icon size={24} className="text-primary group-hover:text-white" />
      </div>
    )}
    <div className="p-4 sm:p-6">
      <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary mb-2 sm:mb-3 group-hover:text-secondary transition-colors">{title}</h3>
      <p className="text-primary/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">{desc}</p>
      <div className="flex items-center text-secondary text-sm font-bold tracking-wider uppercase group-hover:translate-x-1 transition-transform">
        Explore <ArrowRight size={16} className="ml-2" />
      </div>
    </div>
  </Link>
);

const MarketItem = ({ name }) => (
  <div className="flex flex-col items-center gap-3 sm:gap-4">
    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/10 flex items-center justify-center shrink-0">
      <Globe className="text-secondary" size={20} />
    </div>
    <span className="font-bold tracking-wide text-xs sm:text-sm md:text-base text-center leading-tight">{name}</span>
  </div>
);
