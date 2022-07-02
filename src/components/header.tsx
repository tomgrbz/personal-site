import React from 'react';
import Typer from './typer'
import { HeaderContainer, TitleContainer} from "./styles";

interface IHeaderState {
    nightMode: boolean
}

export default class Header extends React.Component<any, IHeaderState> {
    constructor(props: any) {
        super(props);

        this.state = {
            nightMode: false,
        }
    }


    render() {
        return (
            <div className="headerMain">
            <HeaderContainer>
                <div className="introContainer">
                    <h1 className="intro">Hi, I'm Thomas Grbic</h1>
                </div>
                <TitleContainer>
                    <Typer content={"I am a CS student and"}></Typer>
                </TitleContainer>
            </HeaderContainer>
            </div>
        )

    }
}