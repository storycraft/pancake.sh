/*
 * Created on Sat Dec 25 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Icon } from "../element/icon";
import { ParallaxBlock } from "../parallax-block";

const BannerContainer = styled.header`{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgb(20, 20, 28);
    flex-direction: column;
}`;

const BannerText = styled.span`
{
    color: rgb(240, 240, 240);
    font-size: 4rem;
    user-select: none;

    padding: 0.8rem 1rem;

    margin: auto;

    border: 4px solid rgb(240, 240, 240);
    
    transition: background-color 0.25s, color 0.25s;
}

:hover {
    background-color: rgb(240, 240, 240);
    color: black;
}`;

const Square = styled.div`{
    display: inline-block;
    background-color: rgba(200, 200, 200, 1.0);
    width: 4px;
    height: 4px;
    transform: rotate(0deg);

    transition: transform 0.2s;
}

:hover {
    transform: rotate(360deg);
}
`;

const NAME = "pancake.sh";

export function BannerSection() {
    const ref = useRef<HTMLDivElement | null>(null);

    function scrollDown() {
        if (ref.current) {
            window.scroll({
                top: ref.current.getBoundingClientRect().height,
                behavior: 'smooth'
            });
        }
    }

    const containers: JSX.Element[] = [];

    const count = Math.floor(Math.random() * 12) + 16;

    let oX = 0.01;
    for (let i = 0; i < count; i++) {
        const depth = 2 + i % 4;

        oX += (1 / count) * 0.98;

        const x = oX;
        const y = 0.025 + Math.random() * 0.95;

        containers.push(
            <ParallaxBlock key={i} layer={depth} style={{ position: 'absolute', left: x * 100 + '%', top: y * 100 + '%' }}>
                <Square />
            </ParallaxBlock>
        );
    }

    return <BannerContainer ref={ref}>
        <div>{containers}</div>
        <div style={{ margin: 'auto' }}>
            <ParallaxBlock layer={0}>
                <BannerText>{NAME}</BannerText>
            </ParallaxBlock>
        </div>
        <ParallaxBlock layer={1}>
            <div style={{ textAlign: 'center' }}>
                <Icon style={{ fontSize: '3rem', padding: '3rem' }} onClick={scrollDown}>expand_more</Icon>
            </div>
        </ParallaxBlock>
    </BannerContainer>;
}
