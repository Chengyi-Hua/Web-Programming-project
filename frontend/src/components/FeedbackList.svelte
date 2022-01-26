<script>
    import {Kummerkasten} from '../stores';
    import { fade, scale } from 'svelte/transition';
    import FeedbackItem from './FeedbackItem.svelte';
  </script>
  
  {#each $Kummerkasten as fb (fb.id)}
  <div in:scale out:fade="{{ duration: 500 }}">
    <FeedbackItem item={fb} />
  </div>
  {/each}