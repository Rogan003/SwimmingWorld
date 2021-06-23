import React from 'react'

function MyList(niz) {
    const listItems = niz.map((val, index) =>
        <li key = {index}>{val}</li>
    );
    return <ul>{listItems}</ul>;
}   

const Team = (props) => {
    return (
        <section className = "team">
            <div className = "normal">
                <h3>{props.name}</h3>
                <img src = {props.pic} alt = {props.picalt} />
                <p>
                    {props.description}
                </p>
            </div>
            <div className = "hovered">
                <h3>{props.name}</h3>
                <p>
                    {MyList(props.swimmers)}
                </p>
            </div>
        </section>
    )
}

export default Team
