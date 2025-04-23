import './globals.css';

export const metadata = {
    title: 'Easy Website Management | WebTweaks',
    description:
        'Easy and simple website maintenance, management, and hosting.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
