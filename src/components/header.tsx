import React from 'react';
import Typer from './typer'




const Header = () => {

        return (
            <div className="headerContainer">
            <div className="headerMain">
                <h1 className="introHeadLine">Hi, I'm Thomas Grbic </h1>
                <div className="typeContainer">
                    <Typer content={"I am a CS student and"}></Typer>
                </div>



            </div>
            </div>
        )

}
export default Header;