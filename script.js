const spaceAge = (seconds) => {
  // Earth years, 365.25 Earth days or:
  const EARTHYEARSSECONDS = 31557600;
  const yearEarth = seconds / EARTHYEARSSECONDS;
  const yearMultiplier = {
      Mercury: 0.2408467,
      Venus: 0.61519726,
      Earth: 1,
      Mars: 1.8808158,
      Jupiter: 11.862615,
      Saturn: 29.447498,
      Uranus: 84.016846,
      Neptune: 164.79132,
  };

const yearsInAllPlanets = {
  Mercury: 0,
  Venus: 0,
  Earth: 0,
  Mars: 0,
  Jupiter: 0,
  Saturn: 0,
  Uranus: 0,
  Neptune: 0,
}
  Object.keys(yearsInAllPlanets).forEach((planet) => {
      yearsInAllPlanets[planet] = (yearEarth / yearMultiplier[planet]).toFixed(2); 
  })

return yearsInAllPlanets
}

console.log(spaceAge(Math.round(81281621)))
