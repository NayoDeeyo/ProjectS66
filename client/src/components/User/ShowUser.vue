<template>
  <div>
    <h1>Show item by id</h1>
    <div>id: {{ user.id }}</div>
    <div>brand: {{ user.brand }}</div>
    <div>model: {{ user.model }}</div>
    <div>price: {{ user.price }}</div>
    <div>warranty: {{ user.warranty }}</div>
    <div>feature: {{ user.feature }}</div>
    <div>type: {{ user.type }}</div>
    <div><button @click="navigateTo('/user/edit/'+user.id)">edit user</button></div>
    <div><button @click="navigateTo('/users')">กลับ</button></div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      user: null
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  },
  async created() {
    try {
      let userId = this.$route.params.userId;
      this.user = (await UsersService.show(userId)).data;
      console.log(this.user);
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
