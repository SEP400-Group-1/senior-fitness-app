<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import journey0 from '@/assets/images/results/0.png'
import journey1 from '@/assets/images/results/1.png'
import journey2 from '@/assets/images/results/2.png'

const router = useRouter()
const route = useRoute()

function openLoginPage() {
  router.push({ name: 'login' })
}

// Hero photo
const heroImg =
    'https://as2.ftcdn.net/v2/jpg/02/73/59/97/1000_F_273599725_96VVMEarOAOCvHG723oqIvXsTEUpmsMl.jpg'

const features = [
  {
    title: 'Träna hemma',
    text: 'Inget gymkort och inga resor. Övningarna görs med en stol, en vägg eller köksbänken.',
  },
  {
    title: 'I din egen takt',
    text: 'Korta pass när det passar dig. Ingen stress och inga krav.',
  },
  {
    title: 'Efter dina förutsättningar',
    text: 'Varje övning finns i en lättare version, så att du kan börja precis där du är.',
  },
]

const programs = [
  {
    name: 'Styrka',
    text: 'Starka ben och armar gör vardagen lättare, från att resa sig ur stolen till att bära hem matkassen.',
    examples: ['Resa sig från stol', 'Armhävningar mot vägg', 'Tåhävningar vid bänken'],
    img: 'https://friendsfamilyhomecare.com/wp-content/uploads/Wall-Push-Ups-1024x597.webp',
  },
  {
    name: 'Balans',
    text: 'Bättre balans ger trygghet när du går och minskar risken att ramla.',
    examples: ['Stå på ett ben med stöd', 'Gå häl mot tå', 'Flytta vikten från sida till sida'],
    img: 'https://i0.wp.com/seniorfitnesslab.com/wp-content/uploads/2026/09/chair-exercises-seniors-hero.webp?resize=930%2C545&ssl=1',
  },
  {
    name: 'Rörlighet',
    text: 'Mjuka rörelser gör leder och muskler följsamma, så att det blir lättare att klä på sig och sträcka sig.',
    examples: ['Axelrullningar', 'Sittande marsch', 'Vrida överkroppen sittande'],
    img: 'https://ik.imagekit.io/02fmeo4exvw/expert-articles/2017/05/2017-05-08-chair-exercises-for-seniors-standing-hip-circles.png',
  },
]

// Placeholder story. Replace with the real photos and details (with permission).
const journey = [
  {
    stage: 'Start',
    title: 'Går med rollator',
    text: 'Lars kände sig ostadig och behövde rollatorn vid varje promenad, även inomhus.',
    img: journey0,
  },
  {
    stage: 'Efter 6 veckor',
    title: 'Står med stöd av stol',
    text: 'Benen blev starkare och balansen bättre, så han kunde byta till ett lättare gånghjälpmedel.',
    img: journey1,
  },
  {
    stage: 'Efter 12 veckor',
    title: 'Går på egen hand',
    text: 'Nu går Lars till affären och tillbaka utan några hjälpmedel alls.',
    img: journey2,
  },
]

// Contact details (placeholders, replace with the real ones)
const contact = {
  email: 'larssoncecilia1@gmail.com',
  phone: '076-396 72 70',
  phoneLink: '+46763967270',
}

// Interest form (prototype: nothing is saved yet)
const name = ref('')
const email = ref('')
const submitted = ref(false)

function submitInterest() {
  // TODO: save name and email to the backend (for example a Supabase table).
  submitted.value = true
}
</script>

