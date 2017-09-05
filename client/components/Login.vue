<template>
  <div class="login">
    <Modal v-model="visible" title="给自己起个名字吧~~" cancel-text="关闭" @on-ok="ok" @on-cancel="cancel" :closable="false" :mask-closable="false">
      <Form :model="user" label-position="top">
        <FormItem prop="name">
          <Input v-model="user.name" placeholder="Please enter your name..." @on-enter="ok"></Input>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
      user: {
        name: '',
      }
    }
  },
  methods: {
    ok() {
      this.$axios.get(`/api/saveUser?name=${this.user.name}`).then(res => {
        this.$store.dispatch('saveUser', res.data)
        this.$router.push(`/home?id=${res.data._id}`)
      }).catch(err => console.error(err))
    },
    cancel() {
      window.open(location, '_self').close()
    }
  }
}
</script>
