/*
 * Created on Fri Dec 24 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import styled from "styled-components";
import { Placeholder } from "./placeholder";
import { BannerSection } from "./section/banner";

const AppContainer = styled.div`{
    background-color: rgb(20, 20, 20);
}`;

export function PancakeApp() {
    return <AppContainer>
        <BannerSection name="pancake.sh" />
        <Placeholder />
    </AppContainer>;
}
