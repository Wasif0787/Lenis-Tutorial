const lenis = new Lenis({
    // infinite: true,
    // duration: 11.5
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf) // This will run the raf function everytime
}

requestAnimationFrame(raf) // Run the raf function everytime

gsap.registerPlugin(ScrollTrigger)

document.querySelectorAll(".elem").forEach(elem => {
    const image = elem.querySelector("img")
    const tl = gsap.timeline()

    const xTransform = gsap.utils.random(-100, 100)
    tl
        .set(image, {
            transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
        }, "start")
        .to(image, {
            scale: 0,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        }, "start")
        .to(elem, {
            xPercent: xTransform,
            ease: "none",
            scrollTrigger: {
                trigger: image,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        })
})