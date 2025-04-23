import Link from 'next/link';

export default function NavigationBar() {
    return (
        <nav className="fixed top-0 left-0 w-full flex justify-center items-center bg-primary h-20">
            <div className="flex flex-row max-w-7/8 w-7/8 items-center justify-between">
                <div className="text-white font-lexend font-bold text-2xl">
                    webtweaks
                </div>
                <div className="flex flex-row items-center gap-10 text-white font-body font-bold">
                    <Link href="/">HOME</Link>
                    <Link href="/">SERVICES</Link>
                    <Link href="/">OUR WORK</Link>
                    <Link href="/">PRICING</Link>
                    <Link
                        href="/"
                        className="px-5 py-2 rounded-full rounded-bl-none bg-white text-primary"
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </nav>
    );
}
