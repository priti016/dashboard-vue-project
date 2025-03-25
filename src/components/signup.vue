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

const username = ref("");
const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const response = await axios.post("https://localhost:8080/api/signup", {
      username: username.value,
      email: email.value,
      password: password.value
    });

    console.log("Signup successful:", response.data);
    
    // Redirect to dashboard or homepage after successful login
    router.push("/signup");
  } catch (error) {
    console.error("Signup failed:", error);
  }
};
  </script>
  