import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        title: "ALEXA SKILL",
        image: {
            desc: "Alexa Skill Example",
            src: "images/code-background.png",
            comment: "",
        },
    },
    {
        title: "CROSS-PLATFORM APP",
        image: {
            desc: "Cross Platform App",
            src: "images/tps-form.png",
            comment: "",
        },
    },
    {
        title: "VOTE-UP",
        image: {
            desc: "Vote-Up Web App",
            src: "images/vote-up.png",
            comment: "",
        },
    },
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));