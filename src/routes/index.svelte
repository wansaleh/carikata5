<script lang="ts">
  import malayWords from '$lib/data/words.json';

  const green = '#67a561';
  const yellow = '#c3ae55';
  const grey = '#74787a';

  let good = '';
  let bad = '';
  let letter1 = '';
  let letter2 = '';
  let letter3 = '';
  let letter4 = '';
  let letter5 = '';

  $: good = good.toUpperCase();
  $: bad = bad.toUpperCase();
  $: letter1 = letter1.toUpperCase();
  $: letter2 = letter2.toUpperCase();
  $: letter3 = letter3.toUpperCase();
  $: letter4 = letter4.toUpperCase();
  $: letter5 = letter5.toUpperCase();

  let results = malayWords;

  function search() {
    results = malayWords;

    if (good) {
      const goodLtrs = good.split('');
      results = results.filter((word) => {
        let out = true;
        goodLtrs.forEach((ltr) => {
          if (!word.toLowerCase().includes(ltr.toLowerCase())) {
            out = out && false;
          }
        });

        return out;
      });
    }

    if (bad) {
      const badLtrs = bad.split('');
      results = results.filter((word) => {
        let out = true;
        badLtrs.forEach((ltr) => {
          if (word.toLowerCase().includes(ltr.toLowerCase())) {
            out = out && false;
          }
        });

        return out;
      });
    }

    if (letter1) {
      results = results.filter(
        (word) => word[0].toLowerCase() === letter1.toLowerCase()
      );
    }
    if (letter2) {
      results = results.filter(
        (word) => word[1].toLowerCase() === letter2.toLowerCase()
      );
    }
    if (letter3) {
      results = results.filter(
        (word) => word[2].toLowerCase() === letter3.toLowerCase()
      );
    }
    if (letter4) {
      results = results.filter(
        (word) => word[3].toLowerCase() === letter4.toLowerCase()
      );
    }
    if (letter5) {
      results = results.filter(
        (word) => word[4].toLowerCase() === letter5.toLowerCase()
      );
    }
  }
</script>

<div class="layout text-center my-24">
  <h1 class="lg:text-5xl relative text-4xl font-semibold tracking-tight">
    <span>Katapat Helper</span>
  </h1>

  <h2 class="block text-3xl font-light mt-2">
    Jumlah perkataan 5 huruf diindeks: {malayWords.length}
  </h2>

  <div class="mt-10">
    <div class="mb-4">
      <div class="mb-2 font-bold">
        <label for="good" class="bg-worldeYellow text-white py-1 px-2">
          Huruf-huruf bagus
        </label>
      </div>
      <div>
        <input
          id="good"
          type="text"
          bind:value={good}
          class="bg-transparent border p-3 text-2xl rounded"
        />
      </div>
    </div>

    <div class="mb-4">
      <div class="mb-2 font-bold">
        <label for="bad" class="bg-worldeGray text-white py-1 px-2">
          Huruf-huruf tidak bagus
        </label>
      </div>
      <div>
        <input
          id="bad"
          type="text"
          bind:value={bad}
          class="bg-transparent border p-3 text-2xl rounded"
        />
      </div>
    </div>

    <div class="mb-4">
      <div class="mb-2 font-bold">
        <span class="bg-worldeGreen text-white py-1 px-2">
          Posisi huruf hijau
        </span>
      </div>
      <div class="flex gap-2 justify-center">
        <input
          id="letter1"
          type="text"
          bind:value={letter1}
          class="bg-transparent border p-3 text-2xl rounded w-[2.5em] text-center"
        />
        <input
          id="letter2"
          type="text"
          bind:value={letter2}
          class="bg-transparent border p-3 text-2xl rounded w-[2.5em] text-center"
        />
        <input
          id="letter3"
          type="text"
          bind:value={letter3}
          class="bg-transparent border p-3 text-2xl rounded w-[2.5em] text-center"
        />
        <input
          id="letter4"
          type="text"
          bind:value={letter4}
          class="bg-transparent border p-3 text-2xl rounded w-[2.5em] text-center"
        />
        <input
          id="letter5"
          type="text"
          bind:value={letter5}
          class="bg-transparent border p-3 text-2xl rounded w-[2.5em] text-center"
        />
      </div>
    </div>

    <div class="mt-10">
      <button
        class="border-2 border-current py-2 px-8 rounded-lg text-3xl"
        on:click={search}
      >
        Cari
      </button>
    </div>

    <div class="mt-10 flex gap-2 flex-wrap">
      {#each results as result}
        <span>{result}</span>
      {/each}
    </div>
  </div>
</div>
