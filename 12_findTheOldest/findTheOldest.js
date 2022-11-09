const findTheOldest = function(people) {
  const date = new Date();
  const age = [];
  let oldest;
  
  for(let i = 0; i < people.length; i++) {
    let birth = people[i].yearOfBirth;
    let death = people[i].yearOfDeath || date.getFullYear();
    age[i] = death - birth;
  }
  oldest = age.indexOf(Math.max(...age));
  return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
