

<template>
  <div class="auth-container">
    <h1>Login</h1>
    <form @submit.prevent="">
      <input v-model="username" type="text" placeholder="username" required />
      <input v-model="email" type="email" placeholder="Email" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
    <router-link to="/signup">Don't have an Account? Sign up</router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    };
  }
};

const router = useRouter();

// Reactive variables for form inputs
const username = ref("");
const email = ref("");
const password = ref("");

const handleLogin = async () => {
  try {
    const response = await axios.post("https://localhost:8080/api/login", {
      username: username.value,
      email: email.value,
      password: password.value
    });

    console.log("Login successful:", response.data);
    
    // Redirect to dashboard or homepage after successful login
    router.push("/");
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>
