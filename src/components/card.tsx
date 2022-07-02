import React from "react";
import './daisy.css'


interface ICardProps {
    title: string,
    body: string,
    img: string,
    alt: string,
}

export default class Card extends React.Component<ICardProps, any> {
    constructor(props: ICardProps) {
        super(props);

    }
    render() {
        return (
            <div className="card card-compact w-96 h-96 bg-[#f6fad1] shadow-xl">
                <figure><img src={require(`../images/${this.props.img}.png`)} alt={this.props.alt}/></figure>
                <div className="card-body">
                    <h2 className="card-title">{this.props.title}</h2>
                    <p>{this.props.body}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-accent">View on Github</button>
                    </div>
                </div>
            </div>
        )
    }

}