/*
 * Created on Fri Dec 24 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { PancakeApp } from './frontend/app';
import * as cheerio from 'cheerio';
import { ServerStyleSheet } from 'styled-components';

const CACHED_DIR = '.ssr';

const template = readFileSync('frontend/index.html', 'utf-8');
const app = createElement(PancakeApp, {}, null);

const sheet = new ServerStyleSheet();
renderToString(sheet.collectStyles(app));

mkdirSync(CACHED_DIR, { recursive: true });

const parsed = cheerio.load(template);
parsed('head').append(sheet.getStyleTags());
parsed('#root').html(renderToString(app));

writeFileSync(`${CACHED_DIR}/index.html`, parsed.html(), 'utf-8');

console.log('SSR page rendered');
