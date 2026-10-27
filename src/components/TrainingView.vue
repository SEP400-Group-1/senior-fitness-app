<script setup>

import {nextTick, ref} from 'vue'

const Trainings = [
  ["Stols Träning", [
    'Tryck dina händer mot armstöden och lyft din kropp några centimeter upp från stolen',
    'Håll positionen i 1-2 sekunder',
    'Sänk dig långsamt tillbaka till utgångsställningen',
    'Andas ut när du lyfter, andas in när du sänker'
  ]],
  ["Sittande knälyft", [
    'Sitt upprätt längst fram på stolen med fötterna i golvet och ryggen rak',
    'Lyft ett knä långsamt mot bröstet utan att luta dig bakåt',
    'Håll positionen i 1-2 sekunder',
    'Sänk foten långsamt tillbaka till golvet och byt ben',
    'Andas ut när du lyfter, andas in när du sänker'
  ]],
  ["Axelrullningar", [
    'Sitt upprätt med armarna avslappnade längs sidorna',
    'Dra axlarna uppåt mot öronen',
    'Rulla axlarna långsamt bakåt och nedåt i en stor cirkel',
    'Upprepa 8-10 gånger och byt sedan riktning och rulla framåt',
    'Andas lugnt och jämnt under hela övningen'
  ]],
  ["Fotledscirklar", [
    'Sitt bekvämt med ryggen mot ryggstödet och lyft ena foten en bit från golvet',
    'Rita långsamt cirklar med foten, 8-10 varv medsols',
    'Byt riktning och gör 8-10 varv motsols',
    'Sätt ner foten och upprepa med andra foten',
    'Håll benet avslappnat och rör bara i fotleden'
  ]]
];

const numberOfWorkouts = Trainings.length;
const completedWorkouts = ref(0);

const increase = () => {
  if (completedWorkouts.value +1 < numberOfWorkouts) {
    completedWorkouts.value++;
    scrollToTop();
  }
};

const decrease = () => {
  if (completedWorkouts.value > 0) {
    completedWorkouts.value--;
    scrollToTop();
  }
};

const isPaused = ref(true)
const scrollArea = ref(null)
const videoEl = ref(null)

const videoLink = "https://www.w3schools.com/tags/mov_bbb.mp4"

async function scrollToTop() {
  await nextTick()
  scrollArea.value?.scrollTo({ top: 0, behavior: 'smooth' })
}

async function togglePlay() {
  const video = videoEl.value
  if (!video) return

  if (video.paused) {
    video.play().catch(() => { isPaused.value = true })
  } else {
    video.pause()
  }

  await scrollToTop()
}
</script>

<template>
  <div class="fixed inset-0 flex flex-col bg-linear-to-t from-orange-400 to-orange-200 text-white px-5 pt-5 pb-5 sm:px-8 md:px-[5vw] lg:px-[5vw]">
    <header class="shrink-0 flex items-center gap-2 p-1">
      <div class="flex-1">
        <p class="mb-1 text-lg font-semibold text-black">
          Övning {{ completedWorkouts + 1 }} av {{ numberOfWorkouts }}
        </p>
        <div class="flex gap-0.5" role="progressbar">
          <div v-for="n in numberOfWorkouts" :key="n" class="h-5 flex-1 rounded-full border-2" :class="n <= completedWorkouts ? 'border-green-800 bg-green-600' : 'border-slate-400 bg-slate-200'"/>
        </div>
      </div>

      <button type="button" class="shrink-0 rounded-full bg-red-700 px-6 py-3 text-xl font-semibold text-white transition hover:bg-red-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black">
        X
      </button>
    </header>

    <!-- Scrollable middle: video + card -->
    <div ref="scrollArea" class="min-h-0 flex-1 overflow-y-auto overscroll-contain">

      <!-- Video wrapper -->
      <div class="relative mb-6 mt-6 rounded-2xl transition-all duration-300" :class="isPaused ? 'h-[15dvh]' : 'h-[70dvh]'" @click="togglePlay">
        <video ref="videoEl" playsinline muted loop class="h-full w-full object-cover rounded-3xl" @play="isPaused = false" @pause="isPaused = true">
          <source :src="videoLink" type="video/mp4" />
        </video>

        <div class="absolute inset-0 flex items-center justify-center rounded-3xl" :class="isPaused ? 'bg-black/50' : ''">
          <button :aria-label="isPaused ? 'Play' : 'Pause'" class="flex size-16 items-center justify-center rounded-full bg-white/80 transition hover:bg-white" :class="isPaused ? '' : 'opacity-0'" type="button">
            <svg class="size-8 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="w-full bg-orange-100 p-4 border-1 border-black rounded-2xl">
        <h1 class="text-center pb-1 text-3xl font-bold text-black sm:text-5xl">
          {{ Trainings[completedWorkouts][0] }}
        </h1>
        <hr class="text-2xl text-black pb-2">
        <ol class="space-y-5">
          <li v-for="(todo, i) in Trainings[completedWorkouts][1]" :key="todo" class="flex items-start gap-3">
            <span class="flex size-7 shrink-0 items-center justify-center rounded-full  text-xl  text-black font-bold sm:size-12 sm:text-2xl">
              {{ i + 1 }}
            </span>
            <span class="text-2xl leading-snug text-black sm:text-3xl">{{ todo }}</span>
          </li>
        </ol>
      </div>
    </div>

    <!-- Training buttons -->
    <footer class="shrink-0 pt-3">
      <button type="button" class="mb-3 w-full rounded-xl border-2 border-blue-950 bg-blue-800 py-3 text-xl font-semibold text-white transition hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black" > Ta En Paus
      </button>
      <div class="flex gap-5">
        <button type="button" class="flex-1 rounded-xl border-2 border-slate-800 bg-white py-3 text-lg font-semibold text-slate-900 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-400" @click="decrease" :disabled="completedWorkouts <= 0">← Föregående
        </button>
        <button type="button" class="flex-1 rounded-xl border-2 border-green-950 bg-green-800 py-3 text-lg font-semibold text-white transition hover:bg-green-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black" @click="increase">Nästa övning →
        </button>
      </div>
    </footer>
  </div>
</template>

<style scoped>
html, body {
  min-height: 100dvh;
  background: #fb923c; /* orange-400 */
}
</style>