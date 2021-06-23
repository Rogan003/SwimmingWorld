import React from 'react'
import AboutUsText from './AboutUsText'
import AboutUsPicture from './AboutUsPicture'

const AboutUs = (props) => {
    return (
        <article className = "aboutus">
            <AboutUsText text = {props.tekst} />
            <AboutUsPicture pic = {props.pic} picalt = {props.picalt} />
        </article>
    )
}

export default AboutUs
