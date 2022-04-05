import Cheerio from 'cheerio';
import fetch from 'node-fetch';
import fs from 'fs';

const letters = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

let allWords = [];

await Promise.all(
  letters.map(async (letter) => {
    const html = await fetch(
      `https://ms.wiktionary.org/wiki/Wiktionary:Senarai_perkataan_${letter}`
    ).then((res) => res.text());

    const $ = Cheerio.load(html);

    const words = $('.mw-parser-output > div > table div > ul > li')
      .map((i, el) => {
        return $(el)
          .text()
          .trim()
          .split(/\n|,\s?/);
      })
      .get()
      .flat()
      .filter((word) => word.length === 5);

    allWords = allWords.concat(words);
  })
);

const sorted = allWords.sort((a, b) => a.localeCompare(b));

fs.writeFileSync('./data/words.json', JSON.stringify(sorted, null, 2));

console.log('done');
