const STAR_COUNT = 45;

function createStars(side: "left" | "right") {
  return Array.from({ length: STAR_COUNT }, (_, index) => {
    const top = (index * 37) % 100;
    const edgePosition = (index * 19) % 85;

    const isGlowing = index % 17 === 0;

    const size = isGlowing
      ? 3
      : index % 7 === 0
        ? 3
        : index % 3 === 0
          ? 2
          : 1;

    const opacity = isGlowing
      ? 0.85
      : 0.25 + ((index * 13) % 55) / 100;

    return (
      <span
        key={`${side}-${index}`}
        className="absolute rounded-full bg-accent"
        style={{
          top: `${top}%`,
          [side]: `${edgePosition}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          boxShadow: isGlowing
            ? "0 0 6px 1px rgba(147,197,253,0.25)"
            : "none",
        }}
      />
    );
  });
}

export function EdgeStars() {
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
  );
}