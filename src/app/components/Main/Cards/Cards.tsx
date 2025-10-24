'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import ClientOnly from '../Hidrataion/ClientOnly';

interface CardProps {
    quality: {
        name: string;
        description: string;
        img: string;
    };
}

const Card = ({ quality }: CardProps) => {
    return (
        <ClientOnly>
            <StyledWrapper>
                <div className="card">
                    <Image
                        src={quality.img}
                        alt={quality.name}
                        className="card__img"
                        loading="lazy"
                    />
                    <h1>{quality.name}</h1>
                    <p>{quality.description}</p>
                </div>
            </StyledWrapper>
        </ClientOnly>
    );
};

const StyledWrapper = styled.div`
    h1 {
        font-size: 24px;
        line-height: 32px;
        font-weight: 600;
    }

    p {
        font-size: 20px;
        line-height: 24px;
        font-weight: 400;
    }
    .card {
        box-sizing: border-box;
        width: 356.25px;
        height: 476.25px;
        background: #fff;
        border: 1px solid #474a51;
        box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
        border-radius: 17px;
        text-align: center;
        cursor: pointer;
        transition: all 0.5s;
        display: flex;
        align-items: center;
        justify-content: start;
        flex-direction: column;
        gap: 24px;
        user-select: none;
        font-family: 'Manrope';
        font-weight: 500;
        color: black;
    }

    .card:hover {
        border: 1px solid black;
        transform: scale(1.05);
    }

    .card__img {
        width: 150px;
        height: 150px;
    }
    @media (max-width: 1280px) and (min-width: 1140px) {
        h1 {
            font-size: 24px;
            line-height: 32px;
            font-weight: 600;
        }

        p {
            font-size: 20px;
            line-height: 24px;
            font-weight: 400;
            padding: 0 5px;
        }
        .card {
            width: 300px;
            height: 400px;
            row-gap: 8px;
        }
        .card__img {
            width: 100px;
            height: 100px;
        }
    }
    @media (max-width: 1140px) and (min-width: 1000px) {
        h1 {
            font-size: 22px;
            line-height: 20px;
        }

        p {
            font-size: 18px;
            line-height: 20px;
        }
        .card {
            width: 25vw;
            height: 30vh;
            row-gap: 12px;
        }
        .card__img {
            width: 100px;
            height: 100px;
        }
    }
    @media (max-width: 1000px) and (min-width: 768px) {
        h1 {
            font-size: 16px;
            line-height: 20px;
        }
        p {
            font-size: 14px;
            line-height: 20px;
        }
        .card {
            width: 28vw;
            height: 30vh;
        }
        .card__img {
            width: 80px;
            height: 80px;
        }
    }
    @media (max-width: 768px) and (min-width: 480px) {
        h1 {
            text-align: center;
            font-size: 14px;
            line-height: 20px;
        }
        p {
            display: none;
            font-size: 14px;
            line-height: 20px;
        }
        .card {
            padding: 0 20px;
            width: 170px;
            height: 200px;
            justify-content: center;
            gap: 10px;
        }
        .card__img {
            width: 80px;
            height: 80px;
        }
    }
    @media (max-width: 480px) and (min-width: 0px) {
        h1 {
            text-align: center;
            font-size: 16px;
            line-height: 20px;
        }
        p {
            display: none;
        }
        .card {
            padding: 0 20px;
            width: 150px;
            height: 180px;
            justify-content: center;
            row-gap: 5px;
        }
        .card__img {
            width: 70px;
            height: 70px;
        }
    }
`;

export default Card;
