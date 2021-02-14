import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import {ScrollTo} from 'react-scroll-to';

function Footer() {
    return (
        <div>
            <ScrollTo>
                {({scroll}) =>(
                    <Link onClick={() => scroll({x: 0, y: 0})}>Back to Top</Link>
                )}
                </ScrollTo>
        </div>
    )
}

export default Footer
