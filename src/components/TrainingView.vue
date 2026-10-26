<script setup>

import {nextTick, ref} from 'vue'

const numberOfWorkouts = 10;
const completedWorkouts = 4;

const exerciseToDo = ['Tryck dina händer mot armstöden och lyft din kropp några centimeter upp från stolen','Håll positionen i 1-2 sekunder', 'Sänk dig långsamt tillbaka till utgångsskillingen', 'Andas ut när du lyfter, andas in när du sänker']
const exerciseTitle = "Stols Träning"
const isPaused = ref(true)
const topView = ref(null)
const videoEl = ref(null)

const videoLink = "https://www.w3schools.com/tags/mov_bbb.mp4"

async function togglePlay() {
  const video = videoEl.value
  if (!video) return

  if (video.paused) {
    video.play().catch(() => { isPaused.value = true })
  } else {
    video.pause()
  }

  await nextTick()
  topView.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div ref="topView" tabindex="-1" class="flex min-h-screen items-center justify-center ml">
    <div class="relative min-h-screen min-w-full bg-slate-100 text-white border-2 p-5 sm:p-8 md:px-[5vw] lg:px-[5vw] flex flex-col">
      <header class="flex items-center gap-2">
        <div class="flex-1">
          <p class="mb-1 text-lg font-semibold text-black">
            Övning {{ completedWorkouts }} av {{ numberOfWorkouts }}
          </p>
          <div class="flex gap-0.5" role="progressbar">
            <div v-for="n in numberOfWorkouts" :key="n" class="h-5 flex-1 rounded-full border-2" :class="n <= completedWorkouts ? 'border-green-800 bg-green-600' : 'border-slate-400 bg-slate-200'"/>
          </div>
        </div>

        <button type="button" class="shrink-0 rounded-full bg-red-700 px-6 py-3 text-xl font-semibold text-white transition hover:bg-red-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black">
          Avsluta Träning
        </button>
      </header>


      <!-- Video wrapper -->
      <div class="relative mb-6 mt-6 rounded-2xl transition-all duration-300" :class="isPaused ? 'h-[20vh]' : 'h-[60vh]'" @click="togglePlay">
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
      <h1 class="text-5xl text-black p-3 pb-6">
        {{exerciseTitle}}
      </h1>
      <!-- Training todos -->
      <div class="flex-1 w-full">
        <ol class="space-y-6">
          <li v-for="(todo, i) in exerciseToDo" :key="todo" class="flex items-start gap-4">
          <span class="flex size-12 shrink-0 items-center justify-center rounded-full bg-slate-900 text-2xl font-bold text-white">
            {{ i + 1 }}
          </span>
            <span class="text-3xl text-black leading-snug">{{ todo }}</span>
          </li>
        </ol>
      </div>

      <!-- Training buttons -->
      <footer class="sticky bottom-0 -mx-5 rounded-5xl bg-none px-5 pb-4 pt-3 ">
        <button type="button" class="mb-3 w-full rounded-full border-2 border-blue-950 bg-blue-800 py-4 text-2xl font-semibold text-white transition hover:bg-blue-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black"> Ta En Paus
        </button>

        <div class="flex gap-5">
          <button type="button" class="flex-1 rounded-full border-2 border-slate-800 bg-white py-3 text-lg font-semibold text-slate-900 transition hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black">← Föregående
          </button>
          <button type="button" class="flex-1 rounded-full border-2 border-green-950 bg-green-800 py-3 text-lg font-semibold text-white transition hover:bg-green-900 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-black">Nästa övning →
          </button>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
</style>