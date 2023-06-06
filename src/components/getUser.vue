<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h2>Lista de usuários</h2>
            </div>
        </div>
        <div class="botao">
            <div class="">
                <router-link to="/createUser"><i class='bx bx-plus-medical btn btn-outline-primary mb-1'></i></router-link>
            </div>
        </div>
        <div class="content_form">
            <table class="table table-striped table-dark">
                <thead style="text-align: center;">
                    <tr>
                        <th scope="col">Ordem</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Email</th>
                        <th scope="col">Número</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <tr v-for="(item, i) in items" :key="i">
                        <th>{{ i + 1 }}</th>
                        <td><img :src="'images/usersImages/' + item.picture" class="picture" /></td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.number }}</td>
                        <td><button @click="updateUser(item.userId)" class='bx bx-pencil btn btn-warning'></button> </td>
                        <td><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                @click="softDelete(item.userId)" class='bx bxs-trash btn btn-danger'></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Eliminando usuário</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label>Por favor insira a sua senha para poder eliminar!!!</label>
                    <input type="password" v-model="password" class="form-control"
                        placeholder="Digite a sua senha aqui..." />
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
                    <button type="submit" @click="deleteUser(password)" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
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
            items: [],
            password: ''
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

        async softDelete(id) {
            localStorage.setItem('deleteUserId', id)
        },

        async deleteUser(password) {
            const id = localStorage.getItem('deleteUserId')

            if (id == localStorage.getItem('id')) {
                this.$toast.error('Não podes eliminar este usuário!!Pois estas logado')
                localStorage.removeItem('deleteId')
                setTimeout(() => {
                    this.$toast.clear
                    location.reload()
                }, 3000)
            } else {
                await this.$axios.delete(`/user/userDelete/${id}`,
                    {
                        headers: {
                            "x-acess-token": localStorage.getItem("token")
                        },
                        params: {
                            userId: localStorage.getItem("id"),
                            password
                        }
                    }).then(response => {
                        this.$toast.success(response.data.message)
                        localStorage.removeItem('deleteId')
                        setTimeout(() => {
                            this.$toast.clear()
                            location.reload()
                        }, 3000)
                    }).catch(error => {
                        console.log(error)
                    })
            }
        },

        async updateUser(value) {
            localStorage.setItem("updateId", value)
            this.$router.push('/createUser')
        }
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

.btn-warning {
    background-color: #ffffff;
    border: none;
}

.btn-warning:hover {
    border: none;
    background-color: rgb(214, 202, 185);
}

label {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.btn-outline-primary {
    background: #1d1b31;
    color: white;
    border: none;
}

.btn-outline-primary:hover {
    background: #3c3958;
}

.content_top {
    height: 100%;
    width: 60%;
    text-align: right;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 50px;
    margin-left: 150px;
}

.botao {
    margin-left: 33%;
}

h2 {
    text-align: left;
    margin-left: 30%;
}

.content_form {
    margin-left: 33%;
}

table {
    max-width: 85%;
    min-width: 20%;
    min-height: 20%;
    font-size: 18px;
}

.picture {
    width: 30px;
    height: 40px;
    border-radius: 15px;
}

label {
    font-size: larger;
}
</style>
