<template >
  <div>
    <!-- <Login /> -->
    <!-- <sidebar /> -->
    <!-- <createUser /> -->
    <!-- <createEmployee /> -->
    <!-- <createDepartament /> -->
    <!-- <createPosition /> -->
    <getUser />
  </div>
</template>
<script>
import Login from './components/Login.vue'
import sidebar from './components/sidebar.vue'
import createUser from './components/createUser.vue'
import createEmployee from './components/createEmployee.vue'
import createDepartament from './components/createDepartament.vue'
import createPosition from './components/createPosition.vue'
import getUser from './components/getUser.vue'

export default {
  name: 'App',
  components: {
    getUser
  }
}
</script>

