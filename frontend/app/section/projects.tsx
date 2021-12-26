/*
 * Created on Sun Dec 26 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`{
    padding: 2rem 3rem;
    font-size: 1.2rem;
}`;

const ProjectHead = styled.h1`{
    font-size: 2rem;
    margin: 0px 0px 2rem 0px;
    user-select: none;
    color: rgb(200, 200, 200);
}`;

const ProjectList = styled.div`{
    display: block;
}`;

const ListItemContainer = styled.a`{
    display: block;
    padding: 0rem 1rem;
    margin: 1rem 0rem;

    color: rgb(220, 220, 220);
    text-decoration: none;

    border-radius: 4px;
    border: 2px solid rgb(180, 180, 180);
}

:hover {
    border: 2px solid rgb(220, 220, 220);
}`;

const ListItemName = styled.h2`{
    font-weight: bold;
    font-size: 1.5rem;
}`;

export function ProjectsSection() {
    return <ProjectsContainer>
        <ProjectHead>Projects</ProjectHead>
        <ProjectList>
            <ListItem name="NodeKakao" desc="(Typescript) Loco protocol compatible library" link="https://github.com/storycraft/node-kakao" />
            <ListItem name="storyboard" desc="(Rust) Flexible GPU accelerated 2D rendering engine powered by wgpu, rust" link="https://github.com/storycraft/storyboard" />
            <ListItem name="tablet-driver" desc="(Rust) Low latency Tablet(CTL-472) userland driver made with Rust" link="https://github.com/storycraft/tablet-driver" />
            <ListItem name="web-wallpaper" desc="(C#) Live desktop wallpaper renderer using Cef" link="https://github.com/storycraft/web-wallpaper" />
            <ListItem name="advanced-calculator" desc="(Typescript) Predictive parser and interpreter from scratch" link="https://github.com/storycraft/advanced-calculator" />
            <ListItem name="..." desc="" link="https://github.com/storycraft" />
        </ProjectList>
    </ProjectsContainer>
}

function ListItem(prop: { name: string, desc: string, link?: string }) {
    return <ListItemContainer href={prop.link}>
        <ListItemName>{prop.name}</ListItemName>
        <p>{prop.desc}</p>
    </ListItemContainer>;
}
