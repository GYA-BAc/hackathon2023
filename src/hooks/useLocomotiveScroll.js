import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "locomotive-scroll/src/locomotive-scroll.scss"

gsap.registerPlugin(ScrollTrigger)

export default function useLocomotiveScroll(start) {
    useEffect(() => {
        if (!start) return;

        const scrollElement = document.querySelector("#main-container")

        let locomotiveScroll = new LocomotiveScroll({
            el: scrollElement,
            multiplier: 0,
            class: 'is-reveal'
        })

    }, [start])
}
