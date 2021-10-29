<template>

  <div class="home">
    <NavBar></NavBar>
    <last_article></last_article>
    <bas></bas>
  </div>

</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from '@/components/navbar'
import last_article from '@/router/views/home/components_home/last_article'
import bas from '@/components/footer'

export default {
  name: 'Home',
  components: {
    NavBar,
    last_article,
    bas,
  }
}
</script>
