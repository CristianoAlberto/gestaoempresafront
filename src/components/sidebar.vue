<template>
    <navbar />
    <div class="sidebar">
        <div class="logo_content">
            <div class="logo">

                <div class="logo_name">SANTÓME-TECNOLOGY</div>
            </div>

        </div>
        <ul class="nav_list">
            <li>
                <a href="/">
                    <span class="mdi mdi-home-circle links_name"> Home</span>
                </a>
                <span class="tooltips">Home</span>
            </li>
            <li>
                <router-link to="user">
                    <span class="mdi mdi-account-circle links_name"> Usuários</span>
                </router-link>
                <span class="tooltips">Usuários</span>
            </li>
            <li>
                <router-link to="/departament">
                    <span class="mdi mdi-account-group-outline links_name"> Departamentos</span>
                </router-link>
                <span class="tooltips">Departamentos</span>
            </li>
            <li>
                <router-link to="/position">
                    <span class="mdi mdi-wallet-travel links_name"> Cargos</span>
                </router-link>
                <span class="tooltips">Cargos</span>
            </li>
            <li>
                <router-link to="/employee">
                    <span class="mdi mdi-account-tie links_name"> Funcionários</span>
                </router-link>
                <span class="tooltips">Funcionários</span>
            </li>
        </ul>
        <div class="profile_content">
            <div class="profile">
                <div class="profile_details">
                    <div class="profile-pic ">
                        <img :src=data.picture />
                    </div>
                    <div class="name_job">
                        <div class="name">
                            {{ data.name }}
                        </div>
                        <div class="job">
                            Back-end Developer
                        </div>
                    </div>
                </div>
                <router-link @click="Off" to="/login">
                    <i class='bx bx-log-out' id="log_out"></i>
                </router-link>
            </div>
        </div>
    </div>
</template>



<script>
import navbar from './navbar.vue'
export default {
    name: 'sidebar',
    components: {
        navbar,
    },
    data() {
        return {
            data: {
                name: '',
                picture: ''
            }
        }
    },

    mounted() {
        const token = localStorage.getItem("token")
        this.data.name = localStorage.getItem("userName")
        const picture =
            this.data.picture = '/images/usersImages/' + localStorage.getItem("userPicture")

        if (!token) {
            this.$router.push("/login")
        }
    },
    methods: {
        async Off() {
            await localStorage.clear()
        }
    }
}


</script>

<style scoped>
.sidebar #s {
    top: -10px;
}

body {
    position: relative;
    min-height: 100vh;
    width: 100%;

    overflow: hidden;
}

.sidebar {
    padding: 0;
    margin: 0;
    /* background-image: url('../assets/img2.jpg') no-repeat; */
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 240px;
    background: #11101d;
    padding: 6px 14px;
}

.sidebar.active {
    width: 240px;
}

.sidebar .logo_content .logo {
    color: #fff;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
}

.logo_content .logo i {
    font-size: 28px;
    margin-right: 5px;
}

.logo_content .logo .logo_name {
    font-size: 20px;
    font-weight: 400;
}

.sidebar #btn {
    color: #fff;
    position: absolute;
    left: 90%;
    top: 6px;
    font-size: 20px;
    height: 50px;
    width: 50px;
    text-align: center;
    line-height: 50px;
    transform: translateX(-50%);
}

.sidebar ul {
    margin-top: 20px;
}

.sidebar ul li {
    position: relative;
    height: 50px;
    width: 100%;
    margin: 0px 5px;
    list-style: none;
    line-height: 50px;
}

.sidebar ul li .tooltips {
    position: absolute;
    left: 122px;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 6px;
    height: 35px;
    width: 122px;
    background: #fff;
    text-align: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    line-height: 35px;
    transition: 0s;
    opacity: 0;
    pointer-events: none;

}

.sidebar ul li:hover .tooltips {
    transition: all 0.5s ease;
    opacity: 1;
    top: 50%;
}

.sidebar ul li input {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 12px;
    outline: none;
    border: none;
    background: #1d1b31;
    padding-left: 50px;
    font-size: 18px;
    color: #fff;
}

.sidebar ul li i {
    position: absolute;
    z-index: 99;
    color: #fff;
    font-size: 22px;
}

.sidebar ul li a {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: all 0.4s ease;
    border-radius: 12px;
}

.sidebar ul li a:hover {
    color: #11101d;
    background: #fff;
}

.sidebar ul li i {
    height: 50px;
    min-width: 50px;
    border-radius: 12px;
    line-height: 50px;
    text-align: center;
    padding: 10px;
}

.sidebar .profile_content {
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
}

.sidebar .profile_content .profile {
    position: relative;
    padding: 10px 6px;
    height: 60px;
    background: #1d1b31;
}

.profile_content .profile .profile_details {
    display: flex;
    align-items: center;
}

.profile .profile_details img {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 12px;
}

.profile .profile_details .name_job {
    margin-left: 10px;
}

.profile .profile_details .name {
    font-size: 15px;
    font-weight: 400;
}

.profile .profile_details .job {
    font-size: 12px;
}

.profile #log_out {
    position: absolute;
    left: 88%;
    bottom: 5px;
    transform: translateX(-50%);
    min-width: 50px;
    line-height: 50px;
    font-size: 20px;
    border-radius: 20px;
}

.profile-pic {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
}

.profile-pic img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}
</style>