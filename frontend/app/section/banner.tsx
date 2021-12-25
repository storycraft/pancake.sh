/*
 * Created on Sat Dec 25 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import styled from "styled-components";
import { Icon } from "../element/icon";
import { Parallel } from "../effect/parallel";

const BannerContainer = styled.div`{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}`;

const BannerText = styled.span`
{
    color: rgb(240, 240, 240);
    font-size: 4rem;
    user-select: none;

    margin: auto;

    transition: color 0.25s;
}

:hover {
    color: rgb(170, 110, 240);
}`;

export function BannerSection(prop: { name: string }) {
    return <BannerContainer>
        <div style={{ margin: 'auto' }}>
            <Parallel layer={0}><BannerText>{prop.name}</BannerText></Parallel>
        </div>
        <Icon style={{ fontSize: '3rem', textAlign: 'right' }}>expand_more</Icon>
    </BannerContainer>;
}
