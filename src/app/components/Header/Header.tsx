'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';
import './style.css';
import Logo from '../../Assets/Logo.png';
import Dropdown from './DropDown/DropDown';
import HeaderImg from '../../Assets/Header-img.jpg';
import Link from 'next/link';
import Side from '../../Assets/SideBar.svg';
import dynamic from 'next/dynamic';
const DynamicSidebar = dynamic(
    () => import('react-pro-sidebar').then((mod) => mod.Sidebar),
    { ssr: false }
);
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useState, useEffect } from 'react';

export default function Header() {
    const [mounted, setMounted] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        setIsSidebarOpen(false);
    }, [pathname]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const linksPrice = [
        { href: '/pages/price/All-product', label: 'Все продукты' },
        { href: '/pages/price/Our-result', label: 'Наши работы' },
        { href: '/pages/price/Standart-tiles', label: 'Стандартные памятники' },
        { href: '/pages/price/Color-tiles', label: 'Цветные памятники' },
        { href: '/pages/price/Figure-tiles', label: 'Фигурные памятники' },
        { href: '/pages/price/Block-granit', label: 'Блоки из гранита' },
        { href: '/pages/price/Fin-granit', label: 'Финский гранит' },
        { href: '/pages/price/Tombstones', label: 'Надгробные плиты' },
        { href: '/pages/price/Granit-cut', label: 'Распил' },
        { href: '/pages/price/Slabs', label: 'Слэбы' },
        { href: '/pages/price/Gabro', label: 'Корки из габбро-диабаза' },
        { href: '/pages/price/Granit-tiles', label: 'Гранитная плитка' },
        { href: '/pages/price/Kitchen-granit', label: 'Кухонный гранит' },
        { href: '/pages/price/Step-tiles', label: 'Пошаговые плиты' },
        { href: '/pages/price/Paving-slabs', label: 'Гранитная брусчатка' },
        { href: '/pages/price/Border-granit', label: 'Гранитные бордюры' },
    ];
    const linksGranit = [
        { href: '/pages/product/Product-all', label: 'Все граниты' },
        { href: '/pages/product/Gabro-D', label: 'Габбро-диабаз' },
        { href: '/pages/product/Sosnovckiy', label: 'Сосновский серый' },
        { href: '/pages/product/Smoke', label: 'Дымовский' },
        { href: '/pages/product/Rapakivi', label: 'Рапакиви' },
        { href: '/pages/product/Shongui', label: 'Шонгуй' },
        { href: '/pages/product/Merchant', label: 'Купецкий' },
        { href: '/pages/product/Nini', label: 'Нинимяки' },
        { href: '/pages/product/Vinga', label: 'Винга' },
        { href: '/pages/product/Hibinit', label: 'Хибинит' },
        {
            href: '/pages/product/Subpolar-amphibolite',
            label: 'Приполяный амфиболит',
        },
        { href: '/pages/product/Renaissance', label: 'Возрождение' },
        { href: '/pages/product/Spock-buntin', label: 'Сопка Бунтина' },
        { href: '/pages/product/Kaalguvaara', label: 'Калгуваара' },
    ];
    return (
        <header className="header">
            <div className="header-main">
                <div className="nav">
                    <div className="nav-block sidebar">
                        <button
                            onClick={mounted ? toggleSidebar : undefined}
                            style={!mounted ? { pointerEvents: 'none' } : {}}
                        >
                            <Image
                                src={Side}
                                alt="Toggle sidebar"
                                className="toggle-button"
                            />
                        </button>

                        {mounted && (
                            <DynamicSidebar
                                toggled={isSidebarOpen}
                                collapsed={!isSidebarOpen}
                                collapsedWidth="0px"
                                width="250px"
                                transitionDuration={300}
                                backgroundColor="#f0f0f0"
                                rootStyles={{
                                    height: 'auto',
                                    zIndex: 1000,
                                    border: 'none',
                                    overflow: 'hidden',
                                }}
                            >
                                <Menu
                                    menuItemStyles={{
                                        button: {
                                            [`&.active`]: {
                                                backgroundColor: '#13395e',
                                                color: '#b6c8d9',
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem
                                        component={<Link href="/" />}
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        Главная
                                    </MenuItem>
                                    <SubMenu label="Граниты">
                                        {linksGranit.map((link) => (
                                            <MenuItem
                                                key={link.href}
                                                component={
                                                    <Link href={link.href} />
                                                }
                                                onClick={() =>
                                                    setIsSidebarOpen(false)
                                                }
                                            >
                                                {link.label}
                                            </MenuItem>
                                        ))}
                                    </SubMenu>
                                    <SubMenu label="Продукция">
                                        {linksPrice.map((link) => (
                                            <MenuItem
                                                key={link.href}
                                                component={
                                                    <Link href={link.href} />
                                                }
                                                onClick={() =>
                                                    setIsSidebarOpen(false)
                                                }
                                            >
                                                {link.label}
                                            </MenuItem>
                                        ))}
                                    </SubMenu>
                                    <MenuItem
                                        component={
                                            <Link href="/pages/delivery" />
                                        }
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        Доставка
                                    </MenuItem>
                                    <MenuItem
                                        component={
                                            <Link href="/pages/contacts" />
                                        }
                                        onClick={() => setIsSidebarOpen(false)}
                                    >
                                        Контакты
                                    </MenuItem>
                                </Menu>
                            </DynamicSidebar>
                        )}
                    </div>
                    <div className="nav-block">
                        <div className="logo">
                            <Link href="/">
                                <Image
                                    src={Logo}
                                    className="logo"
                                    alt="Логотип"
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="nav-block">
                        <nav className="navigation">
                            <div className="nav-list">
                                <div className="nav-block">
                                    <div className="nav-button">
                                        <Link
                                            className="nav-button-text"
                                            href="/"
                                        >
                                            Главная
                                        </Link>
                                    </div>
                                </div>
                                <div className="nav-block">
                                    <div className="nav-button">
                                        <Dropdown
                                            name="Граниты"
                                            links={linksGranit}
                                        />
                                    </div>
                                </div>
                                <div className="nav-block">
                                    <div className="nav-button">
                                        <Dropdown
                                            name="Продукция"
                                            links={linksPrice}
                                        />
                                    </div>
                                </div>
                                <div className="nav-block">
                                    <div className="nav-button">
                                        <Link
                                            className="nav-button-text"
                                            href="/pages/delivery"
                                        >
                                            Доставка
                                        </Link>
                                    </div>
                                </div>
                                <div className="nav-block">
                                    <div className="nav-button">
                                        <Link
                                            className="nav-button-text"
                                            href="/pages/contacts"
                                        >
                                            Контакты
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="contacts">
                                <button className="contacts-button">
                                    <Link href="tel:+79627595056">
                                        <span className="nav-button-text contacts-text">
                                            +7-962-759-50-56
                                        </span>
                                    </Link>
                                </button>
                                <button className="contacts-button">
                                    <Link href="mailto:vkz134@yandex.ru">
                                        <span className="nav-button-text contacts-text">
                                            vkz134@yandex.ru
                                        </span>
                                    </Link>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="header-img">
                    <Image
                        src={HeaderImg}
                        className="header-img"
                        alt="Заглавная картинка"
                    />
                </div>
            </div>
        </header>
    );
}
