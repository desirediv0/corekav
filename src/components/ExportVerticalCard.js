import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ExportVerticalCard = ({ title, description, link, icon: Icon }) => {
    return (
        <Link href={link} className="group block h-full">
            <div className="h-full bg-white border border-neutral-100 p-8 hover:border-secondary hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 relative overflow-hidden flex flex-col">
                {/* Subtle background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-bl-[100px] -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150 group-hover:bg-secondary/10" />

                <div className="relative z-10 flex-grow">
                    <div className="mb-6 inline-flex items-center justify-center w-12 h-12 bg-primary/5 text-primary rounded-sm group-hover:bg-primary group-hover:text-secondary transition-colors duration-300">
                        {Icon && <Icon size={24} strokeWidth={1.5} />}
                    </div>

                    <h3 className="text-xl font-serif font-bold text-primary mb-4 group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                        {title}
                    </h3>

                    <p className="text-primary/60 mb-6 leading-relaxed text-sm group-hover:text-primary/80 transition-colors">
                        {description}
                    </p>
                </div>

                <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-secondary/20 transition-colors">
                    <div className="flex items-center text-secondary font-bold text-xs uppercase tracking-widest group-hover:gap-2 transition-all duration-300">
                        Commercial Details <ArrowRight size={14} className="ml-2 group-hover:ml-0" />
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ExportVerticalCard;
