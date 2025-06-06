tsParticles.load("tsparticles", {
    fullScreen: { enable: true },
    particles: {
      number: {
        value: 150,
        density: {
          enable: true,
          area: 800
        }
      },
      color: { value: "#ffffff" },
      opacity: {
        value: 0.5,
        random: true
      },
      size: {
        value: { min: 2, max: 4 },
        random: true
      },
      move: {
        enable: true,
        speed: 1,
        direction: "top", // 👈 faz as partículas subirem
        outModes: {
          default: "out" // desaparecem ao sair da tela
        }
      }
    },
    background: {
      color: "transparent"
    }
  });