<template>
  <div v-if="route.name === 'landingPage'" class="landing min-h-screen bg-white text-stone-900">
    <!-- Navbar -->
    <header class="sticky top-0 z-20 border-b border-stone-200 bg-white/90 backdrop-blur">
      <nav
          class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
          aria-label="Huvudmeny"
      >
        <a href="#top" class="text-2xl font-extrabold">Senior Vitality</a>

        <ul class="hidden items-center gap-8 text-lg font-semibold md:flex">
          <li><a href="#appen" class="underline-offset-4 hover:underline">Om appen</a></li>
          <li><a href="#program" class="underline-offset-4 hover:underline">Träningsprogram</a></li>
          <li><a href="#om-mig" class="underline-offset-4 hover:underline">Om mig</a></li>
          <li><a href="#resultat" class="underline-offset-4 hover:underline">Resultat</a></li>
        </ul>

        <a
            href="#intresse"
            class="rounded-full bg-orange-700 px-6 py-3 text-lg font-bold text-white transition hover:bg-orange-600 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
        >
          Anmäl intresse
        </a>
      </nav>
    </header>

    <main id="top">
      <!-- Hero -->
      <section class="relative isolate overflow-hidden">
        <img
            :src="heroImg"
            alt="En äldre kvinna tränar hemma i sitt vardagsrum"
            class="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
            class="absolute inset-0 -z-10 bg-linear-to-r from-stone-900/90 via-stone-900/70 to-stone-900/20"
            aria-hidden="true"
        ></div>

        <div class="mx-auto max-w-6xl px-5 py-24 text-white md:py-40">
          <div class="max-w-2xl">
            <h1 class="text-4xl font-extrabold leading-tight md:text-6xl">
              Träna hemma, i din egen takt.
            </h1>
            <p class="mt-6 text-xl leading-relaxed md:text-2xl">
              Senior Vitality är appen för dig som vill bli starkare, stå stadigare och röra dig
              friare. Med mig som personlig tränare hela vägen.
            </p>
            <div class="mt-10 flex flex-wrap gap-4">
              <a
                  href="#intresse"
                  class="rounded-full bg-orange-600 px-8 py-4 text-xl font-bold text-white shadow-lg shadow-orange-600/40 transition hover:bg-orange-500 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Anmäl ditt intresse
              </a>
              <a
                  href="#program"
                  class="rounded-full border-2 border-white px-8 py-4 text-xl font-bold transition hover:bg-white hover:text-stone-900 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Se träningsprogrammen
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- About the app -->
      <section id="appen" class="scroll-mt-24 py-16">
        <div class="mx-auto max-w-6xl px-5">
          <h2 class="text-3xl font-extrabold md:text-4xl">Det här är Senior Vitality</h2>
          <p class="mt-4 max-w-2xl text-xl leading-relaxed text-stone-800">
            En träningsapp för seniorer, med program som du gör hemma och som är anpassade efter
            dig. Du får tydliga instruktioner och en tränare som finns med hela vägen.
          </p>

          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <article
                v-for="feature in features"
                :key="feature.title"
                class="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-stone-900/5"
            >
              <h3 class="text-2xl font-bold">{{ feature.title }}</h3>
              <p class="mt-2 text-lg leading-relaxed text-stone-800">{{ feature.text }}</p>
            </article>
          </div>
        </div>
      </section>

      <!-- Training programs -->
      <section id="program" class="scroll-mt-24 mx-auto max-w-6xl px-5 py-16">
        <h2 class="text-3xl font-extrabold md:text-4xl">Träningsprogram</h2>
        <p class="mt-4 max-w-2xl text-xl leading-relaxed text-stone-800">
          Tre program som tillsammans gör vardagen enklare och håller dig självständig.
        </p>

        <div class="mt-10 grid gap-8 md:grid-cols-3">
          <article
              v-for="program in programs"
              :key="program.name"
              class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-900/5"
          >
            <img :src="program.img" :alt="program.name" class="h-52 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-2xl font-bold">{{ program.name }}</h3>
              <p class="mt-2 text-lg leading-relaxed text-stone-800">{{ program.text }}</p>
              <p class="mt-4 text-base font-bold text-stone-500">Exempel på övningar:</p>
              <ul class="mt-1 list-disc pl-6 text-lg leading-relaxed text-stone-800">
                <li v-for="example in program.examples" :key="example">{{ example }}</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <!-- About me -->
      <section id="om-mig" class="scroll-mt-24 py-16">
        <div class="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-2">
          <img
              src="@/assets/images/me.jpg"
              alt="Din fysioterapeut, leende i ett ljust rum"
              class="mx-auto aspect-[4/5] w-full max-w-sm rounded-[2rem] object-cover shadow-lg"
          />
          <div>
            <h2 class="text-3xl font-extrabold md:text-4xl">Om mig</h2>
            <p class="mt-4 text-xl leading-relaxed text-stone-800">
              Hej! Jag är fysioterapeut och arbetar med seniorer. Jag har sett hur mycket några
              korta pass i veckan kan betyda för styrka, balans och självständighet.
            </p>
            <p class="mt-4 text-xl leading-relaxed text-stone-800">
              Med Senior Vitality kan jag vara med dig hemma som din personliga tränare. Du får
              program som passar just dig, tydliga instruktioner och någon som lyssnar. Börja där
              du är och gå framåt i din egen takt.
            </p>
          </div>
        </div>
      </section>

      <!-- Results -->
      <section id="resultat" class="scroll-mt-24 mx-auto max-w-6xl px-5 py-16">
        <h2 class="text-3xl font-extrabold md:text-4xl">Lars resa</h2>
        <p class="mt-4 max-w-2xl text-xl leading-relaxed text-stone-800">
          Lars, 79, tränade hemma i 12 veckor. Så här förändrades hans gång.
        </p>

        <ol class="mt-10 grid gap-8 md:grid-cols-3">
          <li
              v-for="step in journey"
              :key="step.stage"
              class="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-stone-900/5"
          >
            <img :src="step.img" :alt="step.title" class="aspect-square w-full object-cover" />
            <div class="p-6">
              <p class="inline-block rounded-full bg-orange-100 px-4 py-1 text-base font-bold text-orange-900">
                {{ step.stage }}
              </p>
              <h3 class="mt-3 text-2xl font-bold">{{ step.title }}</h3>
              <p class="mt-2 text-lg leading-relaxed text-stone-800">{{ step.text }}</p>
            </div>
          </li>
        </ol>
      </section>

      <!-- Register interest -->
      <section id="intresse" class="scroll-mt-24 py-16">
        <div class="mx-auto max-w-2xl px-5">
          <h2 class="text-3xl font-extrabold md:text-4xl">Anmäl ditt intresse</h2>
          <p class="mt-4 text-xl leading-relaxed text-stone-800">
            Appen lanseras snart. Lämna ditt namn och din e-postadress, så hör vi av oss så fort
            den öppnar. Du förbinder dig inte till något.
          </p>

          <form v-if="!submitted" class="mt-8 space-y-5" @submit.prevent="submitInterest">
            <div>
              <label for="interest-name" class="block text-lg font-bold">Ditt namn</label>
              <input
                  id="interest-name"
                  v-model="name"
                  type="text"
                  autocomplete="name"
                  required
                  class="mt-2 w-full rounded-2xl border-2 border-stone-300 bg-white px-5 py-4 text-xl text-stone-900 focus:border-orange-600 focus:outline-none"
              />
            </div>
            <div>
              <label for="interest-email" class="block text-lg font-bold">Din e-postadress</label>
              <input
                  id="interest-email"
                  v-model="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="mt-2 w-full rounded-2xl border-2 border-stone-300 bg-white px-5 py-4 text-xl text-stone-900 focus:border-orange-600 focus:outline-none"
              />
            </div>
            <button
                type="submit"
                class="cursor-pointer rounded-full bg-orange-600 px-10 py-4 text-xl font-bold text-white shadow-lg shadow-orange-600/40 transition hover:bg-orange-500 focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              Anmäl mitt intresse
            </button>
            <p class="text-base text-stone-800">
              Vi använder bara din e-postadress för att höra av oss om lanseringen.
            </p>
          </form>

          <p
              v-else
              class="mt-8 rounded-3xl bg-white p-6 text-xl font-semibold text-stone-900 shadow-sm ring-1 ring-stone-900/5"
              role="status"
          >
            Tack, {{ name }}! Vi hör av oss när appen lanseras.
          </p>
        </div>
      </section>
    </main>

    <footer class="bg-stone-900 py-10 text-center text-lg text-white">
      <h2 class="text-2xl font-bold">Kontakt</h2>
      <p class="mt-3">
        Mejl:
        <a
            :href="`mailto:${contact.email}`"
            class="font-semibold underline underline-offset-4 hover:text-orange-300"
        >
          {{ contact.email }}
        </a>
      </p>
      <p class="mt-1">
        Telefon:
        <a
            :href="`tel:${contact.phoneLink}`"
            class="font-semibold underline underline-offset-4 hover:text-orange-300"
        >
          {{ contact.phone }}
        </a>
      </p>

      <p class="mt-8">© 2026 Senior Vitality.</p>
      <button
          @click="openLoginPage"
          class="mt-3 cursor-pointer text-lg underline underline-offset-4 hover:text-orange-300"
      >
        Logga in
      </button>
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