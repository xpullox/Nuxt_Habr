<template>
  <div>
    <div
      v-for="(item) in data"
      :key="item"
    >
      <nuxt-link :to="'/post/' + item.id">
        <h1>#{{ item.id }} {{ item.title }}</h1>
      </nuxt-link>
      <span>{{ item.body }}</span>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

    return { data }
  }
}
</script>
