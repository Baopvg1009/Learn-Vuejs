<script setup>
import { onMounted, ref } from "vue";
const name = ref("John Jobs");
const status = ref("pending");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};
const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
  
};
const deleteTask = (index) => {
    tasks.value.splice(index, 1);
    console.log("Task deleted");
    
  };
onMounted(async() =>  {
  try{
    const response= await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((item) => item.title);
  }catch (error) {
    console.error("Error fetching tasks:", error);
  }
});
</script>
<template>
  <h1>{{ name }}</h1>
  <b></b>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>
  <h3>Tasks:</h3>
  <ul>
    <li v-for="(task,index) in tasks" :key="task">
      <span>
        {{ task }}
        <button @click="deleteTask(index)">Delete</button>
      </span>
    </li>
  </ul>
  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toggleStatus">Change Status</button>
</template>
