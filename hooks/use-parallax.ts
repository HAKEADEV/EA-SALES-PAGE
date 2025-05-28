"use client"

import { useEffect } from "react"

export function useParallax() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll("[data-parallax]")

      parallaxElements.forEach((element) => {
        const htmlElement = element as HTMLElement
        const speed = Number.parseFloat(htmlElement.getAttribute("data-parallax") || "0.5")
        const yPos = -(scrolled * speed)
        htmlElement.style.transform = `translateY(${yPos}px)`
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
}
