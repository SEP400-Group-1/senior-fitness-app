<script setup>

const numberOfWorkouts = 10;
const completedWorkouts = 2;

const exerciseToDo = ['Tryck dina händer mot armstöden och lyft din kropp några centimeter upp från stolen','Håll positionen i 1-2 sekunder', 'Sänk dig långsamt tillbaka till utgångsskillingen', 'Andas ut när du lyfter, andas in när du sänker']

</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-amber-200">
    <div class="sm:max-w-[80vw] min-h-[80vh] bg-slate-800 text-white border-2 border-black rounded-2xl p-5">
      <div class="flex flex-col items-center">
        <!-- progress bars -->
        <div class="flex flex-row items-center gap-1 w-full pb-5">
          <div v-for="n in numberOfWorkouts" :key="n" class="h-3 basis-xs rounded-full" :class="n <= completedWorkouts ? 'bg-green-400' : 'bg-gray-500'" ></div>
        </div>

        <!-- wrapper: relative so the overlay can be positioned inside it -->
        <div class="relative max-h-[25vh]">
          <img class="rounded-4xl max-h-[25vh]" src="@/assets/images/screenshot.png" alt="video">

          <div class="absolute inset-0 flex items-center justify-center rounded-4xl bg-black/50 ">
            <button aria-label="Pause"
                class="flex size-16 items-center justify-center rounded-full bg-white/80 hover:bg-white transition"
                type="button">
              <svg class="size-8 text-black" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Training todos -->
        <div class="justify-start items-start w-full text-2xl ">
          <ul class="list-disc space-y-6 p-10">
            <li v-for="todo in exerciseToDo" :key="todo"> {{todo}}</li>
          </ul>
        </div>

        <div class="flex flex-row items-center w-full gap-5">
          <button class="text-2xl p-3 basis-xs rounded-full bg-[#F2A900]">Tillbaka</button>

          <button class="text-2xl p-3 basis-xl rounded-full bg-red-600">Paus</button>

          <button class="text-2xl p-3 basis-xs rounded-full bg-white text-black">Nästa</button>
        </div>
      </div>
    </div>
  </div>
</template>