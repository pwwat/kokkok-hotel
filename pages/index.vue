<template>
  <div style="text-align: center;">
    <Logo />
    <h2>KokKok Hotel</h2>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      ทดสอบ Modal
    </button>

    <!-- Modal -->
    <div id="exampleModal" class="modal fade" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 id="exampleModalLabel" class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h3><fa :icon="['fas', 'user']" />  User</h3>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: []
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      let { data } = await this.$axios.get('/users')
      if (!data.error) {
        this.users = data.users
      } else {
        alert('ผิดพลาด ' + data.message)
      }
    }
  }
}
</script>

<style>

</style>
