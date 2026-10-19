const STAR_COUNT = 120;

function createStars() {
  return Array.from({ length: STAR_COUNT }, (_, index) => {
    const left = (index * 47 + 11) % 100;
    const top = (index * 29 + (index % 4) * 13) % 100;

    const size =
      index % 11 === 0 ? 3 :
      index % 4 === 0 ? 2 :
      1;

    const opacity = 0.2 + ((index * 17) % 50) / 100;

    return (
      <span
        key={index}
        className="absolute rounded-full bg-accent"
        style={{
          left: `${left}%`,
          top: `${top}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
        }}
      />
    );
  });
}

export function HorizontalStars() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
    >
      <div className="absolute inset-x-0 -bottom-32 h-20">
        {createStars()}
      </div>
    </div>
  );
}

