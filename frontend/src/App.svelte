
 <script>
 // This is a svelte component, - the root component

 
  import Home from "@/components/Home.svelte"
  import { fade } from "svelte/transition"
  import FeedbackForm from './components/FeedbackForm.svelte'
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte'

  let name = "JOY";
  
</script>

<main transition:fade>
  <Home {name} />
  <FeedbackForm />
	<FeedbackStats />
	<FeedbackList />

</main>

<style>
  main {
    text-align: center;
    padding: 0 20px;
    max-width: 768px;
    margin: 100px auto;
    color: #ffffff;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
