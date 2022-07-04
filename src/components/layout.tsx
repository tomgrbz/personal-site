import React from 'react';
import Card from './card'
import Header from './header'
import './daisy.css'

import {Parallax, ParallaxLayer} from '@react-spring/parallax';


export default class Layout extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

    }

    render() {
        return (
                <div className="min-w-screen">
                    <div className="topContainer">
                    <Header/>
                    </div>


                        <div className="h-[300] w-[fit] flex flex-wrap sm:flex sm:w-full sm:pt-10 sm:h-500px justify-between bg-[#96b78a]">
                            <div className="flex px-16">
                                <Card title="TreeDB Website" body="A Website that contains data on trees in the local Boston area."
                                    img='treedb_site' alt="treedb_site" route="treedb"></Card>
                            </div>
                            <div className="flex px-16">
                                <Card title="Twilio Location Messenger" body="An app in progress that allows you to message people in a 1 mile radius."
                                      img='1024px-Twilio-logo-red.svg' alt="twilio_logo" route=""></Card>
                            </div>
                            <div className="flex px-16">
                                <Card title="AppleJacks" body="A discord bot that allows the user to play blackjack in discord through text commands"
                                      img='discord_bot' alt="discord_bot_img" route="BlackJackBot"></Card>
                            </div>
                            <footer className="footer items-center p-4 bg-green-150 text-neutral-content">
                                <div className="items-center grid-flow-col">

                                </div>
                                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                                    <a href="https://github.com/tomgrbz" className="icon">
                                        <img src={require("../images/GitHub-Mark-64px.png")} alt="github"></img>
                                    </a>

                                </div>
                            </footer>
                        </div>





                    </div>


    );
    }

}