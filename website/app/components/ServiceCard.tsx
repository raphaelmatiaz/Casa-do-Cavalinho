// ServiceCard.tsx
"use client"

import Image from "next/image";

type ServiceCardProps = {
    service: string;
    image: string;
};

export default function ServiceCard({service, image}: ServiceCardProps) {
    return (
        <div className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.25rem)] xl:w-[36rem] bg-[#DEDEDE] p-6 sm:p-8 shadow-2xl flex flex-col justify-between min-h-[380px] sm:min-h-[440px] lg:min-h-[500px]">
            <div className="w-full h-[200px] sm:h-[240px] lg:h-[280px] relative">
                <Image
                    src={image}
                    alt={`${service} service`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36rem"
                    className="object-cover"
                />
            </div>

            <div className="flex flex-1 items-center justify-center pt-6">
                <p className="text-2xl sm:text-3xl xl:text-3xl self-center text-center max-w-[200px] border-b pb-6 sm:pb-8 border-black">
                    {service}
                </p>
            </div>
        </div>
    )
}