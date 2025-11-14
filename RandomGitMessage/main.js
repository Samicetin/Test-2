let horiscopes = (str1, str2) => {
    return `Today you are the ${str1} !\nTomorrow you'll have a ${str2} day!`
}

const today = () => {
  const Bases = ['Moon', 'Sun', 'Jupiter', 'Uranus'];
  return Bases[Math.floor(Math.random() * Bases.length)];
};

const tomorrow = () => {
  const Bases = ['Lucky', 'Unlucky', 'Okay', 'horrible'];
  return Bases[Math.floor(Math.random() * Bases.length)];
};

console.log(horiscopes(today(),tomorrow()))
