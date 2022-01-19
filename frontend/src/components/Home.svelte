<script>
  import { Request } from "https://deno.land/x/request@1.3.2/mod.ts";

  export let name;
  let inputValue;

  let response;

  async function handleClick() {
    // const result = await Request.get("http://localhost:3004/gibmirdieloesung");
    response = await (
      await fetch("http://localhost:3004/gibmirdieloesung")
    ).json();
  }
</script>

<div class="superStyleSuperGeil">
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>

  <input
    type="text"
    bind:value={inputValue}
    placeholder="geben sie ihr thema ein"
  />

  <button on:click={handleClick}> Send </button>
  <p><br /></p>
  {#if response !== undefined}
    {response.answer}
  {/if}
</div>

<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>

<style>
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  .superStyleSuperGeil {
    background-color: violet;
  }
</style>
