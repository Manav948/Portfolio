import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const BOX_COUNT = 9;

const PageLoader = ({ onComplete, duration = 2300 }) => {
  const rootRef = useRef(null);
  const overlayRef = useRef(null);
  const labelRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray(".loader-box");

      gsap.set(boxes, {
        y: 96,
        opacity: 0.35,
        scaleY: 0.65,
      });

      const loopTl = gsap.timeline({ repeat: -1, defaults: { ease: "power2.inOut" } });

      loopTl.to(boxes, {
        y: -96,
        opacity: 1,
        scaleY: 1,
        scaleX: 1.04,
        stagger: {
          each: 0.06,
          from: "center",
          yoyo: true,
          repeat: 1,
        },
        duration: 0.9,
      });

      gsap.fromTo(
        labelRef.current,
        { y: 14, opacity: 0.2, letterSpacing: "0.08em" },
        {
          y: 0,
          opacity: 0.9,
          letterSpacing: "0.26em",
          repeat: -1,
          yoyo: true,
          duration: 0.95,
          ease: "sine.inOut",
        }
      );

      gsap.delayedCall(duration / 1000, () => {
        loopTl.kill();
        gsap.timeline({
          onComplete: () => {
            onComplete?.();
          },
        })
          .to(boxes, {
            y: -220,
            opacity: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "power4.in",
          })
          .to(
            labelRef.current,
            {
              y: -24,
              opacity: 0,
              duration: 0.3,
              ease: "power2.in",
            },
            "<0.05"
          )
          .to(
            overlayRef.current,
            {
              yPercent: -100,
              duration: 0.8,
              ease: "power4.inOut",
            },
            "-=0.05"
          );
      });
    }, rootRef);

    return () => ctx.revert();
  }, [duration, onComplete]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return (
    <div ref={rootRef} className="loader-root fixed inset-0 z-120 pointer-events-auto">
      <div ref={overlayRef} className="loader-overlay absolute inset-0 bg-black" />

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8">
        <div className="loader-box-row flex items-end gap-2.5 sm:gap-4">
          {Array.from({ length: BOX_COUNT }).map((_, idx) => (
            <span
              key={idx}
              className="loader-box block h-10 w-3 rounded-[3px] bg-linear-to-b from-cyan-200 via-cyan-300 to-violet-400 shadow-[0_0_18px_rgba(121,214,255,0.35)] sm:h-14 sm:w-4"
            />
          ))}
        </div>
        <p ref={labelRef} className="text-xs sm:text-sm uppercase text-[#dce3ff]">
          Loading Experience
        </p>
      </div>
    </div>
  );
};

export default PageLoader;
