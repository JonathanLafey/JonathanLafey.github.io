<script lang="ts">
  export let title = "";
</script>

<section
  class="col-span-1 md:pb-4 md:text-right md:pr-8 md:border-r-8 md:border-white md:relative after:content-[''] md:after:absolute md:after:top-[2px] md:after:right-[-19px] md:after:rounded-[50%] md:after:border-[15px] md:after:border-solid md:after:border-white {$$props.class}"
>
  {#if title !== ""}
    <h1 class="text-2xl mb-4">{title}</h1>
  {/if}
  <slot />
</section>
