import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="w-full h-screen flex items-center justify-center lg:pt-10">
            <div className="grid grid-cols-2 max-w-7/8 w-full h-3/4">
                <div className="flex flex-col gap-20 justify-center">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-heading font-bold text-sm text-[#4E4E4E]">
                            WEBSITE MANAGEMENT AGENCY
                        </h4>
                        <h1 className="font-heading font-normal text-7xl text-[#2A2A2A]">
                            Your Website:
                            <span className="text-primary"> On Us</span>
                        </h1>
                        <p className="font-heading text-xl text-[#2A2A2A] mt-4">
                            Taking the hassle out of website management so you
                            can focus on your business.
                        </p>
                    </div>

                    <div className="flex flex-row gap-8">
                        <button className="bg-primary px-10 py-4 font-heading text-white font-bold rounded-2xl">
                            VIEW PRICING
                        </button>
                        <button className="px-10 py-4 font-heading font-bold rounded-2xl bg-white stroke-primary border border-primary text-primary ">
                            VIEW OUR WORK
                        </button>
                    </div>
                </div>
                <div className="w-full h-full relative">
                    <Image
                        src="/home/hero-image.png"
                        fill
                        className="object-contain"
                        alt="Employees having a work meeting"
                    />
                </div>
            </div>
        </section>
    );
}
