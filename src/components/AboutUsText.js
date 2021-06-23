import React from 'react'
import PropTypes from 'prop-types'

const AboutUsText = (props) => {
    return (
        <section>
            {props.text}
        </section>
    )
}

AboutUsText.propTypes = {
    text: PropTypes.string.isRequired,
}


export default AboutUsText
