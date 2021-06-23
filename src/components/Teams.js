import React from 'react'
import Team from "./Team"
import NYBpic from "../pics/nyb.jpg"
import Calipic from "../pics/cc.jpg"

var teams = [
    {
        "name": "NY Breakers",
        "picture": NYBpic,
        "alt": "NY Breakers logo",
        "desc": "NY Breakers are a team from New York, led by Michael Andrew. Last year, they finished 8th in ISL." ,
        "swim": [
            "Michael Andrew",
            "Molly Renshaw",
            "Abbie Wood",
            "Jacob Whittle",
            "Marco Koch"
        ]
    },
    {
        "name" : "Cali Condors",
        "picture": Calipic,
        "alt": "Cali Condors logo",
        "desc": "Cali Condors are a team from California, led by Caeleb Dressel and Lilly King. Last year, they finished 1st in ISL." ,
        "swim": [
            "Caeleb Dressel",
            "Lilly King",
            "Olivia Smoliga",
            "Beata Nelson",
            "Nic Fink"
        ]
    }
]

function islteams(teams){
    const listItems = teams.map((val, index) =>
            <Team name = {val.name} pic = {val.picture} picalt = {val.alt} description = {val.desc} swimmers = {val.swim} />
    );
    return listItems;
}

const Teams = () => {
    return (
        <article className = "teams">
           {islteams(teams)}
        </article>
    )
}

export default Teams
