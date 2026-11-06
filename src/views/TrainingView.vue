<script setup>
import {computed, nextTick, onBeforeUnmount, onMounted, ref} from 'vue'

import TrainingWorkoutAmountPill from '@/components/TrainingWorkoutAmountPill.vue'

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
  if (completedWorkouts.value + 1 < numberOfWorkouts) {
    completedWorkouts.value++;
    resetTimer();
    scrollToTop();
  }
};

const decrease = () => {
  if (completedWorkouts.value > 0) {
    completedWorkouts.value--;
    resetTimer();
    scrollToTop();
  }
};

// ---------- Timer ----------
const exerciseSeconds = 60
const timeLeft = ref(exerciseSeconds)
const timerState = ref('idle') // 'idle' | 'running' | 'paused' | 'done'
let intervalId = null

const ringLength = 2 * Math.PI * 44
const ringOffset = computed(() => ringLength * (1 - timeLeft.value / exerciseSeconds))

const timeText = computed(() => {
  const m = Math.floor(timeLeft.value / 60)
  const s = String(timeLeft.value % 60).padStart(2, '0')
  return `${m}:${s}`
})

const timerButtonText = computed(() => {
  if (timerState.value === 'running') return 'Ta en paus'
  if (timerState.value === 'paused') return 'Fortsätt'
  if (timerState.value === 'done') return 'Starta om'
  return 'Starta Passet!'
})

const statusText = computed(() => {
  if (timerState.value === 'running') return 'Pågår...'
  if (timerState.value === 'paused') return 'Pausad'
  if (timerState.value === 'done') return 'Bra jobbat!'
  return 'Pausad'
})

const timerButtonClass = computed(() => {
  if (timerState.value === 'running') return 'bg-amber-300 text-amber-950 shadow-amber-300/50 hover:bg-amber-200'
  return 'bg-orange-600 text-white shadow-orange-600/40 hover:bg-orange-500'
})

function stopInterval() {
  clearInterval(intervalId)
  intervalId = null
}

function startTimer() {
  if (timerState.value === 'done') timeLeft.value = exerciseSeconds
  timerState.value = 'running'
  stopInterval()
  intervalId = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      timeLeft.value = 0
      stopInterval()
      timerState.value = 'done'
      navigator.vibrate?.(300)
    }
  }, 1000)
}

function pauseTimer() {
  stopInterval()
  timerState.value = 'paused'
}

function toggleTimer() {
  if (timerState.value === 'running') pauseTimer()
  else startTimer()
}

function resetTimer() {
  stopInterval()
  timeLeft.value = exerciseSeconds
  timerState.value = 'idle'
}
// ---------------------------

// ---------- Video pop-up ----------
const videoOpen = ref(false)
const modalVideoEl = ref(null)

const videoLink = "https://www.w3schools.com/tags/mov_bbb.mp4"

async function openVideo() {
  videoOpen.value = true
  await nextTick()
  modalVideoEl.value?.play().catch(() => {})
}

function closeVideo() {
  modalVideoEl.value?.pause()
  videoOpen.value = false
}

function onKeydown(e) {
  if (e.key === 'Escape' && videoOpen.value) closeVideo()
}

onMounted(() => window.addEventListener('keydown', onKeydown))

onBeforeUnmount(() => {
  stopInterval()
  window.removeEventListener('keydown', onKeydown)
})
// ---------------------------

const scrollArea = ref(null)

