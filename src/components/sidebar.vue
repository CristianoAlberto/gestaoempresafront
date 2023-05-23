<template>
    <div class="sidebar">
        <div class="logo_content">
            <div class="logo">
                <img class="ia" width="40" height="40"
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-enterprise-mobile-app-development-flaticons-lineal-color-flat-icons-3.png"
                    alt="external-enterprise-mobile-app-development-flaticons-lineal-color-flat-icons-3" />
                <div class="logo_name">Empresa_API</div>
            </div>
            <i class='bx bx-menu' id="btn"></i>
        </div>
        <ul class="nav_list">
            <li>
                <a href="#">
                    <i class='bx bx-search' id="s"></i>
                    <input type="text" placeholder="Search..." />
                </a>
                <span class="tooltips">Search...</span>
            </li>
            <li>
                <a href="#">
                    <img class="ia" width="20" height="20" src="https://img.icons8.com/dusk/20/dashboard.png"
                        alt="dashboard" />
                    <span class="links_name"> Dashboard</span>
                </a>
                <span class="tooltips">Dashboard</span>
            </li>
            <li>
                <router-link to="/user">
                    <img class="ia" width="20" height="20" src="https://img.icons8.com/stickers/20/user-skin-type-2.png"
                        alt="user-skin-type-2" />
                    <span class="links_name"> User</span>
                </router-link>
                <span class="tooltips">User</span>
            </li>
            <li>
                <router-link to="/departament">
                    <img class="ia" width="20" height="20"
                        src="https://img.icons8.com/fluency/48/organization-chart-people.png"
                        alt="organization-chart-people" />
                    <span class="links_name"> Departaments</span>
                </router-link>
                <span class="tooltips">Departaments</span>
            </li>
            <li>
                <router-link to="/position">
                    <img class="ia" width="20" height="20" src="https://img.icons8.com/plasticine/20/briefcase.png"
                        alt="briefcase" />
                    <span class="links_name"> Positions</span>
                </router-link>
                <span class="tooltips">Positions</span>
            </li>
            <li>
                <router-link to="/employee">
                    <img class="ia" width="20" height="20" src="https://img.icons8.com/color/20/men-age-group-5.png"
                        alt="men-age-group-5" />
                    <span class="links_name"> Employee</span>
                </router-link>
                <span class="tooltips">Employee</span>
            </li>
        </ul>
        <div class="profile_content">
            <div class="profile">
                <div class="profile_details">
                    <img src="../assets/chirs.jpg" />
                    <div class="name_job">
                        <div class="name">
                            Chris Alberto
                        </div>
                        <div class="job">
                            Back-end Developer
                        </div>
                    </div>
                </div>
                <i class='bx bx-log-out' id="log_out"></i>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    name: 'sidebar',
    components: {}
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

/* .home_content {
    position: absolute;
    height: 100%;
    width: calc(100%-240px);
    left: 240px;
}

.home_content .text {
    font-size: 25px;
    font-weight: 500;
    color: #1d1b31;
    margin: 12px;
} */
</style>