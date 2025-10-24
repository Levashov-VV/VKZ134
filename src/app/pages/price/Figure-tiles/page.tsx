import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import FigureTile1 from '../../../Assets/main/Prod/Figure-tiles/Figure1.jpg';
import FigureTile2 from '../../../Assets/main/Prod/Figure-tiles/Figure2.jpg';
import FigureTile3 from '../../../Assets/main/Prod/Figure-tiles/Figure3.jpg';
import FigureTile4 from '../../../Assets/main/Prod/Figure-tiles/Figure4.jpg';
import FigureTile5 from '../../../Assets/main/Prod/Figure-tiles/Figure5.jpg';
import FigureTile6 from '../../../Assets/main/Prod/Figure-tiles/Figure6.jpg';
import FigureTile7 from '../../../Assets/main/Prod/Figure-tiles/Figure7.jpg';
import FigureTile8 from '../../../Assets/main/Prod/Figure-tiles/Figure8.jpg';
import FigureTile9 from '../../../Assets/main/Prod/Figure-tiles/Figure9.jpg';
import FigureTile10 from '../../../Assets/main/Prod/Figure-tiles/Figure10.jpg';
import FigureTile11 from '../../../Assets/main/Prod/Figure-tiles/Figure11.jpg';
import FigureTile12 from '../../../Assets/main/Prod/Figure-tiles/Figure12.jpg';
import FigureTile13 from '../../../Assets/main/Prod/Figure-tiles/Figure13.jpg';
import FigureTile14 from '../../../Assets/main/Prod/Figure-tiles/Figure14.jpg';
import FigureTile15 from '../../../Assets/main/Prod/Figure-tiles/Figure15.jpg';
import FigureTile16 from '../../../Assets/main/Prod/Figure-tiles/Figure16.jpg';
import FigureTile17 from '../../../Assets/main/Prod/Figure-tiles/Figure17.jpg';
import FigureTile18 from '../../../Assets/main/Prod/Figure-tiles/Figure18.jpg';
import FigureTile19 from '../../../Assets/main/Prod/Figure-tiles/Figure19.jpg';
import FigureTile20 from '../../../Assets/main/Prod/Figure-tiles/Figure20.jpg';
import FigureTile21 from '../../../Assets/main/Prod/Figure-tiles/Figure21.jpg';
import '../style.css';
import Button from '@/app/components/Main/Buttons/Button';
import Link from 'next/link';

export default function FigureTiles() {
    const button = [
        {
            name: 'Заказать',
            href: '../../../pages/contacts#form',
        },
    ];

    const listImg = [
        FigureTile1,
        FigureTile2,
        FigureTile3,
        FigureTile4,
        FigureTile5,
        FigureTile6,
        FigureTile7,
        FigureTile8,
        FigureTile9,
        FigureTile10,
        FigureTile11,
        FigureTile12,
        FigureTile13,
        FigureTile14,
        FigureTile15,
        FigureTile16,
        FigureTile17,
        FigureTile18,
        FigureTile19,
        FigureTile20,
        FigureTile21,
    ];
    const listText = [
        {
            title: 'Индивидуальность',
            text: 'Фигурные памятники отражают личные особенности и интересы умершего, что делает их более значимыми для родственников и друзей. Каждый памятник может быть уникальным произведением искусства, созданным по индивидуальному заказу.',
        },
        {
            title: 'Эстетическая привлекательность',
            text: 'Благодаря разнообразию форм и художественным элементам, фигурные памятники выглядят более привлекательно и могут стать настоящим украшением кладбища. Их дизайн часто включает сложные детали и резьбу, что придает им уникальность и выразительность.',
        },
        {
            title: 'Долговечность',
            text: 'Обычно фигурные памятники изготавливаются из гранита или мрамора, что гарантирует их долговечность и устойчивость к внешним воздействиям. Гранит, в частности, известен своей прочностью и стойкостью к атмосферным условиям.',
        },
        {
            title: 'Возможность персонализации',
            text: 'Фигурные памятники могут передавать глубокие чувства скорби и памяти, создавая атмосферу уважения к усопшему. Их художественное исполнение часто вызывает сильные эмоции у посетителей могилы.',
        },
        {
            title: 'Эмоциональная глубина',
            text: 'Многие фигурные памятники содержат символику, которая отражает жизненные ценности или верования усопшего. Например, памятники в виде ангелов могут символизировать защиту и вечную жизнь, а деревья — продолжение жизни.',
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Фигурные памятники</h1>
                <p className="subtitles">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text">Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Фигурные памятники представляют собой уникальные и
                        художественно оформленные надгробия, которые отличаются
                        от традиционных прямоугольных стел своей сложной формой
                        и выразительным дизайном. Они могут принимать различные
                        формы, включая сердца, ангелов, деревья и другие
                        символические изображения, что позволяет
                        персонализировать памятник в соответствии с характером и
                        предпочтениями усопшего.
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
