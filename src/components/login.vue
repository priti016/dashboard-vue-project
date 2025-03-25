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
      email:'',
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

<style scoped>
.auth-container {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 350px;
  text-align: center;
  margin: auto;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

a {
  text-decoration: none;
  color: #007BFF;
  display: block;
  margin-top: 10px;
}

a:hover {
  text-decoration: underline;
}

</style>

