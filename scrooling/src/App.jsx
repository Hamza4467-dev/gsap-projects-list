import React, { useEffect } from "react"; // 1. Import useEffect
import gsap from "gsap";

function App() {
  // 1. Define the GSAP timeline outside the useEffect/render scope
  // We'll create it inside useEffect.

  useEffect(() => {
    // 2. Fix GSAP Selector and use the preferred xPercent property for marquee loops
    // This creates the single, infinitely looping animation (the base marquee movement)
    const marqueeTween = gsap.to(".marquee-custom", {
      xPercent: -400, // Assuming 4 items, -100% * 4 items = -400% for full displacement
      duration: 8, // Constant speed
      repeat: -1, // Infinite loop
      ease: "none",
    });

    // 3. Set up the wheel event listener for scroll-based control
    const handleWheel = (dets) => {
      // Logic to control the animation based on scroll direction
      if (dets.deltaY > 0) {
        // Scrolling Down/Forward
        marqueeTween.timeScale(1.5); // Increase speed (move faster to the left)
        gsap.to(".marquee-custom img", { rotate: 180, duration: 0.3 });
        console.log("forward");
      } else {
        // Scrolling Up/Reverse
        marqueeTween.timeScale(-1.5); // Reverse animation and increase speed (move faster to the right)
        gsap.to(".marquee-custom img", { rotate: 0, duration: 0.3 });
        console.log("reverse");
      }
    };

    window.addEventListener("wheel", handleWheel);

    // 4. CLEANUP: This is CRITICAL in React. Remove the listener when the component unmounts.
    return () => {
      window.removeEventListener("wheel", handleWheel);
      marqueeTween.kill(); // Stop the infinite GSAP loop
    };
  }, []); // Run only once on mount

  // NOTE: You must duplicate the inner divs (2x or 3x) for the -400% translation to look seamless.

  return (
    <>
      <div className="h-screen w-full"></div>
      <div className="pagtwo ">
        <div className="bg-[#7CFC00] flex items-center gap-3 overflow-hidden h-[100px]">
          <div className="flex items-center gap-3 shrink-0 marquee-custom ">
            <h1 className="text-5xl font-extrabold">Thrives beyond limits</h1>
            <img className="h-[60px]" src="/arrow-br.svg" alt="Arrow" />
          </div>

          <div className="flex items-center gap-3 shrink-0 marquee-custom">
            <h1 className="text-5xl font-extrabold">Thrives beyond limits</h1>
            <img className="h-[60px]" src="/arrow-br.svg" alt="Arrow" />
          </div>

          <div className="flex items-center gap-3 shrink-0 marquee-custom">
            <h1 className="text-5xl font-extrabold">Thrives beyond limits</h1>
            <img className="h-[60px]" src="/arrow-br.svg" alt="Arrow" />
          </div>

          <div className="flex items-center gap-3 shrink-0 marquee-custom">
            <h1 className="text-5xl font-extrabold">Thrives beyond limits</h1>
            <img className="h-[60px]" src="/arrow-br.svg" alt="Arrow" />
          </div>
          <div className="flex items-center gap-3 shrink-0 marquee-custom">
            <h1 className="text-5xl font-extrabold">Thrives beyond limits</h1>
            <img className="h-[60px]" src="/arrow-br.svg" alt="Arrow" />
          </div>
        </div>
      </div>
      <div className="h-screen w-full"></div>
    </>
  );
}

export default App;
