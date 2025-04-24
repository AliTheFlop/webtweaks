import Image from 'next/image';
import topRightArrow from '/public/home/top-right.svg';
import websiteMaintenance from '/public/home/maintenance.svg';
import support from '/public/home/support.svg';
import update from '/public/home/update.svg';

export default function Services() {
    return (
        <section className="w-full mb-30 flex justify-center">
            <div className="w-full max-w-7/8">
                <div className="flex flex-col max-w-1/2 w-full gap-4">
                    <h2 className="font-heading text-4xl text-primary">
                        Our Services
                    </h2>
                    <p className="font-body text-lg">
                        At webtweaks, we specialize in website management and
                        maintenance tailored to meet the needs of local
                        businesses. We're dedicated to ensuring your website
                        runs smoothly and remains secure.
                    </p>
                </div>
                <div className="grid grid-cols-3 gap-x-20 mt-12">
                    {/**SINGLE BOX ONE */}
                    <div className="border border-primary rounded-2xl shadow-sm hover:shadow-xl px-6 py-10 group/infobox hover:-translate-y-2 transition-all ">
                        <div className="w-full relative mb-10">
                            <div className="info-headings">
                                <div className="w-full h-full relative pb-3">
                                    <Image
                                        src={websiteMaintenance}
                                        width="50"
                                        height="50"
                                        alt="Website Maintenance"
                                        className="text-primary"
                                    />
                                </div>
                                <h4 className="font-heading text-3xl text-text ">
                                    Website Maintenance
                                </h4>
                            </div>
                            <div
                                className="absolute top-0 right-0 w-12 h-12
                                group-hover/infobox:-translate-y-1 group-hover/infobox:translate-x-1 transition-all animation"
                            >
                                <Image
                                    src={topRightArrow}
                                    fill
                                    alt="Arrow pointing to top-right"
                                />
                            </div>
                        </div>
                        <div className="info-text">
                            We perform regular check-ups to keep your site
                            running at peak performance. This includes
                            monitoring for issues, addressing technical
                            glitches, and ensuring compatibility with the latest
                            web standards.
                        </div>
                    </div>
                    {/**SINGLE BOX TWO */}
                    <div className="border border-primary rounded-2xl shadow-sm hover:shadow-xl px-6 py-10 group/infobox hover:-translate-y-2 transition-all ">
                        <div className="w-full relative mb-10">
                            <div className="info-headings">
                                <div className="w-full h-full relative pb-3">
                                    <Image
                                        src={update}
                                        width="50"
                                        height="50"
                                        alt="Website Maintenance"
                                        className="text-primary"
                                    />
                                </div>
                                <h4 className="font-heading text-3xl text-text ">
                                    Routine Updates
                                </h4>
                            </div>
                            <div
                                className="absolute top-0 right-0 w-12 h-12
                                group-hover/infobox:-translate-y-1 group-hover/infobox:translate-x-1 transition-all animation"
                            >
                                <Image
                                    src={topRightArrow}
                                    fill
                                    alt="Arrow pointing to top-right"
                                />
                            </div>
                        </div>
                        <div className="info-text">
                            We handle all necessary software updates,
                            installations, and security patches, so you never
                            have to worry about outdated components.
                        </div>
                    </div>
                    {/**SINGLE BOX THREE */}
                    <div className="border border-primary rounded-2xl shadow-sm hover:shadow-xl px-6 py-10 group/infobox hover:-translate-y-2 transition-all ">
                        <div className="w-full relative mb-10">
                            <div className="info-headings">
                                <div className="w-full h-full relative pb-3">
                                    <Image
                                        src={support}
                                        width="50"
                                        height="50"
                                        alt="Website Maintenance"
                                        className="text-primary"
                                    />
                                </div>
                                <h4 className="font-heading text-3xl text-text ">
                                    Reliable Support
                                </h4>
                            </div>
                            <div
                                className="absolute top-0 right-0 w-12 h-12
                                group-hover/infobox:-translate-y-1 group-hover/infobox:translate-x-1 transition-all animation"
                            >
                                <Image
                                    src={topRightArrow}
                                    fill
                                    alt="Arrow pointing to top-right"
                                />
                            </div>
                        </div>
                        <div className="info-text">
                            We're here for you whenever you need assistance.
                            Whether you have questions, need troubleshooting, or
                            require guidance, we provide fast, friendly support
                            to ensure your website is always in safe hands.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
