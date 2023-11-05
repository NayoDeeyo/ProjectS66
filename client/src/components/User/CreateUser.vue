<template>
  <div>
    <h1>Create new item</h1>
    <form v-on:submit.prevent="createUser">
      <p>brand: <input type="text" v-model="user.brand"></p>
      <p>model: <input type="text" v-model="user.model"></p>
      <p>price: <input type="text" v-model="user.price"></p>
      <p>warranty: <input type="text" v-model="user.warranty"></p>
      <p>feature: <input type="text" v-model="user.feature"></p>
      <p><button type="submit">create user</button></p>
    </form>
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
    async createUser() {
      try {
        await UsersService.post(this.user)
        this.$router.push('/users')
      } catch (err) {
        console.log(err)
      }
    }
  }
};
</script>

<style></style>
