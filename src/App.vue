<script>
export default {
  name: "App",
  data() {
    return {
      name: "John Jobs",
      status: "pending",
      tasks: ["Task 1", "Task 2", "Task 3"],
      link: "https://www.google.com",

    };
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
        
      }
    },
  },
};
</script>
<template>
  <h1>{{ name }}</h1>
  <b></b>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  
  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="index">{{ task }}</li>
  </ul>
  <!-- <a v-bind:href="link">Click to Google</a> -->
  <a :href="link">Click to Google</a>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>
