<template>
  <div>
    <Button @click="showModal">add new note</Button>
    <div>
      <div class="lists" v-for="(item, index) of list" :key="item._id">
        <router-link :to="{path: `/note?id=${item._id}`}" class="title">{{item.title}}</router-link>
        <div class="date">
          {{item.updateAt | moment}}
          <Button size="small" type="primary" @click="edit(item)">编辑</Button>
          <Button size="small" type="warning" @click="del(item._id, index)">删除</Button>
        </div>
      </div>
    </div>
    <Modal v-model="visible" title="新建小笔记" :mask-closable="!visible">
      <Form :model="note" label-position="right">
        <FormItem label="标题">
          <Input v-model="note.title"></Input>
        </FormItem>
        <FormItem label="内容">
          <Input v-model="note.content" type="textarea" :autosize="{minRows: 10,maxRows: 20}" placeholder="请输入..."></Input>
        </FormItem>
      </Form>
      <div slot="footer">
        <Button type="success" long @click="add">确认提交</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
import moment from 'moment'

export default {
  data() {
    return {
      visible: false,
      note: {
        title: '',
        content: '',
        userId: window.location.search.substr(4)
      },
      list: this.$store.state.noteList
    }
  },
  filters: {
    moment: (date) => moment(date).format('YYYY-MM-DD hh:mm')
  },
  created() {
    this.showList()
  },
  methods: {
    showList() {
      this.$axios.get(`/api/queryNoteList?id=${window.location.search.substr(4)}`).then(res => {
        this.list = res.data
        this.$store.dispatch('saveNoteList', res.data)
      }).catch(err => console.error('err', err))
    },
    showModal() {
      this.$set(this.note, 'title', '')
      this.$set(this.note, 'content', '')
      this.visible = true
    },
    add() {
      this.$axios.post(`/api/saveNote`, this.note).then(res => {
        if (res.data.createAt === res.data.updateAt) {
          this.$store.dispatch('saveNoteList', res.data)
        } else {
          this.$store.dispatch('saveNoteList', this.list)
        }
        this.visible = false
      }).catch(err => console.error(err))
      this.showList()
    },
    edit(note) {
      this.note = note
      this.visible = true
    },
    del(id, idx) {
      this.$axios.get(`/api/delNote?id=${id}`).then(res => {
        if (res.data.ok === 1) {
          this.$Message.success('删除成功')
          this.$store.dispatch('deleteNote', idx)
        }
      }).catch(err => console.error(err))
    }
  }
}
</script>
<style scoped>
.lists {
  min-height: 25px;
  margin: 4px 0 0;
  padding: 5px 0px 10px 0px;
  cursor: pointer;
  text-align: left;
  border-bottom: 1px dashed #e3ecec;
  position: relative;
}

.title {
  text-overflow: ellipsis;
  overflow: hidden;
  text-align: left;
}

.date {
  display: block;
  float: right;
  color: #999;
}
</style>
