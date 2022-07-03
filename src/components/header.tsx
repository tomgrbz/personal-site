import React from 'react';
import Typer from './typer'




const Header = () => {

        return (
            <div className="headerMain">
                <h1 className="introHeadLine">Hi, I'm Thomas Grbic</h1>
                <div className="typingLine">
                    <Typer content={"I am a CS student and"}></Typer>
                </div>

            </div>
        )

}
export default Header;