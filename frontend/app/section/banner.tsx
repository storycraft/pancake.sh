/*
 * Created on Sat Dec 25 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React, { useRef } from "react";
import styled from "styled-components";
import { Icon } from "../element/icon";
import { ParallaxBlock } from "../parallax-block";

const BannerContainer = styled.div`{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgb(20, 20, 20);
    flex-direction: column;
}`;

const BannerText = styled.span`
{
    color: rgb(240, 240, 240);
    font-size: 4rem;
    user-select: none;

    padding: 0.8rem 2rem;

    margin: auto;

    border-radius: 0.8rem;

    border: 4px solid rgba(0, 0, 0, 0);
    
    transition: background-color 0.25s, color 0.25s, border 0.25s;
}

:hover {
    border: 4px solid rgb(240, 240, 240);
}

:active {
    background-color: rgb(240, 240, 240);
    color: rgb(20, 20, 20);
}`;

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

    return <BannerContainer ref={ref}>
        <div style={{ margin: 'auto' }}>
            <ParallaxBlock layer={0}>
                <BannerText>{NAME}</BannerText>
            </ParallaxBlock>
        </div>
        <ParallaxBlock layer={1}>
            <div style={{ textAlign: 'center' }}>
                <Icon style={{ fontSize: '3rem', cursor: 'pointer', padding: '3rem' }} onClick={scrollDown}>expand_more</Icon>
            </div>
        </ParallaxBlock>
    </BannerContainer>;
}