async function scrollToTop() {
  await nextTick()
  scrollArea.value?.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="fixed inset-0 flex flex-col bg-linear-to-t from-orange-200 to-white text-white px-5 pt-5 pb-5 sm:px-8 md:px-[5vw] lg:px-[5vw]">
    <header class="shrink-0">
      <div class="flex items-center justify-between gap-3">
        <p class="text-sm font-bold uppercase tracking-[0.15em] text-orange-900">
          Övning {{ completedWorkouts + 1 }} av {{ numberOfWorkouts }}
        </p>

        <button type="button" class="shrink-0 rounded-full bg-red-500 px-4 py-2 text-base font-semibold text-white shadow-sm transition hover:bg-red-600 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400">
          Avsluta Träning
        </button>
      </div>

      <TrainingWorkoutAmountPill class="mt-3" :completed="completedWorkouts" :total="numberOfWorkouts" />

      <div class="mt-5 flex flex-row items-end justify-between gap-3">
        <h1 class="min-w-0 flex-1 text-3xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl">
          {{ Trainings[completedWorkouts][0] }}
        </h1>

        <div class="flex shrink-0 flex-row items-center gap-3 rounded-full bg-white py-2 pl-2 pr-5 shadow-md ring-1 ring-stone-900/5">
          <!-- Timer -->
          <div class="relative size-14 shrink-0">
            <svg class="size-14 -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke-width="10" class="stroke-orange-100" />
              <circle cx="50" cy="50" r="44" fill="none" stroke-width="10" stroke-linecap="round" :stroke-dasharray="ringLength" :stroke-dashoffset="ringOffset" class="transition-[stroke-dashoffset] duration-1000 ease-linear" :class="timerState === 'done' ? 'stroke-green-600' : 'stroke-orange-600'" />
            </svg>
            <span class="absolute inset-0 flex items-center justify-center text-base font-bold tabular-nums text-stone-900">
              {{ timeText }}
            </span>
          </div>

          <div class="flex flex-row items-center gap-3">
            <span class="sr-only">Tid kvar</span>
            <p class="text-lg font-bold leading-tight" :class="timerState === 'done' ? 'text-green-700' : 'text-stone-900'">
              {{ statusText }}
            </p>
            <button v-if="timerState === 'paused'" type="button" class="text-base font-semibold text-orange-800 underline underline-offset-4" @click="resetTimer">Nollställ</button>
          </div>
        </div>
      </div>
    </header>

    <div ref="scrollArea" class="min-h-0 flex-1 overflow-y-auto overscroll-contain pb-2">
      <!-- Video preview card, opens the pop-up -->
      <button type="button" class="mt-4 flex w-full items-center gap-4 rounded-3xl bg-white p-2.5 text-left shadow-sm transition active:scale-[0.99] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400" aria-label="Öppna video" @click="openVideo">
        <span class="relative block h-16 w-28 shrink-0 overflow-hidden rounded-2xl bg-stone-800">
          <video playsinline muted preload="metadata" class="h-full w-full object-cover" :src="videoLink + '#t=0.1'"></video>
          <span class="absolute inset-0 flex items-center justify-center bg-stone-900/30">
            <span class="flex size-9 items-center justify-center rounded-full bg-white/95 shadow">
              <svg class="size-4 translate-x-0.5 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </span>
        <span class="text-xl font-bold text-stone-900">Se hur du ska göra</span>
      </button>

      <!-- Steps -->
      <h2 class="mb-3 mt-6 text-sm font-bold uppercase tracking-[0.15em] text-stone-500">Steg:</h2>
      <ol class="space-y-3">
        <li v-for="(todo, i) in Trainings[completedWorkouts][1]" :key="todo" class="flex items-start gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-stone-900/5">
          <span class="flex size-10 shrink-0 items-center justify-center rounded-full text-xl font-bold text-black sm:size-12 sm:text-2xl">
            {{ i + 1 }}
          </span>
          <span class="pt-1 text-xl leading-snug text-stone-800 sm:text-3xl">{{ todo }}</span>
        </li>
      </ol>
    </div>

    <!-- Training buttons -->
    <footer class="shrink-0 pt-3">
      <div class="flex items-center gap-3 rounded-[2rem] bg-white p-2.5 shadow-xl ring-1 ring-stone-900/5">
        <button type="button" aria-label="Föregående övning" class="flex size-14 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-800 transition enabled:hover:bg-stone-200 enabled:active:scale-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 disabled:cursor-not-allowed disabled:opacity-40" @click="decrease" :disabled="completedWorkouts <= 0">
          <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <button type="button" class="h-14 flex-1 rounded-full text-xl font-bold shadow-lg transition active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400" :class="timerButtonClass" @click="toggleTimer">{{ timerButtonText }}
        </button>

        <button type="button" aria-label="Nästa övning" class="flex size-14 shrink-0 items-center justify-center rounded-full bg-green-700 text-white transition enabled:hover:bg-green-600 enabled:active:scale-90 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400 disabled:cursor-not-allowed disabled:bg-stone-200 disabled:text-stone-400" @click="increase" :disabled="completedWorkouts + 1 >= numberOfWorkouts">
          <svg class="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </footer>

    <!-- Video fullscreen -->
    <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0" leave-active-class="transition duration-150 ease-in" leave-to-class="opacity-0">
      <div v-if="videoOpen" class="fixed inset-0 z-50 flex flex-col bg-black" role="dialog" aria-modal="true" aria-label="Video">
        <div class="shrink-0 bg-orange-50 px-4 py-3">
          <div class="flex items-center justify-between gap-3">
            <p class="truncate text-xl font-bold text-stone-900">{{ Trainings[completedWorkouts][0] }}</p>
            <button type="button" class="shrink-0 rounded-full bg-white px-5 py-2 text-lg font-bold text-stone-800 shadow-md ring-1 ring-stone-900/10 transition hover:bg-orange-100 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400" @click="closeVideo">
              Stäng ✕
            </button>
          </div>

          <!-- Timer above the video -->
          <div class="mt-3 flex items-center gap-3 rounded-[2rem] bg-white p-2.5 shadow-md ring-1 ring-stone-900/5">
            <div class="relative size-16 shrink-0">
              <svg class="size-16 -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="44" fill="none" stroke-width="10" class="stroke-orange-100" />
                <circle cx="50" cy="50" r="44" fill="none" stroke-width="10" stroke-linecap="round" :stroke-dasharray="ringLength" :stroke-dashoffset="ringOffset" class="transition-[stroke-dashoffset] duration-1000 ease-linear" :class="timerState === 'done' ? 'stroke-green-600' : 'stroke-orange-600'" />
              </svg>
              <span class="absolute inset-0 flex items-center justify-center text-lg font-bold tabular-nums text-stone-900">
                {{ timeText }}
              </span>
            </div>

            <p class="min-w-0 flex-1 truncate text-lg font-bold" :class="timerState === 'done' ? 'text-green-700' : 'text-stone-900'">
              {{ statusText }}
            </p>

            <button type="button" class="h-12 shrink-0 rounded-full px-5 text-lg font-bold shadow-md transition active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400" :class="timerButtonClass" @click="toggleTimer">
              {{ timerButtonText }}
            </button>
          </div>
        </div>

        <video ref="modalVideoEl" playsinline muted loop controls class="min-h-0 w-full flex-1 bg-black object-contain">
          <source :src="videoLink" type="video/mp4" />
        </video>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
html, body {
  min-height: 100dvh;
}
</style>