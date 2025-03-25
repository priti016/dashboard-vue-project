<template>
    <div>
      <h1>Signup</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Signup</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const username = ref("");
  const email = ref("");
  const password = ref("");
  </script>
  