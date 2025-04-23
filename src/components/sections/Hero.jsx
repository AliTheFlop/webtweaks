export default function HeroSection() {
    return (
        <section className="w-full h-screen flex items-center justify-center">
            <div className="grid grid-cols-2 max-w-7/8 w-full">
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-4">
                        <h4 className="">WEBSITE MANAGEMENT AGENCY</h4>
                        <h1>
                            Your Website: <span>On Us</span>
                        </h1>
                        <p>
                            Taking the hassle out of website management so you
                            can focus on your business.
                        </p>
                    </div>

                    <div>
                        <button>VIEW PRICING</button>
                        <button>VIEW OUR WORK</button>
                    </div>
                </div>
                <div>
                    <div>yes!</div>
                </div>
            </div>
        </section>
    );
}
