const START_COUNT = 45;

function createStars(side: "left" | "right") {
    const starsArr = Array.from({length: START_COUNT}, (_, index) => {
        const top = (index * 37) % 100;
        const edgePosition = (index * 19) % 85;
        const size = index % 7 === 0 ? 3 : index % 3 === 0 ? 2 : 1;
        const opacity = 0.25 + ((index * 13) % 55) / 100

          return (
        <span
         key={`${side}-${index}`}
         className="absolute rounded-full bg-accent"
         style={{
            top: `${top}%`,
            [side]: `${edgePosition}%`,
            width: `${size}px`,
            height: `${size}px`,
            opacity

         }}
        
        >

        </span>
    )
    });

    return starsArr
  
};

export function EdgeStars () {
    return (
        <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden" 
        >
            <div className="edge-stars absolute inset-y-0 left-0 w-[12vw] min-w-24">
                {createStars("left")}
            </div>

            <div className="edge-stars absolute inset-y-0 right-0 w-[12vw] min-w-24">
                {createStars("right")}
            </div>
            
        </div>
    )
}

