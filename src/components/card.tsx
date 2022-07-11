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
            <div className="card card-compact w-[fit] h-[fit] my-4 sm:w-96 sm:h-[360px] bg-[#f6fad1] shadow-xl">
                <figure><img className="object-scale-down w-[fit] h-32 sm:w-[fit]" src={require(`../images/${img}.png`)} alt={alt}/></figure>
                <div className="card-body">
                    <h2 className="card-title font-black text-[#000000]">{title}</h2>
                    <p className="text-sm font-black text-[#000000]">{body}</p>
                    <div className="card-actions justify-end">
                        <a href={`https://github.com/tomgrbz/${route}`} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-accent w-24 sm:w-full">View on Github</button>
                        </a>
                    </div>
                </div>
            </div>
        )


}

export default Card