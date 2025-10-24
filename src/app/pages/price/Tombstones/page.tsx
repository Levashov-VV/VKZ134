import Image from 'next/image';
import FeedBack from '@/app/components/Main/FeedBack/FeedBack';
import Block2 from '../../../Assets/main/Prod/TombStones/TombStones1.jpg';
import Block1 from '../../../Assets/main/Prod/TombStones/TombStones2.jpg';
import Block3 from '../../../Assets/main/Prod/TombStones/TombStones3.jpg';
import '../style.css';
import Link from 'next/link';
import Button from '@/app/components/Main/Buttons/Button';

export default function TombStones() {
    const button = [
        {
            name: 'Заказать',
            href: '../../../pages/contacts#form',
        },
    ];
    const listText = [
        {
            title: 'Эстетический вид',
            text: 'надгробные плиты придают могилам торжественный и аккуратный вид, позволяя устанавливать различные аксессуары (вазы, подсвечники).',
        },
        {
            title: 'Легкость ухода',
            text: 'за такими плитами легко ухаживать. Они не требуют сложных процедур очистки.',
        },
    ];

    return (
        <div className="standartTiles">
            <div className="standartTiles-block">
                <h1 className="titles">Надгробные плиты</h1>
                <p className="subtitles">Описание, заготовки и примеры</p>
            </div>
            <div className="standartTiles-block">
                <div className="description">
                    <h2 className="title-text"> Описание</h2>
                </div>
                <div className="description">
                    <p className="description-text">
                        Надгробные плиты используются для оформления могил и
                        увековечения памяти усопших. Они могут быть изготовлены
                        из различных материалов, таких как гранит, мрамор или
                        бетон. Каждый материал имеет свои преимущества и
                        недостатки.
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
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={Block1}
                            alt="Tile1"
                            loading="lazy"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={Block2}
                            alt="Tile2"
                            loading="lazy"
                        />
                    </div>
                    <div className="description-img">
                        <Image
                            className="standartTiles-img"
                            src={Block3}
                            alt="Tile3"
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
            <div className="button-imgs">
                <Link href={'../../../pages/contacts#form'}>
                    <Button button={button} />
                </Link>
            </div>
            <div className="standartTiles-block">
                <FeedBack />
            </div>
        </div>
    );
}
