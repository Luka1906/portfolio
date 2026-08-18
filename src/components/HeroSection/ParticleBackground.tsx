import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

const particlesInit = async (engine: Engine) => {
  await loadSlim(engine);
};

export default function ParticleBackground() {
  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,

      fullScreen: {
        enable: false,
        zIndex: -1
      },

      background: {
        color: "transparent",
      },

      detectRetina: true,

      particles: {
        number: {
          value: 55,
          density: {
            enable: true,
          },
        },

        paint: {
          fill: {
            enable: true,
            color: {
              value: ["#6C8CFF", "#8FA7FF", "#B1BEFF"],
            },
          },
        },

        opacity: {
          value: {
            min: 0.15,
            max: 0.8,
          },
          animation: {
            enable: true,
            speed: 0.25,
            sync: false,
          },
        },

        size: {
          value: {
            min: 0.8,
            max: 4,
          },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },

        move: {
          enable: true,
          speed: {
            min: 0.12,
            max: 0.35,
          },
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
      },
interactivity: {
  events: {
    onHover: {
      enable: true,
      mode: "repulse",
    },
  },

  modes: {
    repulse: {
      distance: 70,
      duration: 0.4,
    },
  },
},
    }),
    [],
  );

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="tsparticles"
        className="absolute inset-0"
        options={options}
      />
    </ParticlesProvider>
  );
}