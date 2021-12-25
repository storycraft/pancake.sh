/*
 * Created on Fri Dec 24 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import { render } from "react-dom";

import { PancakeApp } from './app';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    render(<PancakeApp />, root);
});

