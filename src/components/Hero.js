import Link from 'next/link';

const Hero = ({
    title,
    subtitle,
    bgImage = null,
    ctaText = "Contact Us",
    ctaLink = "/markets-and-contact",
    variant = "internal" // 'home' or 'internal'
}) => {
    const isHome = variant === 'home';

    return (
        <div className={`relative flex items-center justify-center overflow-hidden bg-primary px-4 md:px-6 transition-all duration-500
        ${isHome ? 'min-h-[85vh]' : 'min-h-[50vh] md:min-h-[60vh]'}
    `}>

            {/* Background Layer */}
            <div className="absolute inset-0 z-0">
                {/* Base Color */}
                <div className={`absolute inset-0 bg-primary z-0 ${isHome ? '' : 'bg-primary/20'}`} />

                {/* Image Layer */}
                {bgImage && (
                    <div
                        className={`absolute inset-0 bg-cover bg-center z-10 mix-blend-overlay transition-opacity duration-700
                        ${isHome ? 'opacity-50' : 'opacity-30'}
                    `}
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                )}

                {/* Gradient Overlays */}
                <div className={`absolute inset-0 z-20 bg-gradient-to-b 
                ${isHome ? 'from-primary/10 via-transparent to-primary/10' : 'from-primary/10 via-primary/10 to-primary/10'}
            `} />

                {/* Decorative Grid (Home Only) */}
                {isHome && (
                    <div className="absolute inset-0 z-10 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(201, 162, 77, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201, 162, 77, 0.3) 1px, transparent 1px)',
                            backgroundSize: '60px 60px'
                        }}
                    />
                )}
            </div>

            {/* Content Layer */}
            <div className="relative z-30 max-w-7xl mx-auto text-center">
                <div className={`mx-auto space-y-6 md:space-y-8 animate-fade-in-up ${isHome ? 'max-w-5xl' : 'max-w-4xl'}`}>

                    {/* Title */}
                    <h1 className={`font-serif font-bold text-neutral leading-tight tracking-wide
                    ${isHome ? 'text-4xl md:text-6xl lg:text-7xl drop-shadow-2xl' : 'text-3xl md:text-5xl lg:text-5xl'}
                `}>
                        {title}
                    </h1>

                    {/* Separator */}
                    <div className={`h-1 bg-secondary mx-auto rounded-full ${isHome ? 'w-32' : 'w-20'}`} />

                    {/* Subtitle */}
                    {subtitle && (
                        <p className={`text-neutral/90 font-light leading-relaxed mx-auto
                        ${isHome ? 'text-lg md:text-xl max-w-3xl' : 'text-base md:text-lg max-w-2xl'}
                    `}>
                            {subtitle}
                        </p>
                    )}

                    {/* CTA Button */}
                    <div className={`${isHome ? 'pt-10' : 'pt-6'}`}>
                        <Link
                            href={ctaLink}
                            className={`group relative inline-flex items-center justify-center border border-secondary text-secondary font-bold uppercase tracking-[0.15em] hover:bg-secondary hover:text-primary transition-all duration-300
                            ${isHome ? 'px-10 py-4 text-sm md:text-base shadow-[0_0_20px_rgba(201,162,77,0.2)] hover:shadow-[0_0_40px_rgba(201,162,77,0.5)]' : 'px-8 py-3 text-xs md:text-sm hover:shadow-lg'}
                        `}
                        >
                            <span>{ctaText}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
