<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

function openLoginPage() {
  router.push({ name: 'login' })
}

// Placeholder photos. Swap the img values for your own images later.
const exercises = [
  {
    name: 'Sit to stand',
    text: 'Stand up from a sturdy chair and sit back down slowly. It makes getting out of chairs and the toilet easier.',
    focus: 'Strength',
    needs: 'A sturdy chair',
    img: 'https://cdn.todomountainbike.net/images/articles/2026/solo-quinze-minutos-de-bicicleta-dos-veces-por-semana-mayores-70-a%C3%B1os_4x3.webp',
  },
  {
    name: 'Wall push-ups',
    text: 'Lean into a wall and press away. A kind way to build arm and shoulder strength.',
    focus: 'Strength',
    needs: 'A wall',
    img: 'https://friendsfamilyhomecare.com/wp-content/uploads/Wall-Push-Ups-1024x597.webp',
  },
  {
    name: 'Shoulder and neck rolls',
    text: 'Slow circles that loosen stiff shoulders, so reaching for shelves and getting dressed feels easier.',
    focus: 'Mobility',
    needs: 'Nothing, sit or stand',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyy-Xhs-7Ba_5ByDMVWSn8NLxe1nbZ1AXyPX424Md1T8682Qbwt5v6gg&s=10',
  },
  {
    name: 'Seated marching',
    text: 'Lift your knees one at a time while sitting. Warms up the hips and legs without any strain.',
    focus: 'Mobility',
    needs: 'A chair',
    img: 'https://friendsfamilyhomecare.com/wp-content/uploads/Wall-Push-Ups-1024x597.webp',
  },
  {
    name: 'Heel-to-toe stand',
    text: 'Stand with one foot in front of the other and hold on to the counter. Builds balance for steady walking.',
    focus: 'Independence',
    needs: 'A kitchen counter',
    img: 'https://i0.wp.com/seniorfitnesslab.com/wp-content/uploads/2026/09/chair-exercises-seniors-hero.webp?resize=930%2C545&ssl=1',
  },
  {
    name: 'Counter calf raises',
    text: 'Rise onto your toes while holding the counter. Strong calves help you climb stairs with confidence.',
    focus: 'Independence',
    needs: 'A kitchen counter',
    img: 'https://ik.imagekit.io/02fmeo4exvw/expert-articles/2017/05/2017-05-08-chair-exercises-for-seniors-standing-hip-circles.png',
  },
]

const features = [
  {
    icon: '🏠',
    title: 'Train at home',
    text: 'No gym, no travel. Every exercise uses a chair, a wall or your kitchen counter.',
  },
  {
    icon: '🌿',
    title: 'Gentle programs',
    text: 'Short routines made for older bodies. Every exercise has an easier option if you need it.',
  },
  {
    icon: '🔎',
    title: 'Large, clear screens',
    text: 'Big text, big buttons and simple steps. No tiny menus to hunt through.',
  },
]
</script>

