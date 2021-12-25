/*
 * Created on Fri Dec 24 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React from "react";
import { hydrate, render } from "react-dom";

import { PancakeApp } from './app';

window.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');

    if (process.env.NODE_ENV === 'development') {
        render(<PancakeApp />, root)
    } else {
        hydrate(<PancakeApp />, root);
    }
});

