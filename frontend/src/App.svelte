<script>
  // This is a svelte component, - the root component
  
    import Home from "@/components/Home.svelte";
    import { fade } from "svelte/transition";
    import FeedbackForm from "./components/FeedbackForm.svelte";
    import FeedbackList from "./components/FeedbackList.svelte";
    import FeedbackStats from  "./components/FeedbackStats.svelte";

    let name = "JOY"
    let feedback = [
   {
     id: 1,
     rating: 3,
     text:"Meine Ex hat Schluss gemacht. Was soll ich tun?",
   },
   {
     id: 2,
     rating: 8,
     text:"Ich habe im Lotto gewonnen, weiß aber nicht, welches NFT ich mir kaufen soll",
   },
   {
     id: 3,
     rating: 4,
     text:"Ich wurde verhaftet. Gibt es hier auch gute Anwälte?",
   }
 ]

 $: count = feedback.length
 $: average = feedback.reduce((a, {rating}) => a + rating, 0) / feedback.length
 
 const addFeedback = (e) => {
	const newFeedback = e.detail
	feedback = [newFeedback, ...feedback]
}

const deleteFeedback = (e) => {
	const itemId = e.detail
	feedback = feedback.filter((item) => item.id != itemId)
}


 </script>
 
 <main transition:fade>
   <Home {name} />
 
 
   <FeedbackForm on:add-feedback={addFeedback} />
   <FeedbackStats {count} {average} />
   <FeedbackList FeedbackList {feedback} on:delete-feedback={deleteFeedback}/>
 
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