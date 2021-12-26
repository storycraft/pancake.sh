/*
 * Created on Fri Dec 24 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import styled from "styled-components";
import { BannerSection } from "./section/banner";
import { ProjectsSection } from "./section/projects";
import { FooterSection } from "./section/footer";

const AppContainer = styled.div`{
    background-color: rgb(30, 30, 42);
    overflow-x: hidden;
}`;

export function PancakeApp() {
    return <AppContainer>
        <BannerSection />
        <ProjectsSection />
        <FooterSection />
    </AppContainer>;
}
