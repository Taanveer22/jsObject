const actor = {
  name: "shakib khan",
  position: 1,
  team: "dhaka capitals",
  isMarried: true,
  wives: ["apu", "bubli"],
  hitCinema: [2016, 2018, 2022, 2024],
  movies: [
    { name: "shikari", year: 2016 },
    { name: "toofan", year: 2024 },
  ],
  acting: function banglaCinema() {
    console.log("bangladesh and west bengal bangla cinema");
  },
  car: {
    brand: "ferrari",
    made: 2020,
    color: "yellow",
    manufacturer: {
      country: "italia",
      founded: 1947,
      creates: ["supercar", "racingcar", "simplecar"],
    },
  },
};

console.log(actor);
console.log(actor.movies);
console.log(actor.acting);
console.log(actor.acting());
console.log(actor.car);
console.log(actor.car.manufacturer);
console.log(actor.car.manufacturer.creates);
console.log(actor.car.manufacturer.creates[1]);
