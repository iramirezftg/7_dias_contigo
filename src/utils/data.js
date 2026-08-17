export const userData = {
  name: "Valeria",
  age: 24,
  zodiac: "Aries",
  distance: 1042,
  targetDate: "2026-10-01T00:00:00", // Oct 1, 2026
  password: "mi niño" // We'll lowercase the input to compare
};

export const surprises = [
  {
    day: 1,
    title: "Para cuando me extrañes",
    unlockAt: "2026-08-17T00:00:00",
    type: "letter",
    description: "Una pequeña nota para empezar..."
  },
  {
    day: 2,
    title: "Quiero que escuches esto",
    unlockAt: "2026-08-18T00:00:00",
    type: "audio",
    description: "🎧 Ponte audífonos"
  },
  {
    day: 3,
    title: "Cosas que amo de ti",
    unlockAt: "2026-08-19T00:00:00",
    type: "cards",
    description: "Razones por las que me encantas"
  },
  {
    day: 4,
    title: "Nuestra historia",
    unlockAt: "2026-08-20T00:00:00",
    type: "timeline",
    description: "Cómo llegamos hasta aquí"
  },
  {
    day: 5,
    title: "Hoy tenemos una cita",
    unlockAt: "2026-08-21T00:00:00",
    type: "date",
    description: "Reserva tu noche a las 10pm"
  },
  {
    day: 6,
    title: "Tengo algo para ti",
    unlockAt: "2026-08-22T00:00:00",
    type: "gift",
    description: "Revisa la puerta en 3... 2... 1..."
  },
  {
    day: 7,
    title: "Si llegaste hasta aquí...",
    unlockAt: "2026-08-23T00:00:00",
    type: "video",
    description: "Quiero verte"
  }
];

export const isUnlocked = (dateString) => {
  return new Date() >= new Date(dateString);
};

export const getTimeRemaining = (dateString) => {
  const target = new Date(dateString);
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) return null;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);

  return { days, hours, minutes };
};
