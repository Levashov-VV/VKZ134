'use client';

import React from 'react';
import styled from 'styled-components';

interface CardProps {
    name: string;
    description: string;
    img?: string;
}

const Card: React.FC<CardProps> = ({ name, description }) => {
    return (
        <StyledWrapper>
            <div className="card">
                <h3 className="text">{name}</h3>
                <p className="text del-text">{description}</p>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
    .card {
        width: 356.25px;
        height: 476.25px;
        padding-top: 18px;
        background: lightgrey;
        border: 3px inset white;
        background: #e8e8e8;
        box-shadow: inset 20px 20px 60px #c5c5c5, inset -20px -20px 60px #474a51;
        transition: all 0.5s ease-in-out;
        border-radius: 1.5rem;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-direction: column;
        gap: 18px;
        font-weight: bolder;
        color: #000;
        font-family: 'Manrope';
        fweight: 600;
    }

    .card:hover {
        transform: translateY(-5px);
        scale: 1.1;
        transition: all 0.5s ease-in-out;
    }

    @media (max-width: 1280px) and (min-width: 1140px) {
        .card {
            width: 300px;
            height: 400px;
            padding-top: 18px;
            background: lightgrey;
            border: 3px inset white;
            background: #e8e8e8;
            box-shadow: inset 20px 20px 60px #c5c5c5,
                inset -20px -20px 60px #474a51;
            transition: all 0.5s ease-in-out;
            border-radius: 1.5rem;
            display: flex;
            justify-content: start;
            align-items: center;
            flex-direction: column;
            gap: 18px;
            font-weight: bolder;
            color: #000;
            font-family: 'Manrope';
            fweight: 600;
        }
    }

    @media (max-width: 1140px) and (min-width: 1000px) {
        .card {
            width: 28vw;
            height: 35vh;
        }

        .del-text {
            font-size: 20px;
        }
    }
    @media (max-width: 1000px) and (min-width: 768px) {
        .card {
            width: 30vw;
            height: 35vh;
        }

        .del-text {
            font-size: 14px;
        }
    }

    @media (max-width: 480px) and (min-width: 400px) {
        .card {
            width: 45vw;
            height: 32vh;
        }

        .del-text {
            font-size: 12px;
        }
}
    @media (max-width: 400px) and (min-width: 380px) {
        .card {
            width: 45vw;
            height: 37vh;
        }

        .del-text {
            font-size: 13px;
        }
    }

    @media (max-width: 380px) and (min-width: 0px) {
        .card {
            width: 45vw;
            height: 45vh;
    }

    .del-text {
        font-size: 12px;
    }
`;

export default Card;
