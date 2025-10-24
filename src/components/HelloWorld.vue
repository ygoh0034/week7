<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <li class="nav-item">
      <router-link to="/Firelogin" class="nav-link" active-class="active"
        >Firebase Login</router-link
      >
    </li>
    <li class="nav-item">
      <router-link to="/FireRegister" class="nav-link" active-class="active"
        >Firebase Register</router-link
      >
    </li>
    <li class="nav-item">
      <router-link to="/addbook" class="nav-link" active-class="active"> Add Book </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/GetBookCount" class="nav-link" active-class="active">
        Get Book Count
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/WeatherCheck" class="nav-link" active-class="active">
        Get Weather
      </router-link>
    </li>
    <li class="nav-item">
      <router-link to="/CountBookAPI" class="nav-link" active-class="active">
        Count Book API
      </router-link>
    </li>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