<template>
  <div v-if="route.name === 'landingPage'" class="landing min-h-screen bg-[#EEF4EA] text-[#1F3A2E]">
    <!-- Navbar -->
    <header class="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-[#D5E3CF]">
      <nav
          class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
          aria-label="Main navigation"
      >
        <a href="#top" class="flex items-center gap-2 text-2xl font-extrabold">
          <span aria-hidden="true">🌻</span>
          <span>Sunrise Gym</span>
        </a>

        <ul class="hidden items-center gap-8 text-lg font-semibold md:flex">
          <li><a href="#product" class="hover:underline underline-offset-4">The app</a></li>
          <li><a href="#exercises" class="hover:underline underline-offset-4">Exercises</a></li>
          <li><a href="#about" class="hover:underline underline-offset-4">About us</a></li>
        </ul>

        <button
            @click="openLoginPage"
            class="cursor-pointer rounded-full bg-[#F2A93B] px-6 py-3 text-lg font-bold text-[#1F3A2E] transition hover:bg-[#E59A24] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#1F3A2E]"
        >
          Log in
        </button>
      </nav>
    </header>

    <main id="top">
      <!-- Hero -->
      <section class="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
        <div>
          <h1 class="text-4xl font-extrabold leading-tight md:text-6xl">
            Get stronger and stay independent, right at home.
          </h1>
          <p class="mt-6 max-w-xl text-xl leading-relaxed">
            Sunrise Gym guides you through short, gentle exercises that build strength,
            keep you moving freely and help you manage daily life on your own.
          </p>
          <div class="mt-8 flex flex-wrap gap-4">
            <button
                @click="openLoginPage"
                class="cursor-pointer rounded-full bg-[#1F3A2E] px-8 py-4 text-xl font-bold text-white transition hover:bg-[#2D5442] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#F2A93B]"
            >
              Get started
            </button>
            <a
                href="#exercises"
                class="rounded-full border-2 border-[#1F3A2E] px-8 py-4 text-xl font-bold transition hover:bg-white focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#F2A93B]"
            >
              See the exercises
            </a>
          </div>
        </div>

        <img
            src="https://as2.ftcdn.net/v2/jpg/02/73/59/97/1000_F_273599725_96VVMEarOAOCvHG723oqIvXsTEUpmsMl.jpg"
            alt="An older woman exercising in her living room"
            class="h-80 w-full rounded-[2rem] object-cover shadow-lg md:h-[28rem]"
        />
      </section>

      <!-- About the product -->
      <section id="product" class="scroll-mt-24 bg-white py-16">
        <div class="mx-auto max-w-6xl px-5">
          <h2 class="text-3xl font-extrabold md:text-4xl">An app that is easy to use</h2>
          <p class="mt-4 max-w-2xl text-xl leading-relaxed">
            Sunrise Gym focuses on three things: strength, mobility and independence. Ten
            minutes a day is enough to start.
          </p>

          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <article
                v-for="feature in features"
                :key="feature.title"
                class="rounded-3xl bg-[#EEF4EA] p-7"
            >
              <div class="text-4xl" aria-hidden="true">{{ feature.icon }}</div>
              <h3 class="mt-4 text-2xl font-bold">{{ feature.title }}</h3>
              <p class="mt-2 text-lg leading-relaxed">{{ feature.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Exercises -->
      <section id="exercises" class="scroll-mt-24 mx-auto max-w-6xl px-5 py-16">
        <h2 class="text-3xl font-extrabold md:text-4xl">Exercises you can do at home</h2>
        <p class="mt-4 max-w-2xl text-xl leading-relaxed">
          Here are a few from the app. Each one comes with clear steps and an easier option.
        </p>

        <div class="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article
              v-for="exercise in exercises"
              :key="exercise.name"
              class="overflow-hidden rounded-3xl border border-[#D5E3CF] bg-white"
          >
            <img :src="exercise.img" :alt="exercise.name" class="h-52 w-full object-cover" />
            <div class="p-6">
              <p class="inline-block rounded-full bg-[#FCE3B4] px-4 py-1 text-base font-bold">
                {{ exercise.focus }}
              </p>
              <h3 class="mt-3 text-2xl font-bold">{{ exercise.name }}</h3>
              <p class="mt-2 text-lg leading-relaxed">{{ exercise.text }}</p>
              <p class="mt-4 text-base font-semibold">You need: {{ exercise.needs }}</p>
            </div>
          </article>
        </div>
      </section>

      <!-- About us -->
      <section id="about" class="scroll-mt-24 bg-white py-16">
        <div class="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <img
              src="https://mail.google.com/mail/u/2?ui=2&ik=c907dccc9b&attid=0.0.1&permmsgid=msg-f:1879183113995791270&th=1a143315f9a1aba6&view=fimg&fur=ip&permmsgid=msg-f:1879183113995791270&sz=s0-l75-ft&attbid=ANGjdJ8vKf-rdcsJztq_spjAJB2R-mTn8rnlxPAauHzazSPYwc-1v0uBUtMGvvQj-5NFQGu74bE2bC7hvKF3WYVMuaEUc2Sfm8PYcD1JoON_c-EiY-1-Y1OjcOwqBFE&disp=emb&zw"
              alt="Your physiotherapist, smiling, in a bright room"
              class="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover object-left-bottom shadow-lg"
          />
          <div>
            <h2 class="text-3xl font-extrabold md:text-4xl">About me</h2>
            <p class="mt-4 text-xl leading-relaxed">
              I'm a physiotherapist who works with older adults. Again and again I meet people who
              want to stay strong and keep living in their own homes, but don't know where to start.
            </p>
            <p class="mt-4 text-xl leading-relaxed">
              I made Sunrise Gym so you can do the exercises I teach in my sessions, at home and
              in your own time. No special equipment and no pressure. Start where you are and go
              at your own pace.
            </p>
          </div>
        </div>
      </section>

      <!-- Closing call to action -->
      <section class="mx-auto max-w-3xl px-5 py-16 text-center">
        <h2 class="text-3xl font-extrabold md:text-4xl">Ready to take the first step?</h2>
        <p class="mt-4 text-xl leading-relaxed">It takes less than a minute to get started.</p>
        <button
            @click="openLoginPage"
            class="mt-8 cursor-pointer rounded-full bg-[#F2A93B] px-10 py-4 text-xl font-bold transition hover:bg-[#E59A24] focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-[#1F3A2E]"
        >
          Log in
        </button>
      </section>
    </main>

    <footer class="bg-[#1F3A2E] py-8 text-center text-lg text-white">
      © 2026 Sunrise Gym. This is a prototype.
    </footer>
  </div>

  <!-- LoginView renders here when the route is /login -->
  <RouterView />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap');

html {
  scroll-behavior: smooth;
}

.landing {
  font-family: 'Nunito', system-ui, sans-serif;
  font-size: 18px;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
</style>