'use client';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { sendMessage } from '../api/sendMessage';
import Image from 'next/image';
import Link from 'next/link';
import Map from '../../Assets/Map.png';
import './style.css';

interface IFormInput {
    name: string;
    phone: string;
    message: string;
    pravicy: boolean;
}

export default function Contacts() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IFormInput>();

    const onSubmit = async ({
        name,
        phone,
        message,
    }: IFormInput): Promise<void> => {
        setIsLoading(true);
        try {
            const mess: string = `Имя: ${name}\n
            Телефон: ${phone}\n
            Сообщение: ${message}`;
            await sendMessage(mess);
            setIsSubmitted(true);
            reset();
        } catch (e) {
            console.error('Ошибка отправки сообщения:', e as string);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className="contact">
                <div className="contact-blocks">
                    <h1 className="titles contact-title">Контакты</h1>
                    <p className="subtitles">
                        Мы сделаем всё возможное, чтобы помочь вам с вашим
                        вопросом
                    </p>
                </div>
                <div className="contact-blocks" id="form">
                    <div className="contact-feedback">
                        <h2 className="contact-subtitle">Оставьте заявку</h2>
                        <p className="contact-text">
                            Вы можете связаться с нами любым удобным способом.
                            Наша служба поддержки клиентов доступна с
                            понедельника по пятницам с 9:00 до 18:00.
                        </p>
                        {isSubmitted ? (
                            <div className="success-message">
                                <h2>Сообщение успешно отправлено! ✅</h2>
                                <p>Мы ответим вам в ближайшее время.</p>
                                <button
                                    type="button"
                                    onClick={() => setIsSubmitted(false)}
                                    className="submit-button"
                                >
                                    Отправить новое сообщение
                                </button>
                            </div>
                        ) : (
                            <form
                                className="contact-form"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <div className="form-group">
                                    <label htmlFor="name">Имя:</label>
                                    <input
                                        id="name"
                                        type="text"
                                        {...register('name', {
                                            required: 'Имя обязательно',
                                        })}
                                    />
                                    {errors.name && (
                                        <p className="error-message">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="phone">Телефон:</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        {...register('phone', {
                                            required: 'Телефон обязателен',
                                            pattern: {
                                                value: /^\d{3}-\d{3}-\d{4}$|^\d{11}$/,
                                                message:
                                                    'Неправильный формат телефона',
                                            },
                                        })}
                                    />
                                    {errors.phone && (
                                        <p className="error-message">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Сообщение:</label>
                                    <textarea
                                        id="message"
                                        {...register('message', {
                                            required: 'Сообщение обязательно',
                                        })}
                                    />
                                    {errors.message && (
                                        <p className="error-message">
                                            {errors.message.message}
                                        </p>
                                    )}
                                </div>

                                <div className="form-group pravicy-group">
                                    <input
                                        id="pravicy"
                                        type="checkbox"
                                        {...register('pravicy', {
                                            required: 'Согласие обязательно',
                                        })}
                                    />
                                    <label
                                        htmlFor="pravicy"
                                        className="pravicy-text"
                                    >
                                        Нажимая кнопку Отправить, я соглашаю с{' '}
                                        {''}
                                        <Link
                                            className="pravicy-link"
                                            href="/pages/privacy"
                                        >
                                            политикой конфиденциальности
                                        </Link>
                                        {''} и даю согласие на обработку моих
                                        персональных данных
                                    </label>
                                </div>
                                {errors.pravicy && (
                                    <p className="error-message">
                                        {errors.pravicy.message}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    className="submit-button"
                                    disabled={isLoading}
                                >
                                    {isLoading ? 'Отправка...' : 'Отправить'}
                                </button>
                            </form>
                        )}
                    </div>
                    <div className="contact-img">
                        <Image
                            src={Map}
                            className="contact-map"
                            alt="map"
                            loading="lazy"
                        />
                        <div className="contact-info">
                            <div className="contact-phone">
                                <a href="tel:+7-962-759-50-56">
                                    <span className="contact-phone">
                                        +7-962-759-50-56
                                    </span>
                                </a>
                            </div>
                            <div className="contact-phone">
                                <a href="tel:+7-962-759-50-46">
                                    <span className="contact-phone">
                                        +7-962-759-50-46
                                    </span>
                                </a>
                            </div>
                            <div className="contact-email">
                                <a href="mailto:vkz134@yandex.ru">
                                    <span className="contact-email">
                                        vkz134@yandex.ru
                                    </span>
                                </a>
                            </div>
                            <div className="contact-adress">
                                г. Волгоград, ш. Авиаторов, д. 16
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
