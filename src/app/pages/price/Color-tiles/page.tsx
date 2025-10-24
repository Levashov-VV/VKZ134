import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import ColorTile1 from '../../../Assets/main/Prod/Color-tiles/Color1.jpg';
import ColorTile2 from '../../../Assets/main/Prod/Color-tiles/Color-Tile2.png';
import ColorTile3 from '../../../Assets/main/Prod/Color-tiles/Color-Tile3.png';
// import ColorTile4 from '../../../Assets/main/Prod/Color-tiles/Color-Tile4.jpg';
// import ColorTile5 from '../../../Assets/main/Prod/Color-tiles/Color-Tile5.jpg';
// import ColorTile6 from '../../../Assets/main/Prod/Color-tiles/Color-Tile6.jpg';
// import ColorTile7 from '../../../Assets/main/Prod/Color-tiles/Color-Tile7.jpg';
// import ColorTile8 from '../../../Assets/main/Prod/Color-tiles/Color-Tile8.jpg';
// import ColorTile9 from '../../../Assets/main/Prod/Color-tiles/Color-Tile9.jpg';
// import ColorTile10 from '../../../Assets/main/Prod/Color-tiles/Color-Tile10.jpg';
// import ColorTile11 from '../../../Assets/main/Prod/Color-tiles/Color-Tile11.jpg';
// import ColorTile12 from '../../../Assets/main/Prod/Color-tiles/Color-Tile12.jpg';
// import ColorTile13 from '../../../Assets/main/Prod/Color-tiles/Color-Tile13.jpg';
// import ColorTile14 from '../../../Assets/main/Prod/Color-tiles/Color-Tile14.jpg';
// import ColorTile15 from '../../../Assets/main/Prod/Color-tiles/Color-Tile15.jpg';
// import ColorTile16 from '../../../Assets/main/Prod/Color-tiles/Color-Tile16.jpg';
// import ColorTile17 from '../../../Assets/main/Prod/Color-tiles/Color-Tile17.jpg';
// import ColorTile18 from '../../../Assets/main/Prod/Color-tiles/Color-Tile18.jpg';
// import ColorTile19 from '../../../Assets/main/Prod/Color-tiles/Color-Tile19.jpg';
// import ColorTile20 from '../../../Assets/main/Prod/Color-tiles/Color-Tile20.jpg';
// import ColorTile21 from '../../../Assets/main/Prod/Color-tiles/Color-Tile21.jpg';

import '../style.css';
import Button from '@/app/components/Main/Buttons/Button';
import Link from 'next/link';

export default function ColorTiles() {
    const button = [
        {
            name: 'Заказать',
            href: '../../../pages/contacts#form',
        },
    ];
    const listImg = [
        ColorTile1,
        ColorTile2,
        ColorTile3,
        
    ];
    const listText = [
        {
            title: 'Долговечность и устойчивость',
            text: 'Цветные гранитные памятники отличаются высокой долговечностью и способны сохранять свою форму и цвет на протяжении веков. Они не подвержены деформации и устойчивы к воздействию неблагоприятных погодных условий, таких как дожди, ветры и температурные колебания.',
        },
        {
            title: 'Эстетическая привлекательность',
            text: 'Разнообразие оттенков и текстур позволяет создавать уникальные мемориальные комплексы. Цветные памятники могут быть выполнены в различных стилях и сочетаниях, что делает их более выразительными и индивидуальными. Цвета могут символизировать разные аспекты жизни усопшего: например, светлые оттенки часто ассоциируются с открытой душой, тогда как темные — с утратой.',
        },
        {
            title: 'Простота ухода',
            text: 'Уход за цветными памятниками не требует значительных усилий. Достаточно проводить влажную уборку 1-2 раза в год для удаления пыли и мусора. Это делает их практичным выбором для семей, желающих сохранить памятник в хорошем состоянии.',
        },
        {
            title: 'Возможность персонализации',
            text: 'Цветные памятники позволяют добавлять индивидуальные элементы, такие как портреты или изображения, раскрашенные в яркие цвета. Это придаёт памятнику уникальность и помогает отразить личность усопшего.',
        },
        {
            title: 'Символизм',
            text: 'Цвета могут нести глубокий символический смысл. Например, цветочные мотивы часто используются для женских захоронений, подчеркивая нежность и красоту покойной. Несмотря на некоторые недостатки, такие как высокая стоимость и трудности с транспортировкой из-за веса материала, преимущества цветных памятников делают их привлекательным выбором для многих семей.',
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Цветные памятники</h1>
                <p className="subtitles">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text"> Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Цветные гранитные памятники становятся все более
                        популярными благодаря своему эстетическому разнообразию
                        и долговечности. Они могут быть выполнены в различных
                        оттенках и текстурах, что позволяет создать уникальные и
                        запоминающиеся мемориалы.
                    </p>
                    <ul className="description-list">
                        {listText.map((item, index) => (
                            <li key={index}>
                                <h3 className="title-list">{item.title}</h3>
                                <p className="subtitle-list">{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h3 className="title-text">Примеры работ</h3>
                </div>
                <div className="description-images">
                    {listImg.map((item, index) => (
                        <div className="description-img" key={index}>
                            <Image
                                className="standartTiles-img"
                                src={item}
                                alt={`Tile${index + 1}`}
                                loading="lazy"
                            />
                            <Link href={'../../../pages/contacts#form'}>
                                <Button button={button} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="standartTiles-block">
                <FeedBack />
            </div>
        </div>
    );
}
