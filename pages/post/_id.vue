<template>
  <div>
    <nuxt-link :to="'/'">Back to home</nuxt-link>
    <h1>#{{ data.id }} {{ data.title }}</h1>
    <span>{{ data.body }}</span>
  </div>
</template>

<script>
  import axios from '~/plugins/axios'

  export default {
    async asyncData ({ params: { id } }) {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

      return { data }
    }
  }
</script>
