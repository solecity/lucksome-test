export const getRandomId = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const nest_array = (array, mask, skip) => {
  var nested = [];
  var start = 0;
  var end = skip;

  for (let i = 0; i < mask.length; i++) {
    nested.push(array.slice(start, end));

    start += skip;
    end += skip;
  }

  return nested;
};
