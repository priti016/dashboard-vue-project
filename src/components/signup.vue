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
  
  <script>
  import { ref } from "vue";
  import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: 'Signup',
  data() {
    return {
      username: '',
      email:'',
      password: ''
    };
  }
};
  </script>
  