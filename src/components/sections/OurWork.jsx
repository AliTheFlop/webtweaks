import PopupImage from '../UI/PopupImage';

export default function OurWork() {
    return (
        <section className="w-full flex justify-center mb-50">
            <div className="w-full max-w-7/8">
                <div className="flex flex-col max-w-1/2 w-full gap-4 mb-12">
                    <h2 className="font-heading text-4xl text-primary">
                        Websites We Manage
                    </h2>
                    <p className="font-body text-lg">
                        We work with businesses we believe in to help save them
                        the stress of hiring a developer when all they want is a
                        quick fix.
                    </p>
                </div>

                {/** Single Project */}
                <div className="border border-primary rounded-3xl shadow-md hover:shadow-lg py-12 px-12 flex flex-row">
                    <div className="flex flex-col items-baseline gap-2 w-2/5">
                        <h3 className="font-heading text-xl font-bold">
                            Altus Plumbing
                        </h3>
                        <p className="text-text font-body text-base w-3/4">
                            A local plumber based in Sydney, Australia. We
                            manage their hosting, maintenance, and updates.
                        </p>
                        <button className="mt-auto bg-primary rounded-xl font-heading font-bold text-white px-5 py-2">
                            View Site
                        </button>
                    </div>
                    <PopupImage url="/home/landingpage-images/altusplumbing-full.png" />
                </div>
            </div>
        </section>
    );
}
