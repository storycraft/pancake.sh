/*
 * Created on Sun Dec 26 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import styled from "styled-components";

const Footer = styled.div`{
    background-color: rgb(42, 42, 42);
    padding: 3rem 3rem;
}`;

const Text = styled.p`{
    color: rgb(120, 120, 120);

    margin: 0px;
}`;

const NAME: string = 'storycraft';
const EMAIL: string = 'storycraft@pancake.sh';

export function FooterSection() {
    return <Footer>
        <Text>Contact Detail</Text>
        <br />
        <Text>{NAME}</Text>
        <Text>{EMAIL}</Text>
    </Footer>;
}
