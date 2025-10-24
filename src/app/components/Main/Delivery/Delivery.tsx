import DeliveryCard from './Cards/Cards-Delivery';
import ClientOnly from '../Hidrataion/ClientOnly';
import Button from '../Buttons/Button';
import './style.css';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

export default function Delivery() {
    const button = [{ name: 'Подробнее о доставке', href: '/pages/delivery' }];

    const deliveryText = [
        {
            name: 'Своевременность',
            description:
                'Доставка осуществляется точно в срок, что позволяет клиентам планировать свои проекты без задержек.',
        },
        {
            name: 'Безопасность',
            description:
                'Продукция упаковывается с учетом всех стандартов безопасности, что минимизирует риск повреждений во время транспортировки.',
        },
        {
            name: 'Гибкость',
            description:
                'Компания предлагает различные варианты доставки — от стандартной до экспресс-доставки, что позволяет клиентам выбрать наиболее подходящий для них вариант.',
        },
    ];
    return (
        <ClientOnly>

        <div className="delivery ">
            <div className="delivery-block">
                <Fade delay={200} duration={1000} triggerOnce fraction={0.5}>
                    <h2 className="title">Доставка</h2>
                </Fade>
            </div>
            <div className="delivery-block">
                <Fade delay={200} duration={1000} triggerOnce fraction={0.5}>
                    <p className="del text">
                        В нашей компании мы ставим клиента в центр всего, что
                        делаем. Наша цель — не просто выполнить заказ, а
                        превзойти ваши ожидания. Мы активно слушаем наших
                        клиентов, учитываем их отзывы и постоянно улучшаем наши
                        услуги.
                    </p>
                </Fade>
            </div>
            <div className="delivery-block del-cards del-text">
                <Fade delay={200} duration={1000} triggerOnce fraction={0.5}>
                    {deliveryText.map((item, index) => (
                        <DeliveryCard
                        key={index}
                        name={item.name}
                        description={item.description}
                        />
                    ))}
                </Fade>
            </div>
            <div className="wholesale">
                <Fade delay={200} duration={1000} triggerOnce fraction={0.5}>
                <div className="wholesale-block">

                    <h2 className="title">Гранитные памятники оптом</h2>
                </div>
                <div className="wholesale-block">
                    <p className="del text ">
                        Стандартные и фигурные, все размеры и формы из черного,
                        серого и цветного гранита месторождений Карелии и
                        северо-западного региона России.
                    </p>
                    <p className="del text">
                        Продажа заготовок и готовых моделей оптом
                    </p>
                    <p className="del text">
                        Купить с доставкой по РФ любым видом транспорта.
                    </p>
                </div>
                </Fade>
            </div>
            <div className="delivery-block">
            <Fade delay={200} duration={1000} triggerOnce fraction={0.5}>
                <Link href={button[0].href}>
                    <Button button={button} />
                </Link>
            </Fade>
            </div>
        </div>
        </ClientOnly>
    );
}
