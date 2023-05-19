<template>
  <div class="jumbotron jumbotron-fluid bg-dark text-white">
    <div class="container">
      <h1 class="display-4 text-white">Daft Punk</h1>
      <p class="lead">Electronic music legends.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.jumbotron {
  background-image: url('https://th.bing.com/th/id/R.7d915acc08b03a5252f2f8c60b58578a?rik=1Od19%2fwyR6dqcg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2f8%2f7%2fb%2f859411-download-daft-punk-backgrounds-1920x1080.jpg&ehk=7TzVy%2fOgLmUmZByPhPn%2fe7lQh44fckowWJM5poYRYiM%3d&risl=&pid=ImgRaw&r=0');
  background-size: cover;
  background-position: center;
  height: 300px; /* Ajustar la altura según tus necesidades */
  background-color: #333;
  color: white;
}
</style>
