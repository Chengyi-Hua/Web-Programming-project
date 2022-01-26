<script>
    import {Kummerkasten} from '../stores';
    $: count = $Kummerkasten.length
    $: average = $Kummerkasten.reduce((a, {rating}) => a + rating, 0) / $Kummerkasten.length
  </script>
  
  <div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Average: {average}</h4>
  </div>
  
  <style>
    .feedback-stats {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  </style>