<template>
  <div>
    <section>
      <div class="row">
        <div class="col-12">
          <b-jumbotron :fluid="true" class="custom-jumbotron">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores doloremque expedita tempora vero.
            Aliquid at error excepturi fugiat hic in ipsum, labore nisi non odio, officia, quas totam ut voluptate!
          </b-jumbotron>
        </div>

        {{ user }}
      </div>
    </section>
  </div>
</template>

<script>

export default {
  layout: 'onlyNavbar',
  name: 'Detail',
  async asyncData ({ req, $axios }) {
    console.log('requesttt', req.headers)
    try {
      const { headers } = req
      const getUsers = await $axios.get('/users', { headers })
      return { user: getUsers.data }
    } catch (err) {
      console.error('error: ', err)
    }
  },
  data () {
    return {
      user: null
    }
  }
}
</script>

<style scoped>

</style>
