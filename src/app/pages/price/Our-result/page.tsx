import Image from 'next/image';
import Icons from '../../../components/Main/FeedBack/Icons/Icons';
import ClientOnly from '@/app/components/Main/Hidrataion/ClientOnly';
import ResultImage1 from '../../../Assets/Our-result/Block-result1.png';
import ResultImage2 from '../../../Assets/Our-result/Block-result2.jpg';
import ResultImage3 from '../../../Assets/Our-result/Block-result3.jpg';
import ResultImage4 from '../../../Assets/Our-result/Block-result4.jpg';
import ResultImage5 from '../../../Assets/Our-result/Block-result5.jpg';
import ResultImage6 from '../../../Assets/Our-result/Block-result6.jpg';
import ResultImage7 from '../../../Assets/Our-result/Block-result7.jpg';
import ResultImage8 from '../../../Assets/Our-result/Block-result8.jpg';
import ResultImage9 from '../../../Assets/Our-result/Block-result9.jpg';
import ResultImage10 from '../../../Assets/Our-result/Block-result10.jpg';
import ResultImage11 from '../../../Assets/Our-result/Block-result11.png';
import ResultImage12 from '../../../Assets/Our-result/Block-result12.png';
import './style.css';

export default function OurResult() {
    const listResult = [
        {
            title: 'Широкий выбор материалов:',
            subtitle:
                'от классического гранита и мрамора до современных композитов, устойчивых к перепадам температур и влажности.',
        },
        {
            title: 'Индивидуальный дизайн:',
            subtitle:
                'от строгих классических форм до авангардных решений с гравировкой, барельефами или художественными элементами.',
        },
        {
            title: 'Технологии точности:',
            subtitle:
                'использование лазерной гравировки, 3D-моделирования и ручной обработки для безупречного результата.',
        },
    ];

    const listImg = [
        ResultImage1,
        ResultImage2,
        ResultImage3,
        ResultImage4,
        ResultImage5,
        ResultImage6,
        ResultImage7,
        ResultImage8,
        ResultImage9,
        ResultImage10,
        ResultImage11,
        ResultImage12,
    ];
    return (
        <div>
            <ClientOnly>
                <div className="result">
                    <div className="result-blocks">
                        <h1 className="title-result">Наши работы</h1>
                        <p className="subtitle-result">
                            Мы создаём памятники с индивидуальным подходом для
                            каждого клиента
                        </p>
                    </div>
                    <div className="result-blocks">
                        <div className="result-title">
                            Наши работы: Искусство памяти
                        </div>
                    </div>
                    <div className="result-blocks">
                        <div className="result-subtitle">
                            Наша компания, известная высококачественными
                            памятниками в Волгограде. Каждый памятник отражает не только наше мастерство, но и
                            глубокое понимание запросов современных горожан.
                        </div>
                    </div>
                    <div className="result-blocks">
                        <div className="result-list">
                            <h2 className="list-title">
                                Особенности памятников
                            </h2>
                            <ul className="list">
                                {listResult.map((item) => (
                                    <li key={item.title} className="list-item">
                                        <h3 className="list-subtitle">
                                            {item.title}
                                        </h3>
                                        <div className="list-subtitles">
                                            {item.subtitle}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="result-blocks">
                        <div className="result-list">
                            <h2 className="list-title">
                                Для тех, кто ценит вечность
                            </h2>
                            <h3 className="list-subtitle">
                                Мы понимаем, что памятник — это не просто
                                камень, а символ любви и уважения. Поэтому в
                                каждом проекте сочетаем профессиональный подход
                                с вниманием к деталям.
                            </h3>
                        </div>
                    </div>
                    <div className="result-blocks">
                        <div className="result-title">Примеры работ</div>
                        <div className="description-images">
                            {listImg.map((img, id) => (
                                <div key={id} className="description-img">
                                    <Image
                                        className="result-img"
                                        src={img}
                                        alt={`Result img ${id + 1}`}
                                        loading="lazy"
                                        placeholder="blur"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="result-blocks">
                        <div className="result-price">
                            Для получения информации о ценах и сроках доставки
                            обратитесь к нам
                        </div>
                        <Icons />
                    </div>
                </div>
            </ClientOnly>
        </div>
    );
}
