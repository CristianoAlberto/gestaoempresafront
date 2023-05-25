<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h1>Lista usuários</h1>
            </div>
            <div class="">
                <div>
                    <router-link class="btn btn-outline-secondary mb-2" to="/createUser">Cadastrar
                        usuário</router-link>
                </div>
            </div>
            <table class="table table-striped table-dark">
                <thead style="text-align: center;">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Número</th>
                        <th scope="col">Actualizar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <tr v-for="(item, i) in items" :key="i">
                        <th>{{ i + 1 }}</th>
                        <td><img src="../assets/chirs.jpg" class="picture" /></td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.number }}</td>
                        <td><i :value=item.userId class='bx bx-refresh btn btn-info'></i></td>
                        <td><i :value=item.userId class='bx bxs-trash btn btn-danger'></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {

    name: 'getUser',
    components: {
        sidebar
    },
    data() {
        return {
            items: []
        }
    },
    mounted() {
        this.fetchData()
    },
    methods: {
        async fetchData() {

            const config = {
                headers: { 'x-acess-token': localStorage.getItem('token') }
            }
            await this.$axios.get('/user/userGet', config)
                .then(response => {
                    this.items = response.data;
                    console.log(this.items)
                })
                .catch(error => {
                    console.error(error);
                });
        },
    },
}
</script>

<style scoped>
td {
    border: 1px solid rgb(165, 174, 180);
}

th {
    border: 1px solid rgb(165, 174, 180);
}



label {
    margin: 7px;
    font-weight: 200;
    font-family: 'Courier New', Courier, monospace;
}

.content_top {
    position: absolute;
    height: 100%;
    width: 60%;
    left: 240px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 50px;
    margin-left: 150px;
}

.picture {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 12px;
}

h1 {
    border-bottom: 1px solid black;
    width: calc(100%-240px);

}

label {
    font-size: larger;
}
</style>
