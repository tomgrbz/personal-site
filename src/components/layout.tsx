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
                <Parallax pages={1.5} style={{top: '0', left: '0'}}>
                    <ParallaxLayer
                        offset={0}
                        speed={.5}
                        factor={.75}
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Header> </Header>
                    </ParallaxLayer>

                    <ParallaxLayer
                        offset={0.75}
                        speed={0.5}
                        factor={1}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#a9d9e3',
                        }}>
                        <div className="flex md:flex justify-between">
                            <div className="px-16">
                                <Card title="TreeDB Website" body="A Website that contains data on trees in the local Boston area."
                                    img='treedb_site' alt="treedb_site"></Card>
                            </div>
                            <div className="px-16">
                                <Card title="Twilio Location Messenger" body="An app in progress that allows you to message people in a 1 mile radius."
                                      img='1024px-Twilio-logo-red.svg' alt="twilio_logo"></Card>
                            </div>
                            <div className="px-16">
                                <Card title="AppleJacks" body="A discord bot that allows the user to play blackjack in discord through text commands"
                                      img='discord_bot' alt="discord_bot_img"></Card>
                            </div>
                        </div>



                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={1.407}
                        factor={.5}
                        speed={.010}
                    >
                        <footer className="footer items-center p-4 bg-green-150 text-neutral-content">
                            <div className="items-center grid-flow-col">

                            </div>
                            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                                <a href="https://github.com/tomgrbz" className="icon">
                                    <img src={require("../images/GitHub-Mark-64px.png")} alt="github"></img>
                                </a>

                            </div>
                        </footer>
                    </ParallaxLayer>
                </Parallax>


    );
    }

}