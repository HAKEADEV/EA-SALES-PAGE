"use client"

import { useEffect } from "react"

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement
          const animationType = element.getAttribute("data-scroll")

          // Remove initial hidden classes
          element.classList.remove("scroll-hidden", "scroll-hidden-left", "scroll-hidden-right", "scroll-hidden-scale")

          // Add appropriate animation class
          switch (animationType) {
            case "slide-up":
              element.classList.add("animate-slide-up")
              break
            case "slide-left":
              element.classList.add("animate-slide-left")
              break
            case "slide-right":
              element.classList.add("animate-slide-right")
              break
            case "scale-in":
              element.classList.add("animate-scale-in")
              break
            case "rotate-in":
              element.classList.add("animate-rotate-in")
              break
            case "bounce-in":
              element.classList.add("animate-bounce-in")
              break
            case "counter-up":
              element.classList.add("animate-counter-up")
              animateCounter(element)
              break
            default:
              element.classList.add("animate-slide-up")
          }

          // Stop observing this element
          observer.unobserve(element)
        }
      })
    }, observerOptions)

    // Observe all elements with scroll animation attributes
    const animatedElements = document.querySelectorAll("[data-scroll]")
    animatedElements.forEach((element) => {
      observer.observe(element)
    })

    // Cleanup observer on unmount
    return () => {
      observer.disconnect()
    }
  }, [])
}

function animateCounter(element: HTMLElement) {
  const counterElement = element.querySelector("[data-counter]") as HTMLElement
  if (!counterElement) return

  const target = Number.parseInt(counterElement.getAttribute("data-counter") || "0")
  const duration = 2000 // 2 seconds
  const increment = target / (duration / 16) // 60fps
  let current = 0

  const timer = setInterval(() => {
    current += increment
    if (current >= target) {
      current = target
      clearInterval(timer)
    }

    // Format the number based on the target
    if (target === 47.3) {
      counterElement.textContent = `+${current.toFixed(1)}`
    } else {
      counterElement.textContent = Math.floor(current).toString()
    }
  }, 16)
}
