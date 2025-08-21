"use client"
import { useEffect, useState, useRef } from "react"
import Lenis from "@studio-freight/lenis"

export default function BackToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrolled, setScrolled] = useState(0)
  const [scrollHeight, setScrollHeight] = useState(500)
  const lenis = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return

    lenis.current = new Lenis({
      duration: 0.6,
      easing: (t) => t,
      smooth: true,
    })

    function raf(time) {
      lenis.current.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    const handleScroll = () => {
      const currentScroll = document.body.scrollTop || document.documentElement.scrollTop
      setScrolled(currentScroll)
      setShowScrollTop(window.scrollY >= window.innerHeight)
      const totalScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setScrollHeight(totalScrollHeight)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (lenis.current) {
        lenis.current.destroy()
      }
    }
  }, [])

  const scrollToTop = () => {
    if (lenis.current) {
      lenis.current.scrollTo(0, { duration: 0.6 })
    }
  }

  return (
    <div onClick={scrollToTop} className={`progress-wrap ${scrolled > 150 ? "active-progress" : ""}`}>
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path
          d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          style={{
            transition: "0s",
            strokeDasharray: "307.919, 307.919",
            strokeDashoffset: scrollHeight > 0 ? 307.919 - (scrolled / scrollHeight) * 307.919 : 307.919,
          }}
        />
      </svg>
    </div>
  )
}
