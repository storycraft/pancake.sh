/*
 * Created on Sun Dec 26 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import styled from "styled-components";

const Footer = styled.footer`{
    background-color: rgb(42, 42, 52);
    padding: 3rem 3rem;
}`;

const Text = styled.p`{
    color: rgb(120, 120, 120);
}`;

const NAME: string = 'storycraft';
const EMAIL: string = 'storycraft@pancake.sh';

export function FooterSection() {
    return <Footer>
        <Text>Contact Detail</Text>
        <Text>
            {NAME}
            <address>{EMAIL}</address>
        </Text>
    </Footer>;
}
