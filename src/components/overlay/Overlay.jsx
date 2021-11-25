import React, { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

let pathRef = null;

export const overlayOpen = () => {
    const target = pathRef.current;
    gsap.timeline({
        onComplete: () => console.log('Complete')
    })
        .set(target, {
            attr: { d: 'M 0 100 V 100 Q 50 100 100 100 V 100 z' }
        })
        .to(target, {
            duration: 0.8,
            ease: 'power4.in',
            attr: { d: 'M 0 100 V 50 Q 50 0 100 50 V 100 z' }
        })
        .to(target, {
            duration: 0.3,
            ease: 'power2',
            attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" }
        })
}

export const overlayClose = () => {
    const target = pathRef.current;
    gsap.timeline()
        .set(target, {
            attr: { d: "M 0 0 V 100 Q 50 100 100 100 V 0 z" }
        })
        .to(target, {
            duration: 0.3,
            ease: "power2.in",
            attr: { d: 'M 0 0 V 50 Q 50 0 100 50 V 0 z' }
        })
        .to(target, {
            duration: 0.8,
            ease: 'power4',
            attr: { d: 'M 0 0 V 0 Q 50 0 100 0 V 0 z' }
        })
}

function Overlay() {

    pathRef = useRef();

    return (
        <svg
            className="overlay"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            css={css`
                position: absolute;
                top: 0;
                left: 0;
            `}>
            <path
                ref={pathRef}
                className="overlay__path"
                d="M 0 100 V 100 Q 50 100 100 100 V 100 z"></path>
        </svg>
    )
}

export default Overlay
