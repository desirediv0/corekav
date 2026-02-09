import Image from 'next/image';
import Hero from '@/components/Hero';
import SectionWrapper from '@/components/SectionWrapper';
import ContactCTA from '@/components/ContactCTA';
import { CheckCircle, Package } from 'lucide-react';

const ExportPageTemplate = ({
    title,
    subtitle,
    heroImage,
    overview,
    products,
    whySource,
    children,
    seoFooter, // Optional: SEO keywords footer text
}) => {
    return (
        <main>
            <Hero title={title} subtitle={subtitle} bgImage={heroImage} variant="internal" align="left" />

            <SectionWrapper className="bg-white">
                <div className="grid lg:grid-cols-3 gap-16 items-start">
                    <div className="lg:col-span-2">
                        <span className="text-secondary font-bold uppercase tracking-[0.2em] text-xs mb-3 block">Vertical Overview</span>
                        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-4 sm:mb-6">Sector Capabilities</h2>
                        <div className="prose prose-sm sm:prose max-w-none text-primary/80 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                            {overview?.replace(/\*\*/g, '')}
                        </div>
                    </div>
                    <div className="bg-neutral-50 p-6 sm:p-8 border-t-4 border-secondary shadow-sm">
                        <h3 className="text-base sm:text-lg font-bold font-serif text-primary mb-4 sm:mb-6">Why Source from COREKAV?</h3>
                        <ul className="space-y-3 sm:space-y-4">
                            {whySource.map((item, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <CheckCircle className="text-secondary shrink-0 mt-1" size={18} />
                                    <span className="text-primary/80 text-xs sm:text-sm leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </SectionWrapper>

            <SectionWrapper className="bg-neutral-50 border-t border-neutral-200">
                <div className="text-center mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary mb-3 sm:mb-4">Product Portfolio</h2>
                    <p className="text-sm sm:text-base text-primary/60 px-2">Standardized specifications available for immediate export.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {products.map((product, i) => (
                        <div key={i} className="bg-white border border-neutral-100 hover:border-secondary transition-all duration-300 overflow-hidden group h-full flex flex-col shadow-sm hover:shadow-lg rounded-lg">
                            {/* Client product image: optional – put files in /public/products/<category>/ */}
                            {product.image && (
                                <div className="relative h-48 sm:h-64 w-full bg-white shrink-0 p-4 border-b border-neutral-100">
                                    <Image
                                        src={encodeURI(product.image)}
                                        alt={product.name}
                                        fill
                                        className="object-contain group-hover:scale-105 transition-transform duration-300"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                            )}
                            <div className="p-5 sm:p-8 flex flex-col flex-grow">
                                {!product.image && (
                                    <div className="bg-primary/5 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-sm mb-4 sm:mb-6 text-primary group-hover:bg-primary group-hover:text-secondary transition-colors">
                                        <Package size={22} strokeWidth={1.5} />
                                    </div>
                                )}
                                <h4 className="text-base sm:text-lg md:text-xl font-bold font-serif text-primary mb-2 sm:mb-3 group-hover:text-secondary transition-colors">{product.name}</h4>
                                <p className="text-primary/70 text-xs sm:text-sm mb-4 sm:mb-6 flex-grow leading-relaxed">{product.description}</p>

                                {product.specs && (
                                    <div className="bg-neutral-50 p-4 rounded-sm text-xs text-primary/70 space-y-2 mb-6">
                                        {product.specs.map((spec, j) => (
                                            <div key={j} className="flex justify-between border-b border-dashed border-gray-200 last:border-0 pb-1 last:pb-0">
                                                <span className="font-semibold">{spec.label}:</span>
                                                <span>{spec.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}


                            </div>
                        </div>
                    ))}
                </div>
            </SectionWrapper>

            {children && (
                <SectionWrapper className="bg-white border-t border-neutral-200">
                    {children}
                </SectionWrapper>
            )}

            {seoFooter && (
                <SectionWrapper className="bg-neutral-50 border-t border-neutral-200">
                    <p className="text-xs text-primary/50 text-center max-w-4xl mx-auto leading-relaxed">{seoFooter}</p>
                </SectionWrapper>
            )}

            <ContactCTA />
        </main>
    );
};
export default ExportPageTemplate;
