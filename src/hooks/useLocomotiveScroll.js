import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll"
import "locomotive-scroll/src/locomotive-scroll.scss"

export default function useLocomotiveScroll(start) {
    useEffect(() => {
        if (!start) return;

        const scrollElement = document.querySelector("#main-container")

        const locomotiveScroll = new LocomotiveScroll({
            el: scrollElement,
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        })
    }, [start])
}
