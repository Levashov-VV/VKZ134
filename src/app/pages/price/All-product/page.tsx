import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Card from './Cards/Cards';
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
import ClientOnly from '../../../components/Main/Hidrataion/ClientOnly';
import work from '../../../Assets/Our-result/Block-result5.jpg';
import Fin from '../../../Assets/main/Prod/Fin-Block/FinGranit1.jpg';
import kitchen from '../../../Assets/main/Prod/Kitchen-granit/kitchen2.jpg';
import './style.css';

export default function AllProduct() {
    const ProductText = [
        {
            title: 'Наши работы',
            img: work,
            href: '../../../pages/price/Our-result',
        },
        {
            title: 'Стандартные памятники',
            img: gabro,
            href: '../../../pages/price/Standart-tiles',
        },
        {
            title: 'Фигурные памятники из гранита',
            img: figured,
            href: '../../../pages/price/Figure-tiles',
        },
        {
            title: 'Памятники из цветных гранитов',
            img: colorTile,
            href: '../../../pages/price/Color-tiles',
        },
        {
            title: 'Надгробные плиты',
            img: tombstones,
            href: '../../../pages/price/Tombstones',
        },
        {
            title: 'Гранитный распил оптом',
            img: graniteCut,
            href: '../../../pages/price/Granit-cut',
        },
        {
            title: 'Гранитные корки памятники скала',
            img: rock,
            href: '../../../pages/price/Gabro',
        },
        {
            title: 'Гранитные блоки',
            img: block,
            href: '../../../pages/price/Block-granit',
        },
        {
            title: 'Гранитная плитка',
            img: polishedTile,
            href: '../../../pages/price/Granit-tiles',
        },
        {
            title: 'Гранитная брусчатка',
            img: pavingStones,
            href: '../../../pages/price/Paving-slabs',
        },
        {
            title: 'Пошаговые плиты',
            img: stepTile,
            href: '../../../pages/price/Step-tiles',
        },
        {
            title: 'Гранитные бордюры',
            img: border,
            href: '../../../pages/price/Border-granit',
        },
        {
            title: 'Слэбы',
            img: slabs,
            href: '../../../pages/price/Slabs',
        },
        {
            title: 'Финский гранит',
            img: Fin,
            href: '../../../pages/price/Fin-granit',
        },
        {
            title: 'Кухонный гранит',
            img: kitchen,
            href: '../../../pages/price/Kitchen-granit',
        },
    ];
    return (
        <ClientOnly>
            <div className="productAlls">
                <div className="productAlls-blocks">
                    <h1 className="title-productAlls">Наша продукция</h1>
                    <p className="subtitle-productAlls">
                        Мы предлагаем вам большой ассортимент продукции из
                        гранита
                    </p>
                </div>
                <div className="productAlls-blocks">
                    <h2 className="productAlls-title">
                        Продукция, которую мы предлагаем
                    </h2>
                </div>
                <div className="productAlls-blocks">
                    {ProductText.map((item) => {
                        return <Card key={item.title} {...item} />;
                    })}
                </div>
                <div className="productAlls-blocks">
                    <FeedBack />
                </div>
            </div>
        </ClientOnly>
    );
}
