import React from 'react'
import "./Gallery.scss"

function Gallery({images}) {

    const demoData = [
        [
            "https://images.unsplash.com/photo-1635178792420-b90837a4e5d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNzU2ODE3NQ&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1637497392084-8a028de000d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNzU2ODU2Nw&ixlib=rb-1.2.1&q=80&w=1080",
            "https://images.unsplash.com/photo-1636038301178-0534cabba3db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNzU2ODU5NA&ixlib=rb-1.2.1&q=80&w=1080"
        ],

        [
            "https://images.unsplash.com/photo-1416269223193-bc45028133f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHZpbnRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
            "https://images.unsplash.com/photo-1527786356703-4b100091cd2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmludGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
            "https://images.unsplash.com/photo-1635148977993-dd56e7335757?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzNzYyODY1Mw&ixlib=rb-1.2.1&q=80&w=1080"
        ],

        [
            "https://images.unsplash.com/photo-1467991521834-fb8e202c7074?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbnRhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60",
            "https://images.unsplash.com/photo-1522775417749-29284fb89f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmludGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
            "https://images.unsplash.com/photo-1522775417749-29284fb89f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmludGFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
        ],
    ];

    const data = images || demoData;

    const LineRow = ({ items }) => {


        let arr = items.map((each, idx, self) => (

            <div className={`gallery--line-img ${idx % 2 === 0 ? "" : "gallery--line-img-large"}`} style={{
                backgroundImage: `url("${each}")`,
            }} />

        ))

        arr = arr.concat(arr);

        console.log(arr);

        return (
            <>
                {
                    arr
                }
            </>
        )
    }

    return (
        <div className="gallery">
            {
                data.map(each => {
                    return (
                        <div className="gallery--line">
                            <LineRow items={each} />
                        </div>
                    )
                })
            }
        </div>
    )


}

export default Gallery
