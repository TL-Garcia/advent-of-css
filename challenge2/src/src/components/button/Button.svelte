<script>
  export let text;
</script>

<button>{text}</button>

<style>
  button {
    background-color: var(--PURPLE);
    border-radius: 1.25em;
    border: none;
    color: #fff;
    font-weight: 700;
    font-size: 22px;
    padding: 0.6em;
    margin: 0;
  }

  button:hover {
    cursor: pointer;
  }

  button:active {
    transform: translateY(3px);
    background-color: var(--PURPLE);
  }
</style>
