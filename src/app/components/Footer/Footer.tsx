'use client';

import Image from 'next/image';
import Logo from '../../Assets/Logo.png';
import WhatsApp from '../../Assets/icon/whatsapp.svg';
import Telegram from '../../Assets/icon/telegram.svg';
import Link from 'next/link';
import './style.css';
import ClientOnly from '../Main/Hidrataion/ClientOnly';

export default function Footer() {
    return (
        <ClientOnly>
            <div className="footer-container">
                <footer className="footer">
                    <div className="footer-block">
                        <div className="footer-logo">
                            <Link href={'/'}>
                                <Image
                                    src={Logo}
                                    className="logo-footer"
                                    alt="logo"
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                        <div className="footer-adress">
                            г. Волгоград, ш. Авиаторов, д. 16
                        </div>
                    </div>
                    <div className="footer-block">
                        <div className="footer-info footer-title">
                            ИНФОРМАЦИЯ НА САЙТЕ:
                        </div>
                        <Link href={'/'}>
                            <div className="footer-info">Главная</div>
                        </Link>
                        <Link href={'/pages/delivery'}>
                            <div className="footer-info">Доставка</div>
                        </Link>
                        <Link href={'/pages/product/Product-all'}>
                            <div className="footer-info">Граниты</div>
                        </Link>
                        <Link href={'/pages/contacts'}>
                            <div className="footer-info">Контакты</div>
                        </Link>
                    </div>
                    <div className="footer-block">
                        <div className="footer-icons">
                            <div className="icon-text footer-title">
                                КОНТАКТЫ:
                            </div>
                            <div className="icon-text">
                                <Link href={'tel: +7-962-759-50-56'}>
                                    <div className="footer-number">
                                    +7-962-759-50-56
                                    </div>
                                </Link>
                            </div>
                            <div className="icon-text">
                                <Link href={'tel: +7-962-759-50-46'}>
                                    <div className="footer-number">
                                    +7-962-759-50-46
                                    </div>
                                </Link>
                            </div>
                            <div className="icon-text">
                                <Link href={'malito:vkz134@yandex.ru'}>
                                    vkz134@yandex.ru
                                </Link>
                            </div>
                            <div className="icon-text footer-title">
                                НАШИ СОЦСЕТИ:
                            </div>
                            <div className="icons">
                                <button className="footer-button">
                                    <a href="https://wa.me/+79627595046">
                                        <Image
                                            src={WhatsApp}
                                            className="footer-icon"
                                            alt="WhatsApp"
                                            loading="lazy"
                                        />
                                    </a>
                                </button>
                                <button className="footer-button">
                                    <a
                                        href={`https://t.me/${'vkz134'}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Image
                                            src={Telegram}
                                            className="footer-icon"
                                            alt="telegram"
                                            loading="lazy"
                                        />
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer-line">
                    <div className="line"></div>
                    <div className="line-text">
                        <div className="line-item">
                            Все права защищены © - 2025
                        </div>
                    </div>
                </div>
            </div>
        </ClientOnly>
    );
}
