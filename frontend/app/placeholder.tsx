/*
 * Created on Sat Dec 25 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import styled from "styled-components";

const PlaceholderText = styled.span`
{
    color: rgb(100, 100, 100);
    font-size: 2rem;
    user-select: none;
    margin: auto;
}
`;

export function Placeholder() {
    return <div><PlaceholderText>// TODO:: placeholder</PlaceholderText></div>;
}

