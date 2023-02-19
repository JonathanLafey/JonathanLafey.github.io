<script lang="ts">
  export let title = "";
</script>

<section class="col-span-1 pb-4 md:text-left md:pl-8 {$$props.class}">
  {#if title !== ""}
    <h1 class="text-2xl mb-4">{title}</h1>
  {/if}
  <slot />
</section>
