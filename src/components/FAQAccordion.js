'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-100 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-lg font-serif font-medium text-primary group-hover:text-secondary transition-colors pr-8">
                    {question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-secondary text-secondary transform rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-secondary group-hover:text-secondary'}`}>
                    <ChevronDown size={16} />
                </div>
            </button>
            <div
                className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'
                    }`}
            >
                <div className="overflow-hidden">
                    <p className="text-primary/70 leading-relaxed text-sm md:text-base border-l-2 border-secondary pl-4">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const FAQAccordion = ({ items }) => {
    return (
        <div className="w-full bg-white px-6 md:px-10 py-6 md:py-8 shadow-sm border border-neutral-100 rounded-sm">
            {items.map((item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
        </div>
    );
};

export default FAQAccordion;
