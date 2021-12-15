<script>
  import ProductCard from "./components/product-card/ProductCard.svelte";

  export let name;
</script>

<main>
  <ProductCard name="Chips" price="4.55" />
</main>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");

  main {
    --PURPLE: #6b00f5;
    font-family: "Poppins", serif;
    font-size: 25px;
  }
</style>
