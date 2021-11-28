import gsap from 'gsap/all';
import React, {useRef, useEffect} from 'react'
import Gallery from '../gallery/Gallery';

function Panel() {

    const targetParent = useRef();

    const q = gsap.utils.selector(targetParent);


    useEffect(() => {
        console.log(targetParent, q)
        gsap.from(q("li"), { y: 100, stagger: 0.06} )
    })

    return (
        <div className="panel">
            <Gallery />
            <div className="panel-top">
                <span>London 2022</span>
            </div>
            <nav>
                <ul ref={targetParent}>
                    <li><a href="">home</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">work</a></li>
                    <li><a href="">contact</a></li>
                </ul>
            </nav>
            <div className="panel-bottom">
                Copyright 2021. All rights reserved.
            </div>
        </div>
    )
}

export default Panel
