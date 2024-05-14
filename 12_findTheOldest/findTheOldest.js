const findTheOldest = function(people) {
  
  function getAge(person) {
    let age;
    if (!person.yearOfDeath) {
      age = new Date().getFullYear() - person.yearOfBirth;
      } else {
      age = person.yearOfDeath - person.yearOfBirth;
      }
    
    return age;  
    }
  
  const oldest = people.sort((a,b) => getAge(a) > getAge(b) ? -1 : 1);
  
  return oldest[0];

};

// Do not edit below this line
module.exports = findTheOldest;
