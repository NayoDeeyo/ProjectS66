<template>
  <div>
    <h1>Show all item</h1>
    <div>
      <h2>จำนวนที่มี {{ users.length }}</h2>
      <h3><button v-on:click="navigateTo('/user/create')">เพิ่มข้อมูลหม้อทอดไฟฟ้า</button></h3>
    </div>
    <div v-for="i in users" v-bind:key="i.id">
      <div>id: {{ i.id }}</div>
      <div>brand: {{ i.brand }}</div>
      <div>model: {{ i.model }}</div>
      <div>price: {{ i.price }}</div>
      <div>warranty: {{ i.warranty }}</div>

      <div>
        <button v-on:click="navigateTo('/user/' + i.id)">แสดงข้อมูลทั้งหมด</button>
      </div>
      <div>
        <button @click="navigateTo('/user/edit/' + i.id)">แก้ไขข้อมูล"</button>
      </div>
      <div><button @click="deleteUser(i)">ลบข้อมูล</button></div>
      <hr />
    </div>
  </div>
</template>

<script>
import UsersService from "@/services/UsersService";

export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    async deleteUser(user) {
      let result = confirm("Want of delete?");
      if (result) {
        try {
          await UsersService.delete(user);
          this.refreshData();
        } catch (err) {
          console.log(err);
        }
      }
    },
    async refreshData() {
      this.users = (await UsersService.index()).data;
    }
  },
  async created() {
    try {
      this.users = (await UsersService.index()).data;
    } catch (err) {
      console.log(err);
    }
  }
};
</script>

<style></style>
