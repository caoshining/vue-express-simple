<template>
  <article>
    <header>
      <h2>{{note.title}}</h2>
      <h3>{{note.name}}</h3>
    </header>
    <section>
      <p>{{note.content}}</p>
    </section>
  </article>
</template>
<script>
export default {
  data() {
    return {
      note: {}
    }
  },
  created() {
    this.$axios.get(`/api/showNote?id=${window.location.search.substr(4)}`).then(res => {
      this.note = res.data
    }).catch(err => console.error(err))
  }
}
</script>
