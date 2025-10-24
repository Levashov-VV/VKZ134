import Image from 'next/image';
import Link from 'next/link';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Tile1 from '../../../Assets/main/Prod/Standart-tiles/Tile1.jpg';
import Tile2 from '../../../Assets/main/Prod/Standart-tiles/Tile2.jpg';
import Tile3 from '../../../Assets/main/Prod/Standart-tiles/Tile3.jpg';
import Tile4 from '../../../Assets/main/Prod/Standart-tiles/Tile4.jpg';
import Tile5 from '../../../Assets/main/Prod/Standart-tiles/Tile5.jpg';
import Tile6 from '../../../Assets/main/Prod/Standart-tiles/Tile6.jpg';
import Tile7 from '../../../Assets/main/Prod/Standart-tiles/Tile7.jpg';
import Tile8 from '../../../Assets/main/Prod/Standart-tiles/Tile8.jpg';
import Tile9 from '../../../Assets/main/Prod/Standart-tiles/Tile9.jpg';
import Tile10 from '../../../Assets/main/Prod/Standart-tiles/Tile10.jpg';
import Tile11 from '../../../Assets/main/Prod/Standart-tiles/Tile21.jpg';
import Tile12 from '../../../Assets/main/Prod/Standart-tiles/Tile12.jpg';
import Tile13 from '../../../Assets/main/Prod/Standart-tiles/Tile13.jpg';
import Tile14 from '../../../Assets/main/Prod/Standart-tiles/Tile14.jpg';
import Tile15 from '../../../Assets/main/Prod/Standart-tiles/Tile15.jpg';
import Tile16 from '../../../Assets/main/Prod/Standart-tiles/Tile17.jpg';
import Tile17 from '../../../Assets/main/Prod/Standart-tiles/Tile20.jpg';
import Tile18 from '../../../Assets/main/Prod/Standart-tiles/Tile11.jpg';



import Button from '@/app/components/Main/Buttons/Button';
import '../style.css';

export default function StandartTiles() {
    const button = [
        {
            name: 'Заказать',
            href: '../../../pages/contacts#form',
        },
    ];
    const listImg = [Tile1, Tile2, Tile3, Tile4, Tile5, Tile6, Tile7, Tile8, Tile9, Tile10, Tile11, Tile12, Tile13, Tile14, Tile15, Tile16, Tile17, Tile18 ];
    const listText = [
        {
            title: 'Состав и свойства гранита',
            list: [
                {
                    subtitle: 'Материал',
                    text: 'гранит состоит в основном из полевого шпата, кварца и слюды, что придает ему высокую прочность и устойчивость к внешним воздействиям.',
                },
                {
                    subtitle: 'Износостойкость',
                    text: 'гранитные памятники обладают высокой износостойкостью и могут служить столетиями без значительных изменений.',
                },
            ],
        },
        {
            title: 'Типы и размеры стандартных памятников',
            list: [
                {
                    subtitle: 'Форма',
                    text: 'стандартные гранитные памятники могут быть как вертикальными, так и горизонтальными. Они имеют различные формы фасовки памятников: прямые для отечественного гранита и профильные для импортного.',
                },
                {
                    subtitle: 'Размеры',
                    text: 'стандартные размеры памятников начинаются от 400x600x80 мм, с высотой до 1200 мм и толщиной от 5 до 8 см.',
                },
                {
                    subtitle: 'Варианты оформления',
                    text: 'памятники могут быть прямоугольными, фигурными или резными, что позволяет выбрать подходящий стиль для оформления могилы.',
                },
            ],
        },
        {
            title: 'Процесс изготовления',
            list: [
                {
                    subtitle: 'Обработка',
                    text: 'изготовление начинается с обработки гранитного блока, который пилится на плиты, затем вырезаются детали памятника. Полировка производится как машинным, так и ручным способом',
                },
                {
                    subtitle: 'Гравировка',
                    text: ' гравировка на памятниках выполняется механическим способом, что обеспечивает высокую скорость и точность работы.',
                },
            ],
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Стандартные памятники</h1>
                <p className="subtitles">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text"> Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Гранитные памятники являются популярным выбором для
                        оформления могил благодаря своей прочности и
                        долговечности. Вот основные характеристики и
                        преимущества стандартных гранитных памятников:
                    </p>
                    <ul className="description-list">
                        {listText.map((item, index) => (
                            <li key={index}>
                                <h3 className="title-list">{item.title}</h3>
                                <ul className="description-sublist">
                                    {item.list.map((subItem, subIndex) => (
                                        <li
                                            key={subIndex}
                                            className="description-list-item"
                                        >
                                            <p className="subtitle-list">
                                                {subItem.subtitle}:{' '}
                                                {subItem.text}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
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
