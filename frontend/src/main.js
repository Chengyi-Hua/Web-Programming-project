//This is the main file svelt uses to kick start the web app


import App from "./App.svelte";

const app = new App({
  target: document.querySelector("#__snel"),
  props: {},
});
