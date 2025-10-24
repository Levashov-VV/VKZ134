'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';

interface CardProps {
    title: string;
    img?: string | StaticImageData;
    href: string;
}
const Card = ({ title, img, href }: CardProps) => {
    return (
        <StyledWrapper>
            <Link href={href}>
                <div className="container">
                    <a className="hrefElement" href="#"></a>
                    <a className="hrefElement" href="#"></a>
                    <a className="hrefElement" href="#"></a>
                    <a className="hrefElement" href="#"></a>
                    <div className="card">
                        <div className="card-header">{title}</div>
                        {img && (
                            <Image
                                src={img}
                                alt={title}
                                className="cards"
                                loading="lazy"
                            />
                        )}
                    </div>
                </div>
            </Link>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .cards {
        width: 300px;
        height: 200px;
        perspective: 500px;
        border-radius: 0px;
    }
    .container .card {
        background-color: white;
        border-radius: 10px;

        position: relative;
        z-index: 0;
        transition: all 300ms ease-out;
        transform-origin: center center;
        width: 300px;
        height: 240px;
        box-shadow: 0px;
    }

    .card-header {
        padding: 10px;
        width: 300px;
        background-color: #000;
        color: white;
        font-family: 'Manrope';
        font-size: 24px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .container .card .border {
        transition: all 300ms ease-out;
        transform-origin: center center;
        position: absolute;
        top: 6px;
        left: 6px;
        width: calc(100% - 12px);
        height: calc(100% - 12px);
        border: 1px solid black;
        border-radius: 9px;
    }

    .container {
        perspective: 1000px;
        position: relative;
        width: 100%;
        max-width: 250px;
        height: 150px;
        border-radius: 0px;
    }
    .container a {
        opacity: 0;
        position: absolute;
        z-index: 1;
        width: 50%;
        height: 50%;
    }
    .container a:hover,
    .container a:focus {
        transform: translateZ(50px);
    }

    .container a:hover ~ .card .card-header,
    .container a:focus ~ .card .card-header {
        transform: translateZ(24px);
    }

    .container a:nth-child(1) {
        top: 0;
        left: 0;
    }
    .container a:nth-child(1):hover ~ .card,
    .container a:nth-child(1):focus ~ .card {
        transform: rotateX(10deg) rotateY(-10deg) translateZ(0);
        transform-origin: right bottom;
        box-shadow: 10px 20px;
    }
    .container a:nth-child(2) {
        top: 0;
        right: 0;
    }
    .container a:nth-child(2):hover ~ .card,
    .container a:nth-child(2):focus ~ .card {
        transform: rotateX(10deg) rotateY(10deg) translateZ(0);
        transform-origin: left bottom;
        box-shadow: -10px 20px;
    }
    .container a:nth-child(3) {
        bottom: 0;
        right: 0;
    }
    .container a:nth-child(3):hover ~ .card,
    .container a:nth-child(3):focus ~ .card {
        transform-origin: left top;
        transform: rotateX(-10deg) rotateY(10deg) translateZ(0);
        box-shadow: -10px -20px;
    }
    .container a:nth-child(4) {
        bottom: 0;
        left: 0;
    }
    .container a:nth-child(4):hover ~ .card,
    .container a:nth-child(4):focus ~ .card {
        transform-origin: right top;
        transform: rotateX(-10deg) rotateY(-10deg) translateZ(0);
        box-shadow: 10px -20px;
    }

    @media (max-width: 1408px) and (min-width: 1280px) {
        .container .card {
            width: 300px;
            height: 200px;
        }
        .container {
            width: 100%;
            max-width: 300px;
            height: 200px;
        }
        .cards {
            width: 300px;
            height: 200px;
            border-radius: 0px;
        }

        .card-header {
            width: 300px;
        }
    }

    @media (max-width 1140px) and (min-width: 1000px) {
        .container .card {
            width: 250px;
            height: 150px;
        }

        .cards {
            width: 250px;
            height: 150px;
            border-radius: 0px;
        }

        .card-header {
            width: 300px;
        }
    }

    @media (max-width: 480px) {
        .container .card {
            width: 85vw;
            height: 22vh;
        }

        .cards {
            width: 85vw;
            height: 22vh;
            border-radius: 0px;
        }

        .card-header {
            width: 85vw;
        }
    }
`;

export default Card;
