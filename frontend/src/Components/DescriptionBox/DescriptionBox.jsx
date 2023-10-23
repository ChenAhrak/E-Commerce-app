import React from 'react'
import './DescriptionBox.css'

export const DescriptionBox = () => {
    return (
        <div className='description-box'>
            <div className="description-box-nav">
                <div className="description-box-nav-box">
                    Description
                </div>
                <div className="description-box-nav-box fade">
                    Reviews (0)
                </div>
            </div>
            <div className="description-box-description">
                <p>
                    A hoodie (in some cases spelled hoody[1] and alternatively known as a hooded sweatshirt)[2] is a sweatshirt with a hood.
                    [1] Hoodies with zippers usually include two pockets on the lower front, one on either side of the zipper, while "pullover" hoodies (without zippers) often include a single large muff or pocket in the same location.
                    Both styles (usually) include a drawstring to adjust the hood opening.
                    When worn up, the hood covers most of the head and neck and sometimes the face.
                    Hoodies may be worn for aesthetic purposes, or protection against the environment (cold weather, rain, wind etc.)
                </p>

            </div>
        </div>

    )
}
