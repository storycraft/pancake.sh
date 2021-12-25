/*
 * Created on Sat Dec 25 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React, { PropsWithChildren, useEffect } from "react";
import { useRef } from "react";
import styled from "styled-components";

const Layer = styled.div`{
    display: inherit;
}`;

export function Parallel(prop: PropsWithChildren<{ layer: number }>) {
    const layerRef = useRef<HTMLDivElement | null>(null);
    const multipier = prop.layer + 1;

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (layerRef.current) {
                const pX = e.screenX / window.outerWidth;
                const pY = e.screenY / window.outerHeight;

                layerRef.current.style.transform = `translate(${multipier * pX + 'rem'},${multipier * pY + 'rem'})`;
            }
        };

        window.addEventListener('mousemove', handler);

        return () => {
            window.removeEventListener('mousemove', handler);
        };
    });

    return <Layer ref={layerRef}>{prop.children}</Layer>;
}
