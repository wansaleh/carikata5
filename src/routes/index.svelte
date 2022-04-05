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

  let results = malayWords;

  function search() {
    results = malayWords;

    if (good) {
      const goodLtrs = good.split('').map((ltr) => ltr.toLowerCase());
      results = results.filter((word) => {
        let out = true;
        goodLtrs.forEach((ltr) => {
          if (!word.includes(ltr)) {
            out = out && false;
          }
        });

        return out;
      });
    }

    if (bad) {
      const badLtrs = bad.split('').map((ltr) => ltr.toLowerCase());
      results = results.filter((word) => {
        let out = true;
        badLtrs.forEach((ltr) => {
          if (word.includes(ltr)) {
            out = out && false;
          }
        });

        return out;
      });
    }

    if (letter1) {
      results = results.filter((word) => word[0] === letter1);
    }
    if (letter2) {
      results = results.filter((word) => word[1] === letter2);
    }
    if (letter3) {
      results = results.filter((word) => word[2] === letter3);
    }
    if (letter4) {
      results = results.filter((word) => word[3] === letter4);
    }
    if (letter5) {
      results = results.filter((word) => word[4] === letter5);
    }
  }
</script>

<div class="layout text-center my-24">
  <h1 class="lg:text-5xl relative text-4xl font-semibold tracking-tight">
    <span>Pembantu Katapat (Game 5 huruf)</span>
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
