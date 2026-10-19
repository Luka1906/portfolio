
const random = (seed: number) => {
  const x = Math.sin(seed * 127.1) * 43758.5453;
  return x - Math.floor(x);
};

const stars = Array.from({ length: 65 }, (_, i) => {
  const brightness = random(i + 300);

  return {
    id: i,
    x: random(i + 1) * 100,
    y: random(i + 100) * 80,
    size: brightness > 0.95 ? 4 : brightness > 0.7 ? 2 : 1,
    opacity:
      brightness > 0.95
        ? 0.7
        : brightness > 0.7
          ? 0.6
          : 0.25 + random(i + 400) * 0.2,
  };
});

export default function ScatteredStars() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {stars.map((star) => (
        <span
          key={star.id}
          className={`absolute rounded-full ${
            star.size === 4
              ? "bg-white shadow-[0_0_6px_1px] shadow-white/25"
              : "bg-accent"
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
          }}
        />
      ))}
    </div>
  );
}
