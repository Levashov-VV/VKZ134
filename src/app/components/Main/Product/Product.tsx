import ProductCard from './Product-cards/Product-cards';
import gabro from '../../../Assets/main/Product/Gabro.jpg';
import figured from '../../../Assets/main/Product/Figured-monuments.png';
import colorTile from '../../../Assets/main/Product/Color-Granite.png';
import tombstones from '../../../Assets/main/Product/Tombstones.png';
import graniteCut from '../../../Assets/main/Product/Granit-cut.png';
import rock from '../../../Assets/main/Product/Rock.png';
import block from '../../../Assets/main/Product/block.png';
import polishedTile from '../../../Assets/main/Product/polished-tiles.jpg';
import pavingStones from '../../../Assets/main/Product/paving-stones.jpg';
import stepTile from '../../../Assets/main/Product/step-tile.jpg';
import border from '../../../Assets/main/Product/border.jpg';
import slabs from '../../../Assets/main/Product/paving-slabs.jpg';
import { Fade } from 'react-awesome-reveal';
import ClientOnly from '../Hidrataion/ClientOnly';
import './style.css';
import Link from 'next/link';
import Button from '../Buttons/Button';
export default function Product() {
    const button = [
        {
            name: 'Посмотреть все продукты',
            href: '../../../pages/price/All-product',
        },
    ];

    const ProductText = [
        {
            name: 'Стелы',
            title: 'Памятники габбро-диабаз оптом',
            img: gabro,
            href: '../../../pages/price/Standart-tiles',
        },
        {
            name: 'Производство ',
            title: 'Фигурные памятники из гранита',
            img: figured,
            href: '../../../pages/price/Figure-tiles',
        },
        {
            name: 'Заготовки',
            title: 'Памятники из цветных гранитов',
            img: colorTile,
            href: '../../../pages/price/Color-tiles',
        },
        {
            name: 'Плиты для памятников',
            title: 'Надгробные плиты',
            img: tombstones,
            href: '../../../pages/price/Tombstones',
        },
        {
            name: 'Распил',
            title: 'Гранитный распил оптом',
            img: graniteCut,
            href: '../../../pages/price/Granit-cut',
        },
        {
            name: 'Корки',
            title: 'Гранитные корки памятники скала',
            img: rock,
            href: '../../../pages/price/Gabro',
        },
        {
            name: 'Блоки',
            title: 'Гранитные блоки',
            img: block,
            href: '../../../pages/price/Block-granit',
        },
        {
            name: 'Плитка',
            title: 'Гранитная плитка полированная и термообработанная',
            img: polishedTile,
            href: '../../../pages/price/Granit-tiles',
        },
        {
            name: 'Брусчатка',
            title: 'Гранитная брусчатка колотоая пиленая',
            img: pavingStones,
            href: '../../../pages/price/Paving-slabs',
        },
        {
            name: 'Плиты дорожек',
            title: 'Пошаговые плиты',
            img: stepTile,
            href: '../../../pages/price/Step-tiles',
        },
        {
            name: 'Обустройство тротуаров',
            title: 'Гранитные бордюры',
            img: border,
            href: '../../../pages/price/Border-granit',
        },
        {
            name: 'Прямоугольные слэбы',
            title: 'Слэбы',
            img: slabs,
            href: '../../../pages/price/Slabs',
        },
    ];
    return (
        <ClientOnly>
            <div className="product fadeInUp wow" id="product">
                <div className="product-block ">
                    <Fade
                        delay={200}
                        duration={1000}
                        triggerOnce
                        fraction={0.5}
                    >
                        <h2 className="title">Продукция</h2>
                    </Fade>
                </div>
                <div className="product-block">
                    <Fade
                        delay={200}
                        duration={1000}
                        triggerOnce
                        fraction={0.5}
                    >
                        {ProductText.map((item) => (
                            <Link href={item.href} key={item.name}>
                                <ProductCard
                                    name={item.name}
                                    title={item.title}
                                    img={item.img}
                                />
                            </Link>
                        ))}
                    </Fade>
                </div>
                <div className="product-block">
                    <Fade
                        delay={200}
                        duration={1000}
                        triggerOnce
                        fraction={0.5}
                    >
                        <div className="button-main">
                            <Link href={'/pages/price/All-product'}>
                                <Button button={button} />
                            </Link>
                        </div>
                    </Fade>
                </div>
            </div>
        </ClientOnly>
    );
}
