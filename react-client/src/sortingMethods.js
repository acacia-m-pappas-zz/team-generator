module.exports = {
  random: (students, size) => {
    var shuffled = shuffle(students);
    var result = [];
    while (shuffled.length > 0)
    result.push(shuffled.splice(0, size));
    return result;
  }
}

function shuffle(array) {
  var copy = [], n = array.length, i;
  while (n) {
    i = Math.floor(Math.random() * array.length);
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }
  return copy;
}

