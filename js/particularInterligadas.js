tsParticles.load("tsparticles", {
  fullScreen: { enable: true, zIndex: -1 },
  particles: {
    number: { value: 100 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: {
      value: 0.6,
      random: true
    },
    size: {
      value: 2,
      random: true
    },
    move: {
      enable: true,
      speed: 1
    },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.3,
      width: 1
    }
  }
});