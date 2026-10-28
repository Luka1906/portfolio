import { MapPin } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

import antarcticaImage from "../../assets/antarctica.webp";
import antarcticaMobile from "../../assets/antarctica-mobile.webp";
import penguinImage from "../../assets/penguin.webp";
import penguinCursor from "../../assets/linux.svg";

export default function AboutImage() {
  const [showPenguin, setShowPenguin] = useState(false);

  const imageBaseClasses = "absolute inset-0 h-full w-full object-cover";

  return (
    <section className="w-full px-4 flex justify-center">
      <div className="flex w-full max-w-[580px] flex-col gap-2.5 overflow-hidden rounded-xl border border-border p-3 sm:p-4">
        {/* Image container */}
        <div className="relative aspect-548/658 w-full overflow-hidden rounded-xl contrast-105 brightness-115">
          <motion.img
            src={antarcticaImage}
            srcSet={`${antarcticaMobile} 1200w, ${antarcticaImage} 2000w`}
            sizes="(max-width: 640px) calc(100vw - 56px), 548px"
            alt="Luka in Antarctica"
            loading="lazy"
            decoding="async"
            className={`${imageBaseClasses} object-[35%_center]`}
            initial={false}
            animate={{
              opacity: showPenguin ? 0 : 1,
              scale: showPenguin ? 1.03 : 1,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />

          <motion.img
            src={penguinImage}
            alt="Penguin in Antarctica"
            decoding="async"
            loading="lazy"
            className={`${imageBaseClasses} object-[50%_47%]`}
            initial={false}
            animate={{
              opacity: showPenguin ? 1 : 0,
              scale: showPenguin ? 1.18 : 1.22,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Bottom information */}
        <div className="flex min-w-0 items-center justify-between gap-3 px-1 py-2">
          <div className="min-w-0">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />

              <p className="text-sm sm:text-base">
                <span className="font-medium text-white">Antarctica</span>

                <span className="text-secondary-text">
                  {" "}
                  · New Year's Day 2026
                </span>
              </p>
            </div>

            <p className="ml-1.5 mt-1 text-xs italic text-secondary-text sm:text-sm">
              {showPenguin ? "Found some locals." : "A long way from Chicago."}
            </p>
          </div>

          {/* Penguin toggle */}
          <button
            type="button"
            onClick={() => {
              setShowPenguin((prev) => !prev);
            }}
            aria-label={
              showPenguin ? "Show Antarctica portrait" : "Show penguin photo"
            }
            aria-pressed={showPenguin}
            style={{
              cursor: `url("${penguinCursor}") 16 16, pointer`,
            }}
            className={`
              relative
              flex h-10 w-10 shrink-0
              items-center justify-center
              rounded-full
              border-2
              bg-accent/5
              transition-all duration-300
              hover:scale-110
              hover:border-solid
              hover:border-accent
              hover:bg-accent/10
              ${
                showPenguin
                  ? "border-solid border-accent"
                  : "border-dotted border-accent/70"
              }
            `}
          >
            {!showPenguin && (
              <span className="absolute h-5 w-5 animate-ping rounded-full bg-accent/30" />
            )}

            <span className="relative h-3 w-3 rounded-full bg-accent shadow-[0_0_10px_currentColor]" />
          </button>
        </div>
      </div>
    </section>
  );
}
