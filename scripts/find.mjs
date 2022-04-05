import { readFile } from 'fs/promises';
const words = JSON.parse(
  await readFile(new URL('../data/words.json', import.meta.url))
);

console.log(
  words.filter(
    (word) =>
      word.toLowerCase().includes('l') &&
      word.toLowerCase().includes('a') &&
      word.toLowerCase()[0] !== 'a' &&
      word.toLowerCase()[1] !== 'a' &&
      word.toLowerCase()[3] !== 'a' &&
      word.toLowerCase()[0] !== 'l' &&
      word.toLowerCase()[2] !== 'l' &&
      !word.toLowerCase().includes('w') &&
      !word.toLowerCase().includes('k') &&
      !word.toLowerCase().includes('t') &&
      !word.toLowerCase().includes('u') &&
      !word.toLowerCase().includes('m') &&
      !word.toLowerCase().includes('b') &&
      !word.toLowerCase().includes('i') &&
      !word.toLowerCase().includes('e') &&
      // !word.toLowerCase().includes('l') &&
      // !word.toLowerCase().includes('p') &&
      // !word.toLowerCase().includes('j') &&
      !word.toLowerCase().includes('n')
  )
);
