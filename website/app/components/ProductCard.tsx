"use client"

import Image from "next/image";

type ProductCardProps = {
    service: string;
    image: string;
};

export default function ProductCard({service, image}: ProductCardProps) {
    return (
        <>
            <div className="w-[36rem] h-fit min-h-[500px] bg-[#e3e3e3] p-8 shadow-2xl">
                <div className="w-full h-[280px] relative">
                    <Image 
                        src={`${image}`} 
                        alt="Card Image" 
                        fill
                        className="object-cover shadow-inner"
                        >
                    </Image>
                </div>
                  <div className="flex items-center justify-center border-b border-black pb-8">
                    <p className="text-4xl mt-[40px] self-center text-center  max-w-[200px] ">{service}</p>
                </div>
                {/* <ul className="text-3xl font-caudex list-disc ml-9">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, optio!</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ul> */}
                {/* <button className="mt-16 bg-[var(--color-secondary)] px-32 min-w-full py-5 rounded-full text-3xl text-white shadow-2xl">
                    Learn More
                </button> */}
            </div>
        </>
    )
}