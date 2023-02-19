<script lang="ts">
  import SO from "../assets/so.svg";
  import linkedin from "../assets/linkedin.svg";
  import github from "../assets/github.svg";
  import IconLink from "./IconLink.svelte";
</script>

<article class="h-screen pt-14 mx-4 md:mx-12" id="contact">
  <h1 class="text-3xl my-8">Contact details</h1>

  <h2 class="mb-6">
    I reside in Limassol, Cyprus.
    <br />
    You can contact me at:
  </h2>

  <address>
    <strong>Email</strong>:
    <a class="underline" href="mailto:xidatosar@gmail.com"
      >xidatosar@gmail.com</a
    >
    <br />
    <strong>Phone</strong>:
    <a href="tel:+35796809196">+357 96809196</a>
  </address>

  <p class="mt-6 mb-2">Find me also in:</p>
  <div class="flex gap-4">
    <IconLink
      href="https://stackoverflow.com/users/5163510/jonathan-lafey"
      src={SO}
      text="Stack Overflow"
    />
    <IconLink
      href="https://www.linkedin.com/in/dimitriosargiroudis"
      src={linkedin}
      text="LinkedIn"
    />
    <IconLink
      href="https://github.com/JonathanLafey"
      src={github}
      text="Github"
    />
  </div>
</article>
