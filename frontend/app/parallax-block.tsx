/*
 * Created on Sat Dec 25 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

import React, { CSSProperties, PropsWithChildren, useEffect } from "react";
import { useRef } from "react";

export function ParallaxBlock(prop: PropsWithChildren<{ layer: number, style?: CSSProperties }>) {
    const layerRef = useRef<HTMLDivElement | null>(null);
    const multipier = (prop.layer + 1) * 0.5;

    useEffect(() => {
        let lock = false;

        const handler = (e: MouseEvent) => {
            if (!lock && navigator.maxTouchPoints <= 0) {
                lock = true;
                requestAnimationFrame(() => {
                    if (layerRef.current) {
                        const pX = (e.screenX / window.outerWidth - 0.5) * 2;
                        const pY = (e.screenY / window.outerHeight - 0.5) * 2;

                        layerRef.current.style.transform = `translate(${multipier * pX + 'rem'},${multipier * pY + 'rem'})`;
                    }

                    lock = false;
                });
            }
        };

        window.addEventListener('mousemove', handler);

        return () => {
            window.removeEventListener('mousemove', handler);
        };
    });

    return <div ref={layerRef} style={prop.style}>{prop.children}</div>;
}
