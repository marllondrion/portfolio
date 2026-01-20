import React, { useState, useEffect, useRef } from 'react';

interface RevealSectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    innerClassName?: string;
    isSnap?: boolean;
}

export const RevealSection: React.FC<RevealSectionProps> = ({
    id,
    children,
    className = "",
    innerClassName = "",
    isSnap = true
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setIsActive(true);
                }
            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
            observer.disconnect();
        };
    }, [id]);

    return (
        <section
            id={id}
            className={`
        relative overflow-hidden 
        ${isSnap ? 'snap-section min-h-screen' : 'min-h-[50vh] py-20'} 
        ${className}
      `}
        >
            {/* Background Effect */}
            <div className="bg-aura absolute inset-0 pointer-events-none"></div>

            <div
                ref={ref}
                className={`w-full max mx-auto px-6 md:px-12 lg:px-16 
          reveal ${isActive ? 'active' : ''} 
          ${innerClassName} 
        `}
            >
                {children}
            </div>
        </section>
    );
};