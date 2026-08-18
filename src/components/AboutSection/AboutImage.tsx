import { MapPin } from "lucide-react";
import { useState } from "react";

import antarcticaImage from "../../assets/antarctica.jpeg";
import penguinImage from "../../assets/penguin.jpeg";
import penguinCursor from "../../assets/linux.svg";

export default function AboutImage() {
  const [showPenguin, setShowPenguin] = useState(false);

  const imageBaseClasses =
    "absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out";

  return (
    <section className="px-4">
      <div className="flex h-[760px] w-[580px] flex-col gap-2.5 overflow-hidden rounded-xl border border-border p-4">
        <div className="relative h-[658px] w-full overflow-hidden rounded-xl">
          <img
            src={antarcticaImage}
            alt="Luka in Antarctica"
            className={`${imageBaseClasses} object-[35%_center] ${
              showPenguin ? "opacity-0" : "opacity-100"
            }`}
          />

          <img
            src={penguinImage}
            alt="Penguin in Antarctica"
            className={`${imageBaseClasses} scale-[1.18] object-[50%_47%] ${
              showPenguin ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        <div className="flex flex-1 items-center justify-between px-1">
          <div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />

              <p>
                <span className="font-medium text-white">Antarctica</span>
                <span className="text-secondary-text">
                  {" "}
                  · New Year's Day 2026
                </span>
              </p>
            </div>

            <p className="ml-1.5 mt-1 text-sm italic text-secondary-text">
              {showPenguin ? "Found some locals." : "A long way from Chicago."}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowPenguin((prev) => !prev)}
            aria-label={
              showPenguin
                ? "Show original Antarctica photo"
                : "Reveal surprise"
            }
            style={{
              cursor: `url("${penguinCursor}") 16 16, pointer`,
            }}
            className={`
              relative
              flex h-10 w-10
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