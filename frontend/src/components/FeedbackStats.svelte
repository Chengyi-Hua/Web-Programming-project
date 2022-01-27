<script>
  export let count
  export let average
</script>

<div class="feedback-stats">
  <h4>{count} unbeantwortete Fragen</h4>
  <h4>Durschnittliche Gefühlslage: {average}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #12312E;
  }
</style>