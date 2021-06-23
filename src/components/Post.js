import React, { useState } from 'react'

function MyList(niz) {
    const listItems = niz.map((val, index) =>
        <p>
            <h5>{val.user}</h5>
            {val.com}
        </p>
    );
    return <div>{listItems}</div>;
}

const Post = (props) => {
    const [swimmers, setSwimmers] = useState(props.comments);
    function addComment()
    {
        // ovde mozda treba neki e.preventDefault();
        alert("HEJ!");
        //funkcija koja ce da postavi komentar
    }
    return (
        <section>
            <img src = {props.pic} alt = {props.picalt} />
            <div>
                <h4>{props.name}</h4>
                {props.description}
            </div>
            {MyList(swimmers)}
            <form onSubmit = {addComment()} id = "form1">
                <input type = "text" id = "comment" placeholder = "Comment..." />
                <input type = "submit" value = "submit" />
            </form>
            {
                //fali method = "post"
            }
        </section>
    )
}

export default Post
