import {useRef, useEffect} from "react";
import Typed from 'typed.js';

export default function Typer({ content }: {content:string}) {
    const el = useRef<any>(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['coffee enthusiast', 'aspiring frontend developer', 'automation tester', 'plant lover', 'cafe connoisseur'],
            typeSpeed: 40,
            backSpeed: 20,
            loop: true,
        });


        return () => {
            typed.destroy();
        };
    }, [])

    return (
            <h1 className="typingLine"> {content + " "}

                <span ref={el}></span>
            </h1>
    );
}