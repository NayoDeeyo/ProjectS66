<template>
  <div>
    <h1>Edit item</h1>
    <form v-on:submit.prevent="editUser">
      <p>brand: <input type="text" v-model="user.brand" /></p>
      <p>model: <input type="text" v-model="user.model" /></p>
      <p>price: <input type="text" v-model="user.price" /></p>
      <p>warranty: <input type="text" v-model="user.warranty" /></p>
      <p>feature: <input type="text" v-model="user.feature" /></p>
      <p><button type="submit">edit item</button></p>
    </form>
    <hr />
    <div>
      <p>name: {{ user.brand }}</p>
      <p>lastname: {{ user.model }}</p>
      <p>email: {{ user.price }}</p>
      <p>password: {{ user.warranty }}</p>
      <p>password: {{ user.feature }}</p>
      <p></p>
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      user: {
        brand: "",
        model: "",
        price: "",
        warranty: "",
        feature: "",
        type: "electronic"
      }
    };
  },
  methods: {
    async editUser() {
      try {
        console.log(this.user)
        await UsersService.put(this.user)
        this.$router.push("/users")
      } catch (err) {
        console.log(err)
      }
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId
      this.user = (await UsersService.show(userId)).data
    } catch (err) {
      console.log(err)
    }
  }
};
</script>

<style></style>
