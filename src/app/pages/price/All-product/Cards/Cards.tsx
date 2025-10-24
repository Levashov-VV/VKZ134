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
                <div className="containers">
                    <a className="hrefElement" href="#"></a>
                    <a className="hrefElement" href="#"></a>
                    <a className="hrefElement" href="#"></a>
                    <a className="hrefElement" href="#"></a>
                    <div className="carder">
                        <div className="carder-header">{title}</div>
                        {img && (
                            <Image
                                src={img}
                                alt={title}
                                className="carders"
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
    .carders {
        width: 400px;
        height: 300px;
        perspective: 500px;
        border-radius: 0px;
    }
    .containers .carder {
        background-color: white;
        border-radius: 10px;

        position: relative;
        z-index: 0;
        transition: all 300ms ease-out;
        transform-origin: center center;
        width: 400px;
        height: 340px;
        box-shadow: 0px;
    }

    .carder-header {
        padding: 10px;
        width: 400px;
        background-color: #000;
        color: white;
        font-family: 'Manrope';
        font-size: 24px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .containers .carder .border {
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

    .containers {
        perspective: 1000px;
        position: relative;
        width: 100%;
        max-width: 150px;
        height: 150px;
        border-radius: 0px;
    }
    .containers a {
        opacity: 0;
        position: absolute;
        z-index: 1;
        width: 50%;
        height: 50%;
    }
    .containers a:hover,
    .containers a:focus {
        transform: translateZ(50px);
    }

    .containers a:hover ~ .carder .carder-header,
    .containers a:focus ~ .carder .carder-header {
        transform: translateZ(24px);
    }

    .containers a:nth-child(1) {
        top: 0;
        left: 0;
    }
    .containers a:nth-child(1):hover ~ .carder,
    .containers a:nth-child(1):focus ~ .carder {
        transform: rotateX(10deg) rotateY(-10deg) translateZ(0);
        transform-origin: right bottom;
        box-shadow: 10px 20px;
    }
    .containers a:nth-child(2) {
        top: 0;
        right: 0;
    }
    .containers a:nth-child(2):hover ~ .carder,
    .containers a:nth-child(2):focus ~ .carder {
        transform: rotateX(10deg) rotateY(10deg) translateZ(0);
        transform-origin: left bottom;
        box-shadow: -10px 20px;
    }
    .containers a:nth-child(3) {
        bottom: 0;
        right: 0;
    }
    .containers a:nth-child(3):hover ~ .carder,
    .containers a:nth-child(3):focus ~ .carder {
        transform-origin: left top;
        transform: rotateX(-10deg) rotateY(10deg) translateZ(0);
        box-shadow: -10px -20px;
    }
    .containers a:nth-child(4) {
        bottom: 0;
        left: 0;
    }
    .containers a:nth-child(4):hover ~ .carder,
    .containers a:nth-child(4):focus ~ .carder {
        transform-origin: right top;
        transform: rotateX(-10deg) rotateY(-10deg) translateZ(0);
        box-shadow: 10px -20px;
    }

    @media (max-width: 1408px) and (min-width: 1280px) {
        .containers .carder {
            width: 400px;
            height: 300px;
        }
        .containers {
            width: 100%;
            max-width: 300px;
            height: 200px;
        }
        .carders {
            width: 400px;
            height: 300px;
            border-radius: 0px;
        }

        .carder-header {
            width: 400px;
        }
    }

    @media (max-width 1280px) and (min-width: 1024px) {
        .containers .carder {
            width: 250px;
            height: 150px;
        }

        .carders {
            width: 300px;
            height: 150px;
            border-radius: 0px;
        }

        .carder-header {
            width: 300px;
        }
    }

    @media (max-width: 1024px) and (min-width: 768px) {
        .containers .carder {
            width: 390px;
            height: 100px;
        }

        .carders {
            width: 390px;
            height: 300px;
            border-radius: 0px;
        }

        .carder-header {
            width: 390px;
        }
    }

    @media (max-width: 768px) and (min-width: 480px) {
        .containers .carder {
            width: 300px;
            height: 200px;
        }
    }

    // .carders {
    //     width: 350px;
    //     height: 200px;
    //     border-radius: 0px;
    // }

    // .carder-header {
    //     width: 350px;
    //     font-size: 20px;
    // }

    @media (max-width: 480px) {
        .containers .carder {
            width: 100vw;
            height: 32vh;
        }

        .carders {
            width: 100vw;
            height: 32vh;
            border-radius: 0px;
        }

        .carder-header {
            width: 100vw;
        }
    }
`;

export default Card;
