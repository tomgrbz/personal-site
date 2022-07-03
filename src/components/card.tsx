import React from "react";
import './daisy.css'


interface ICardProps {
    title: string,
    body: string,
    img: string,
    alt: string,
    route: string,
}

const Card = (props:ICardProps) =>  {
    const { title, body, img, alt, route } = props;

        return (
            <div className="card card-compact w-48 h-52 md:w-96 md:h-96 bg-[#f6fad1] shadow-xl">
                <figure><img src={require(`../images/${img}.png`)} alt={alt}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{body}</p>
                    <div className="card-actions justify-end">
                        <a href={`https://github.com/tomgrbz/${route}`}>
                        <button className="btn btn-accent" >View on Github</button>
                        </a>
                    </div>
                </div>
            </div>
        )


}

export default Card