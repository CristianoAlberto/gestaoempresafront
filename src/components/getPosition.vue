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
                <router-link to="/createPosition"><i class='mdi mdi-plus btn btn-outline-primary mb-1'></i></router-link>
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
                    <tr v-for="(item, i) in  data.dadosPaginados " :key="i">
                        <th>{{ (data.paginaActual - 1) * 5 + i + 1 }}</th>
                        <td>{{ item.name }}</td>
                        <td>{{ item.base_salary }}</td>
                        <td>{{ item.subsidy }}</td>
                        <td>{{ item.net_salary }}</td>
                        <td><button @click="updatePosition(item.positionId)"
                                class='mdi mdi-pencil btn btn-warning'></button>
                        </td>
                        <td><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                @click="softDelete(item.positionId)" class='mdi mdi-delete btn btn-danger'></button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div style="margin-left: 30%;">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item" v-on:click="getPreviousPage()"><a class="page-link"
                                href="/#/position">Previous</a>
                        </li>
                        <li v-for="pagina in totalPaginas()" v-bind:class="isActive(pagina)"
                            v-on:click="getDataPagina(pagina)" class="page-item"><a class="page-link" href="/#/position">{{
                                pagina
                            }}</a>
                        </li>
                        <li class="page-item" v-on:click="getNextPage()"><a class="page-link" href="/#/position">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
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
            data: {
                elementosPorPagina: 5,
                dadosPaginados: [],
                paginaActual: 1
            },
        };
    },

    mounted() {
        this.fetchData();
    },
    methods: {

        totalPaginas() {
            return Math.ceil(this.items.length / this.data.elementosPorPagina)
        },

        getDataPagina(noPagina) {
            this.data.paginaActual = noPagina
            this.data.dadosPaginados = []
            let ini = (noPagina * this.data.elementosPorPagina) - this.data.elementosPorPagina
            let fin = (noPagina * this.data.elementosPorPagina)
            this.data.dadosPaginados = this.items.slice(ini, fin)
        },

        getPreviousPage() {
            if (this.data.paginaActual > 1) {
                this.data.paginaActual--
            }
            this.getDataPagina(this.data.paginaActual)
        },

        getNextPage() {
            if (this.data.paginaActual < this.totalPaginas()) {
                this.data.paginaActual++
            }
            this.getDataPagina(this.data.paginaActual)
        },

        isActive(noPagina) {
            return noPagina == this.data.paginaActual ? 'active' : ''
        },

        async fetchData() {

            const config = {
                headers: { 'x-acess-token': localStorage.getItem('token') }
            }

            await this.$axios.get('/position/positionGet', config)
                .then(response => {
                    this.items = response.data;
                    this.getDataPagina(1)
                    console.log(this.items)
                })
                .catch(error => {
                    console.error(error);
                });
        },

        async softDelete(id) {
            localStorage.setItem('deletePositionId', id)
        },

        async deletePosition(password) {
            const id = localStorage.getItem('deletePositionId')

            await this.$axios.delete(`position/positionDelete/${id}`,
                {
                    headers: {
                        "x-acess-token": localStorage.getItem("token")
                    },
                    params: {
                        userId: localStorage.getItem("id"),
                        password
                    }
                }).then(response => {
                    if (response.data.message.slice(0, 1) == 'p') {
                        this.$toast.error(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear(),
                                location.reload()
                        }, 2000)
                    } else if (response.data.message.slice(0, 1) == 'N') {
                        this.$toast.warning(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear(),
                                location.reload()
                        }, 2000)
                    } else {
                        this.$toast.success(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear(),
                                location.reload()
                        }, 2000)
                    }

                }).catch(error => {
                    console.error(error)
                })
        },

        async updatePosition(value) {
            localStorage.setItem("updatePositionId", value)
            this.$router.push('/createPosition')
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