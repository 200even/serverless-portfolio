import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        title: "ALEXA SKILL",
        href: "https://github.com/200even/yeager-app",
        desc: `The Yeager skill allows a user to verify email addresses and search for publicly 
                available email addresses for a company by providing the domain name. The app 
                relies on the Hunter API to provide the domain information.`,
        image: {
            desc: "Alexa Skill Example",
            src: "images/code-background.png",
            comment: "",
        },
    },
    {
        title: "CROSS-PLATFORM APP",
        href: "https://play.google.com/store/apps/details?id=uk.co.firstorion.android.tpsprotect&hl=en",
        desc: `TPS Protect allows users in the UK to divert nuisance calls to voicemail. 
                I developed the reporting flow of the application using Ionic Frameork based on designs 
                provided by a graphic designer in consultation with the client. The reporting flow has some 
                differences between the two platforms due to the differences in native capability between 
                iOS and Android.`,
        image: {
            desc: "Cross Platform App",
            src: "images/tps-form.png",
            comment: "",
        },
    },
    {
        title: "VOTE-UP",
        href: "https://bitbucket.org/200even/arvoterregistration",
        desc: `This project allows completion of the Arkansas voter 
                registration form online and returns the completed form 
                as a PDF. The project employs a web scraper for voter info as well 
                as allowing a user to input their information in web form fields and 
                receive a completed PDF for submission to the state.`,
        image: {
            desc: "Vote-Up Web App",
            src: "images/vote-up.png",
            comment: "",
        },
    },
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));