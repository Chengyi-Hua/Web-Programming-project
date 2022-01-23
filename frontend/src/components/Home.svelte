<script>
  import { Request } from "https://deno.land/x/request@1.3.2/mod.ts";
  import Box from './Box.svelte';
  import SvelteTable from "./svelte-table.svelte";
  import { time } from './Uhr.js';

  export let name = "JOY";
  let inputValue;
  let response;





  async function handleClick() {
    // const result = await Request.get("http://localhost:3004/gibmirdieloesung");
    response = await (
      await fetch("http://localhost:3004/gibmirdieloesung")
    ).json();
  }





  const rows =[
    {BEZIEHUNG: 'Ehe', MOTIVATION: 'Liebe', ZUFALL: 'Name'},
    {BEZIEHUNG: 'Crash', MOTIVATION: 'Sport', ZUFALL: 'Nummer'},
    {BEZIEHUNG: 'Freunde', MOTIVATION: 'Arbeit', ZUFALL: 'Fakten'},
    {BEZIEHUNG: 'Familie', MOTIVATION: 'Schule', ZUFALL: 'Glückskekse'},
  ];

  const columns = Object.keys(rows[0]).map((key) => {
    return {
      key,
      title: key,
      value: row => row[key],
      sortable: true,

    }
  });   

  const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>





<div class="superStyleSuperGeil">
  <h1> {name}  </h1>
  <Box>
  <h3>- Stellt eine Frage oder hinterlasst ein Kommentar - </h3>
  {formatter.format($time)}
  </Box>
  <p><br></p>


  <input
    type="text"
    bind:value={inputValue}
    placeholder="Geben Sie ihr Thema ein"
  />

  <button on:click={handleClick}> Send </button>
  <br>
  {#if response !== undefined}
    {response.answer}
  {/if}
  <br><br>
</div>




<div class="table">
  <h2>
    Mögliche Themen
  </h2><br>
  <SvelteTable
    {rows}
    {columns}
  />
  <br><br>
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
    margin: 1%;
    text-align: right;

  }
  h2 {
    color: #ffffff;
    text-align: right;
    margin: 1.5%;
  }
  h3 {
    color: #ffffff;
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: 100;
    margin: 1%;
    text-align: center
  }


  .superStyleSuperGeil {
    background-color: #688f68;
  }
  .table {
    background-color: #688f68;
    color: #ffffff;
    text-align: justify all;
  }
</style>
