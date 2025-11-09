'use client';

interface CardProps {
    company: string;
    role: string;
    duration: string;
    description: string;
    technologies: string[];
    bannerImageUrl:string;
    position: string;
};

export function Card({ company, role, duration, description, technologies, bannerImageUrl, position }: CardProps) {
    return (
        <div className="w-60 h-80 ">
            
        </div>
    )
}