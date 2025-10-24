import { Metadata } from 'next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Favicon from './Assets/Logo.png';
import Image from 'next/image';
import {Manrope} from 'next/font/google'
import './globals.css';
import Back from './Assets/main/Back.jpg';

export const metadata: Metadata = {
    title: 'Волгоградский камнеобрабатывающий завод',
    icons: {
        icon: Favicon.src,
    },
};

const manrope = Manrope({ subsets: ['cyrillic'] })


export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
            <body className={manrope.className} suppressHydrationWarning={true}>
                <BackgroundImage />
                <div className="page-main">
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}

function BackgroundImage() {
    return (
        <Image
            src={Back}
            alt="back"
            className="back"
            priority
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            style={{
                objectFit: 'cover',
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                zIndex: -1,
            }}
        />
    );
}
