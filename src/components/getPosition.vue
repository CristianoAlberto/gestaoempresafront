<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h2>Lista de cargos</h2>
            </div>
        </div>
        <div class="botao">
            <div class="">
                <router-link to="/createPosition"><i
                        class='bx bx-plus-medical btn btn-outline-primary mb-1'></i></router-link>
            </div>
        </div>
        <div class="content_form">
            <table class="table table-striped table-dark">
                <thead style="text-align: center;">
                    <tr>
                        <th scope="col">Ordem</th>
                        <th scope="col">Nome do cargo</th>
                        <th scope="col">Salário</th>
                        <th scope="col">Subsídio</th>
                        <th scope="col">Salário líquido</th>
                        <th scope="col">Editar</th>
                        <th scope="col">Eliminar</th>

                    </tr>
                </thead>
                <tbody style="text-align: center;">
                    <tr v-for="(item, i) in  items " :key="i">
                        <th>{{ i + 1 }}</th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.base_salary }}</td>
                        <td>{{ item.subsidy }}</td>
                        <td>{{ item.net_salary }}</td>
                        <td><button @click="updatePosition(item.userId)" class='bx bx-pencil btn btn-warning'></button>
                        </td>
                        <td><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                @click="softDelete(item.positionId)" class='bx bxs-trash btn btn-danger'></button>
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
                    <button type="submit" @click="deletePosition(password)" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import sidebar from "./sidebar.vue";
export default {

    name: 'getPosition',
    components: {
        sidebar
    },
    data() {
        return {
            items: [],
        };
    },

    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {

            const config = {
                headers: { 'x-acess-token': localStorage.getItem('token') }
            }

            await this.$axios.get('/position/positionGet', config)
                .then(response => {
                    this.items = response.data;
                    console.log(this.items)
                })
                .catch(error => {
                    console.error(error);
                });
        },

        async softDelete() {
            localStorage.setItem('deletePositionId')
        },

        async deletePosition(password) {
            const id = localStorage.getItem('deletePositionId')

            const config = {
                headers: {
                    'x-acess-token': localStorage.getItem('token')
                },
                params: {
                    userId: localStorage.getItem("id"),
                    password
                }
            }

            await this.$axios.delete(`position/positionDelete/${id}`, config)
                .then(response => {
                    if (response.data.message.slice(0, 1) == 'p') {
                        this.$toast.error(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear,
                                location.reload()
                        }, 3000)
                    } else if (response.data.message.slice(0, 1) == 'N') {
                        this.$toast.warning(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear,
                                location.reload()
                        }, 3000)
                    } else {
                        this.$toast.success(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear,
                                location.reload()
                        }, 3000)
                    }

                }).catch(error => {
                    console.error(error)
                })
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


label {
    font-size: larger;
}
</style>