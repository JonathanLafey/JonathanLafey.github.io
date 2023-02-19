<script lang="ts">
  export let href = "#";
  export let src: string = undefined;
  export let text = "text";
</script>

<a
  class="inline-flex text-sm align-center"
  {href}
  target="_blank"
  rel="noreferrer"
>
  {#if src}
    <img class="h-5 mr-2" {src} alt={text} />
  {/if}
  <span class="underline hidden sm:inline">{text}</span>
</a>
