<template>
    <homeComp />
</template>

<script>
import homeComp from '../components/homeComp.vue'
export default {
    name: "home",
    components: {
        homeComp
    },

    mounted() {

        const token = localStorage.getItem("token")

        if (!token) {
            this.$router.push("/login")
        }
    }
}
</script>