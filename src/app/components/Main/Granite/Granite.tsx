import Button from '../Buttons/Button';
import GraniteCard from './Granite-card/Granite-Card';
import gabroDia from '../../../Assets/main/Granit/gabbrodr.jpg';
import sosnovskiy from '../../../Assets/main/Granit/sosnovo-grey-granit.jpg';
import dym from '../../../Assets/main/Granit/dym.jpg';
import hibinit from '../../../Assets/main/Granit/hibinit.jpg';
import vinga from '../../../Assets/main/Granit/vinga.jpg';
import amfibol from '../../../Assets/main/Granit/amfibol.jpg';
import sopka from '../../../Assets/main/Granit/Sopka.jpg';
import vozrozh from '../../../Assets/main/Granit/vozrozh.jpg';
import kup from '../../../Assets/main/Granit/kup.jpg';
import nini from '../../../Assets/main/Granit/nini.jpg';
import './style.css';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import ClientOnly from '../Hidrataion/ClientOnly';

export default function Granite() {
    const button = [
        { name: 'Посмотреть все граниты', href: '/pages/product/Product-all' },
    ];

    const graniteBase = [
        {
            title: 'Габбро-диабаз',
            subtitle: 'Месторождение другорецкое',
            img: gabroDia,
            href: '/pages/product/Gabro-D',
        },
        {
            title: 'Сосновский серый',
            subtitle: 'Гранит',
            img: sosnovskiy,
            href: '/pages/product/Sosnovckiy',
        },
        {
            title: 'Дымовский',
            subtitle: 'Гранит',
            img: dym,
            href: '/pages/product/Smoke',
        },
        {
            title: 'Хибинит',
            subtitle: 'Гранит',
            img: hibinit,
            href: '/pages/product/Hibinit',
        },
        {
            title: 'Винга',
            subtitle: 'Гранит',
            img: vinga,
            href: '/pages/product/Vinga',
        },
        {
            title: 'Амфиболит',
            subtitle: 'Гранит',
            img: amfibol,
            href: '/pages/product/Subpolar-amphibolite',
        },
        {
            title: 'Сопка Бунтина',
            subtitle: 'Пироксенит',
            img: sopka,
            href: '/pages/product/Spock-buntin',
        },
        {
            title: 'Возрождение',
            subtitle: 'Гранит',
            img: vozrozh,
            href: '/pages/product/Renaissance',
        },
        {
            title: 'Купецкий',
            subtitle: 'Гранит',
            img: kup,
            href: '/pages/product/Merchant',
        },
        {
            title: 'Нинимяки',
            subtitle: 'Гранит',
            img: nini,
            href: '/pages/product/Nini',
        },
    ];

    return (
        <ClientOnly>
            <div className="granite zoomIn wow">
                <div className="granite-block">
                    <Fade
                        delay={200}
                        duration={1000}
                        triggerOnce
                        fraction={0.5}
                    >
                        <h2 className="title">Наши граниты</h2>
                    </Fade>
                </div>
                <div className="granite-block">
                    <div className="granite-cards">
                        <Fade
                            delay={200}
                            duration={1000}
                            triggerOnce
                            fraction={0.5}
                        >
                            {graniteBase.map((granite) => (
                                <GraniteCard
                                    key={granite.title}
                                    title={granite.title}
                                    subtitle={granite.subtitle}
                                    img={granite.img}
                                    href={granite.href}
                                />
                            ))}
                        </Fade>
                    </div>
                </div>
                <div className="granite-block">
                    <Fade
                        delay={200}
                        duration={1000}
                        triggerOnce
                        fraction={0.5}
                    >
                        <Link href={'/pages/product/Product-all'}>
                            <Button button={button} />
                        </Link>
                    </Fade>
                </div>
            </div>
        </ClientOnly>
    );
}
