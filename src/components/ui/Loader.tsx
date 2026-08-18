import {motion} from "motion/react"

interface LoaderProps {
    isFading: boolean
}
function Loader({isFading}:LoaderProps) {
  return (
   <div
      className={`
        fixed inset-0 flex items-center justify-center bg-background
        transition-opacity duration-400
        ${isFading ? "opacity-0" : "opacity-100"}
      `}
    >
      <div className="relative flex h-56 w-56 items-center justify-center rounded-full border border-border">

        <div className="absolute inset-0 animate-spin [animation-duration:3s]">
          <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent text-accent shadow-[0_0_10px_currentColor]" />
        </div>

        <div className="flex items-center font-display text-[80px]">
          <span className="font-extrabold text-white">LM</span>
          <span className="mb-1.5 text-[90px] text-accent">.</span>
        </div>

      </div>
    </div>
  );
}

export default Loader;
