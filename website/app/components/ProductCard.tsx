"use client"

import Image from "next/image";

type ProductCardProps = {
    service: string;
    image: string;
};

export default function ProductCard({service, image}: ProductCardProps) {
    return (
        <div className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.25rem)] xl:w-[36rem] h-fit min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] bg-[#e3e3e3] p-6 sm:p-8 shadow-2xl flex flex-col">
            <div className="w-full h-[200px] sm:h-[240px] lg:h-[280px] relative">
                <Image
                    src={image}
                    alt={`${service} product`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 36rem"
                    className="object-cover shadow-inner"
                />
            </div>
            <div className="flex flex-1 items-center justify-center border-b border-black pb-6 sm:pb-8">
                <p className="text-2xl sm:text-3xl xl:text-3xl mt-8 self-center text-center max-w-[200px]">
                    {service}
                </p>
            </div>
        </div>
    )
}