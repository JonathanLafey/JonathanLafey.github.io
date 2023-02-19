<script lang="ts">
  import profilePic from '../assets/profile.jpg'
</script>

<article class="min-h-screen pt-14 flex" id="home">
  <section class="mx-4 md:mx-12">
    <h1 class="text-3xl my-8">Hi, I'm Dimitris</h1>
    <h2 class="italic mb-8">Front-End | Back-End | DBs | Cloud Architecture</h2>
    
    <p class="mb-2">I'm developing all kinds of software since 2014. Web apps, SPAs, SSR apps, native mobile apps, hybrid mobile apps, desktop apps. Been a long, rough but lovely journey so far.</p>
    <p>Currently, I'm working full time providing SaaS solutions and consulting in Cyprus.</p>
    <p class="mt-8 mb-12">
      <a class="border-b-white border-b-2" href="#experience">Check out my experience</a>
    </p>
  </section>

  <section class="grow">
    <img class="hidden md:block h-full object-cover" src={profilePic} alt="Profile Pictures" />
  </section>
</article>
