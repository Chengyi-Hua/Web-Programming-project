<script>
  import { Request } from "https://deno.land/x/request@1.3.2/mod.ts";
  import Box from './Box.svelte';

  export let name;
  let inputValue;
  let response;

  async function handleClick() {
    // const result = await Request.get("http://localhost:3004/gibmirdieloesung");
    response = await (
      await fetch("http://localhost:3004/gibmirdieloesung")
    ).json();
    alert(response.answer)
  }


  const rows =[
    {RELATIONSHIPS: 'crash', MOTIVATION: 'work', RANDOM: 'facts'},
    {RELATIONSHIPS: 'family', MOTIVATION: 'love', RANDOM: 'numbar'},
    {RELATIONSHIPS: 'friends', MOTIVATION: 'sport', RANDOM: 'names'},
    {RELATIONSHIPS: 'marriage', MOTIVATION: 'school', RANDOM: 'furtune cookies'},
  ];

  const columns = [
    { 
      key: "RELATIONSHIPS",
      title: "RELATIONSHIPS",
      value: v => v.RELATIONSHIPS,
      sortable: true,
    },
    {
      key: "MOTIVATION",
      title: "MOTIVATION",
      value: v => v.MOTIVATION,
      sortable: true,
    },
    {
      key: "RANDOM",
      title: "RANDOM",
      value: v => v.RANDOM,
      sortable: true,
    },

  ]
 

</script>






<div class="superStyleSuperGeil">
  <h1> JOY </h1>

  <Box>
  <h2>- stellt eine Frage oder hinterlasse ein Kommentar - </h2>
  </Box>

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
    color: #ffffff;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
    margin: 5%;
    text-align: right
  }

  .superStyleSuperGeil {
    background-color: #688f68;
  }
</style>
