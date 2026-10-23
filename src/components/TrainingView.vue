<script setup>

import {nextTick, ref} from 'vue'

const numberOfWorkouts = 10;
const completedWorkouts = 4;

const exerciseToDo = ['Tryck dina händer mot armstöden och lyft din kropp några centimeter upp från stolen','Håll positionen i 1-2 sekunder', 'Sänk dig långsamt tillbaka till utgångsskillingen', 'Andas ut när du lyfter, andas in när du sänker']
const isPaused = ref(true)
const videoWrapper = ref(null)
const videoEl = ref(null)

async function togglePlay() {
  const video = videoEl.value
  if (!video) return

  if (video.paused) {
    video.play().catch(() => { isPaused.value = true })
  } else {
    video.pause()
  }

  await nextTick()
  videoWrapper.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<template>
  <div ref="videoWrapper" tabindex="-1" class="flex min-h-screen items-center justify-center">
    <div class="relative min-h-screen min-w-full bg-slate-100 text-white border-2  p-5 flex flex-col">
      <button aria-label="Exit" class="absolute top-2 right-2 p-3 flex items-center justify-center font-semibold rounded-full bg-red-700 px-6 text-2xl text-white transition hover:bg-red-800 focus-visible:ring-4 focus-visible:ring-black focus-visible:outline-none" type="button">Avsluta Träning</button>
      <!-- Progress bars -->
      <div class="flex flex-row items-center gap-1 w-full pb-5 pt-2 pr-53">
        <div v-for="n in numberOfWorkouts" :key="n" class="h-6 flex-1 rounded-full border-2" :class="n <= completedWorkouts ? 'border-green-800 bg-green-600' : 'border-slate-500 bg-slate-300'" ></div>
      </div>

      <!-- Video wrapper -->
      <div class="relative mb-6 rounded-2xl transition-all duration-300" :class="isPaused ? 'h-[20vh]' : 'h-[80vh]'" @click="togglePlay">
        <video ref="videoEl" playsinline muted loop class="h-full w-full object-cover" @play="isPaused = false" @pause="isPaused = true">
          <source src="https://pznsxwjezmrshnfnxoti.supabase.co/storage/v1/object/sign/videos/Video%20Project%209.mp4?token=eyJraWQiOiIxNTE3OGY1MC1kMDNjLTQxYTQtOWRiNy1jZDg3YjQ2ODViNzMiLCJhbGciOiJIUzUxMiJ9.eyJ1cmwiOiJ2aWRlb3MvVmlkZW8gUHJvamVjdCA5Lm1wNCIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3OTI3NDYxODIsImV4cCI6MTc5MjgzMjU4Mn0.Pru8LsM-7bKj7d1jcMuDnzJRDnZ4fB9yIJotfyxRT6W_xBor58-S4LoVkyFb4CYgTBG2TZ7kJrzcM4PP_o71GA" type="video/mp4" />
        </video>

        <div class="absolute inset-0 flex items-center justify-center" :class="isPaused ? 'bg-black/50' : ''">
          <button :aria-label="isPaused ? 'Play' : 'Pause'" class="flex size-16 items-center justify-center rounded-full bg-white/80 transition hover:bg-white" :class="isPaused ? '' : 'opacity-0'" type="button">
            <svg class="size-8 text-black" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
      <h1 class="text-5xl text-black p-3 pb-6">
        Stols Träning 1
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
      <div class="flex flex-row w-full gap-3 sm:gap-5 pt-6">
        <button class="text-xl sm:text-2xl md:text-3xl font-semibold p-4 sm:p-5 md:p-6 flex-1 min-w-0 rounded-full bg-[#F2A900] hover:bg-amber-500 transition flex items-center justify-center border-amber-700 border-5">Tillbaka</button>
        <button class="text-xl sm:text-2xl md:text-3xl font-semibold p-4 sm:p-5 md:p-6 flex-1 min-w-0 rounded-full bg-blue-700 hover:bg-blue-800 transition flex items-center justify-center border-blue-950 border-5">Paus</button>
        <button class="text-xl sm:text-2xl md:text-3xl font-semibold p-4 sm:p-5 md:p-6 flex-1 min-w-0 rounded-full bg-green-700 hover:bg-green-800 transition flex items-center justify-center border-green-950 border-5">Nästa</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>