import Image from 'next/image';

export default function Infoblocks() {
    return (
        <section className="flex items-center justify-center">
            <div className="grid grid-rows-3 w-full max-w-7/8">
                <div className="grid grid-cols-2 gap-x-2 min-h-[400px] mb-10">
                    <div className="relative w-full h-full">
                        <Image
                            src="/home/under-construction.svg"
                            fill
                            className="object-contain"
                            alt="Under construction"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="font-heading text-3xl text-primary">
                            Managed Website Hosting
                        </h2>
                        <p className="font-body text-lg mt-5">
                            Our website hosting service is fully managed,
                            allowing you to focus on what matters most - your
                            website and business. We handle the technical
                            aspects, ensuring your site runs smoothly. In the
                            unlikely event of an issue, our team is here to
                            provide support, without any surprise costs.
                        </p>
                        <ul className="list-disc font-body text-lg pl-8 pt-2">
                            <li>Reliable Performance</li>
                            <li>Expert Support</li>
                            <li>Included With All Plans</li>
                        </ul>
                    </div>
                </div>

                {/** Second Infoblock */}
                <div className="grid grid-cols-2 gap-x-2 min-h-[400px]">
                    <div className="flex flex-col justify-center">
                        <h2 className="font-heading text-3xl text-primary">
                            Transparent Pricing
                        </h2>
                        <p className="font-body text-lg mt-5">
                            We believe in clear, upfront pricing that allows you
                            to properly budget for your website. Each plan
                            includes a detailed breakdown of features and
                            resources, ensuring you know exactly what you’re
                            paying for.
                        </p>
                        <ul className="list-disc font-body text-lg pl-8 pt-2">
                            <li>No Hidden Fees</li>
                            <li>Clear Pricing Plans</li>
                            <li>Budget-Friendly Options</li>
                        </ul>
                    </div>
                    <div className="relative w-full h-full">
                        <Image
                            src="/home/files.svg"
                            fill
                            className="object-contain"
                            alt="Under construction"
                        />
                    </div>
                </div>

                {/** Third Infoblock */}
                <div className="grid grid-cols-2 gap-x-2 min-h-[400px]">
                    <div className="relative w-full h-full">
                        <Image
                            src="/home/security.svg"
                            fill
                            className="object-contain"
                            alt="Under construction"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h2 className="font-heading text-3xl text-primary">
                            Security-First Approach
                        </h2>
                        <p className="font-body text-lg mt-5">
                            Your website's security is our top priority. We’ve
                            implement advanced security measures to protect your
                            data and maintain the integrity of your site,
                            including SSL certificates, firewalls, regular
                            updates, and monitoring. Our security protocols
                            ensure that your online presence remains safe from
                            threats.
                        </p>
                        <ul className="list-disc font-body text-lg pl-8 pt-2">
                            <li>Advanced Security Protocols</li>
                            <li>Regular Monitoring and Updates</li>
                            <li>Proactive Threat Detection</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
