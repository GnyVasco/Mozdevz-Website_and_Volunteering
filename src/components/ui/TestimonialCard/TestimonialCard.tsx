import Image from "next/image";
import { Testimonial } from "@/constants/testimonials";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    const { quote, person } = testimonial;

    return (
        <div className="pt-6 sm:pt-8 pr-4 sm:pr-8 pl-3 sm:pl-4 pb-8 sm:pb-12 flex gap-1.5 sm:gap-2.5 bg-white/5 rounded-[20px]">
            <span className="font-semibold text-5xl sm:text-6xl md:text-8xl text-secondary hidden xs:block">"</span>
            <div className="pt-0 sm:pt-6 space-y-4 sm:space-y-6">
                <p className="text-lg sm:text-2xl md:text-[32px] font-medium text-gray-80">{quote}</p>
                <div className="flex space-x-2.5 items-center">
                    <Image
                        src={person.image.url}
                        alt={person.name}
                        width={40}
                        height={40}
                        className="rounded-full border border-gray-80 w-8 h-8 sm:w-10 sm:h-10"
                    />
                    <div className="flex flex-col text-gray-54">
                        <p className="text-xs sm:text-sm text-secondary">{person.name}</p>
                        <p className="text-xs sm:text-sm">{person.role}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
