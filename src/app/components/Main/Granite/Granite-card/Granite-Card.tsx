'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { StaticImageData } from 'next/image';

interface GraniteCardProps {
    title: string;
    subtitle: string;
    img?: string | StaticImageData;
    href: string;
}

const GraniteCard = ({ title, subtitle, img, href }: GraniteCardProps) => {
    return (
        <StyledWrapper>
            <div className="cards">
                <Link href={href}>
                    <figure className="card">
                        {img && (
                            <Image
                                src={img}
                                alt={title}
                                className="cards"
                                loading="lazy"
                            />
                        )}
                        <figcaption className="card_title">
                            <p className="card_subtitle">{subtitle}</p>
                            <p className="cards_title">{title}</p>
                        </figcaption>
                    </figure>
                </Link>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .cards {
        width: 275px;
        height: 350px;
        perspective: 500px;
    }
    .card {
        width: 275px;
        height: 350px;
        background: #16161d;
        border-radius: 4px;
        position: relative;
        transform-style: preserve-3d;
        will-change: transform;
        transition: transform 0.5s;
    }

    .card:hover {
        transform: translateZ(10px) translateX(20px) rotateX(20deg)
            rotateY(20deg);
    }

    .card_title {
        color: #fff;
        position: absolute;
        top: 70%;
        left: 5%;
        display: flex;
        justify-content: center;
        align-items: start;
        flex-direction: column;
        transform: translateY(-50%);
        transition: transform 0.5s;
        font: 600 2rem 'Manrope', sans-serif;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
    }

    .card_subtitle {
        color: #fff;
        opacity: 0.8;
        font: 600 0.9rem 'Manrope', sans-serif;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
        text-transform: uppercase;
    }

    .card:hover .card_title {
        transform: translateZ(50px);
    }

    @media (max-width: 1000px) and (min-width: 768px) {
        .cards_title {
            font-size: 1.8rem;
        }

        .card_title {
            top: 75%;
        }

        .card_subtitle {
            font-size: 0.8rem;
        }
    }

    @media (max-width: 480px) and (min-width: 400px) {
        .card {
            width: 42vw;
            height: 30vh;
        }

        .cards {
            width: 45vw;
            height: 30vh;
        }

        .cards_title {
            font-size: 1.5rem;
        }

        .card_subtitle {
            font-size: 0.7rem;
        }

        .card_title {
            top: 70%;
        }
    }

    @media (max-width: 400px) and (min-width: 380px) {
        .card {
            width: 42vw;
            height: 30vh;
        }

        .cards {
            width: 42vw;
            height: 30vh;
        }

        .cards_title {
            font-size: 1.4rem;
        }

        .card_subtitle {
            font-size: 0.7rem;
        }

        .card_title {
            top: 70%;
        }
    }

    @media (max-width: 380px) and (min-width: 0px) {
        .card {
            width: 80vw;
            height: 50vh;
        }

        .cards {
            width: 80vw;
            height: 50vh;
        }

        .cards_title {
            font-size: 2rem;
        }

        .card_subtitle {
            font-size: 1rem;
        }

        .card_title {
            top: 80%;
        }
    }
`;

export default GraniteCard;
