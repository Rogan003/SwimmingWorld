import React from 'react'
import Post from './Post'
import Dresselpic from '../pics/dressel.jpg'

var posts = [
    {
        "name" : "Username001",
        "picture": Dresselpic,
        "alt": "Dressel picture",
        "desc": "Dressel just swam 49.50!!! THAT IS A NEW WORLD RECORD!!!",
        "comments": [
            {
                "user": "DresselFAN#1",
                "com": "WOW!"
            },
            {
                "user": "PhelpsTheGoat",
                "com": "Still not good as Phelps..."
            }
        ]
    }
]

function posting(posts){
    const listItems = posts.map((val, index) =>
            <Post name = {val.name} pic = {val.picture} picalt = {val.alt} description = {val.desc} comments = {val.comments} />
    );
    return listItems;
}

const Feed = () => {
    return (
        <article>
            {posting(posts)}
        </article>
    )
}

export default Feed
