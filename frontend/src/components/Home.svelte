<script>
  import { Request } from "https://deno.land/x/request@1.3.2/mod.ts";
  import Box from './Box.svelte';
  import SvelteTable from "./svelte-table.svelte";
  import { time } from './Uhr.js';

  export let name = "JOY";
  let inputValue;
  let response;
 
  async function handleClick() {
    // Analyse input and fetch from link based on category 
    // const result = await Request.get("http://localhost:3004/gibmirdieloesung");
    if (inputValue == "Stress") {
      response = await (
        await fetch("http://localhost:3004/problems/stress")
      ).json();} 
    else if (inputValue == "Trauer") {
      response = await (
        await fetch("http://localhost:3004/problems/trauer")
      ).json();}
    else if (inputValue == "Sport") {
      response = await (
        await fetch("http://localhost:3004/problems/sport")
      ).json();}
    else if (inputValue == "Lernen") {
      response = await (
        await fetch("http://localhost:3004/problems/lernen")
      ).json();}
    else if (inputValue == "Familie") {
      response = await (
        await fetch("http://localhost:3004/problems/familie")
      ).json();}
    else if (inputValue == "Freunde") {
      response = await (
        await fetch("http://localhost:3004/problems/freunde")
      ).json();}
    else{
      response = await (
        await fetch("http://localhost:3004/problems/other")
      ).json();
    }
    
  }

  const rows =[
    {BEZIEHUNG: 'Familie', MOTIVATION: 'Sport', EMOTIONEN: 'Stress'},
    {BEZIEHUNG: 'Freunde', MOTIVATION: 'Lernen', EMOTIONEN: 'Trauer'},
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
  <h3>- Schnelle Antwort? oder hinterlasse deine Frage! - </h3>
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