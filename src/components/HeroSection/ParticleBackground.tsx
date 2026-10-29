const random = (seed: number) => {
  const value = Math.sin(seed * 127.1) * 43758.5453;
  return value - Math.floor(value);
};

const stars = Array.from({ length: 250 }, (_, i) => {
  const x = random(i + 1) * 100;
  const y = random(i + 100) * 100;

  return {
    x,
    y,
   size: 1 + random(i + 200) * 3,
opacity: 0.3 + random(i + 300) * 0.5,
    duration: 4 + random(i + 400) * 5,
    delay: random(i + 500) * -8,
  };
})
  .filter(
    ({ x, y }) =>
      !(x > 5 && x < 40 && y > 12 && y < 85) &&
      !(x > 50 && x < 94 && y > 12 && y < 88),
  )
  .slice(0, 45);

export default function ParticleBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block"
    >
      {stars.map((star, index) => (
        <span
          key={index}
          className="particle-star absolute rounded-full bg-accent"
          style={
            {
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              "--star-opacity": star.opacity,
              animationDuration: `${star.duration}s`,
              animationDelay: `${star.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}