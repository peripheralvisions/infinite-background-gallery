import React from 'react'

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

function Main() {
    return (
        <div css={
        css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100%;
            width: 100%;
        `}>
            <h1>Theodore</h1>
            <h2>John Deere</h2>
        </div>
    )
}

export default Main
