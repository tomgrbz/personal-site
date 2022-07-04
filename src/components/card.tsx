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
            <div className="card card-compact w-44 h-96 sm:w-96 sm:h-[360px] bg-[#f6fad1] shadow-xl">
                <figure><img className="object-scale-down w-32 h-32 sm:w-52" src={require(`../images/${img}.png`)} alt={alt}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-sm">{body}</p>
                    <div className="card-actions justify-end">
                        <a href={`https://github.com/tomgrbz/${route}`}>
                        <button className="btn btn-accent">View on Github</button>
                        </a>
                    </div>
                </div>
            </div>
        )


}

export default Card