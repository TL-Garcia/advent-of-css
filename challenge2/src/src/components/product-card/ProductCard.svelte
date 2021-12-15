<script>
  import Button from "../button/Button.svelte";

  export let name = "Missing product name";
  export let price = 0.0;
  export let image = "default";
</script>

<article>
  <img src={image} alt="" />
  <div>
    <h3>{name}</h3>
    <b>${price}</b>
    <Button text="Add to cart" />
  </div>
</article>

<style>
  article {
    background-color: rgba(122, 179, 243, 0.2);
    border-radius: 1.25em;
    display: grid;
    grid-template-columns: 5fr 6fr 1fr;
    max-width: 526px;
  }

  div {
    display: grid;
    position: relative;
    top: 29px;
  }
</style>
