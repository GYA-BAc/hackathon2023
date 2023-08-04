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
            smooth: true,
            multiplier: 1,
            class: 'is-reveal'
        })

        locomotiveScroll.on('scroll', () => {
            ScrollTrigger.update()
        })

        ScrollTrigger.scrollerProxy("#main-container", {
            scrollTop(value) {
                if (locomotiveScroll) {
                    return (arguments.length ?
                    locomotiveScroll.scrollTo(value, 0, 0) :
                    locomotiveScroll.scroll.instance.scroll.y)
                }
                return null
            },
            scrollLeft(value) {
                if (locomotiveScroll) {
                    return (arguments.length ?
                    locomotiveScroll.scrollTo(value, 0, 0) :
                    locomotiveScroll.scroll.instance.scroll.x)
                }
                return null
            },
        })
        const lsUpdate = () => {
            if (locomotiveScroll) {
                locomotiveScroll.update()
            }
        }

        ScrollTrigger.addEventListener('refresh', lsUpdate)
        ScrollTrigger.refresh()

        return () => {
            if (locomotiveScroll) {
                ScrollTrigger.removeEventListener('refresh', lsUpdate)
                locomotiveScroll.destroy()
                locomotiveScroll = null
            }
        }
    }, [start])
}
