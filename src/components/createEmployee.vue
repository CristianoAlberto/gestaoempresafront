<template>
    <sidebar />
    <div v-if="validate == false" class="container-fluid">
        <div class="content_top">
            <div>
                <h1>Cadastrar funcionário</h1>
            </div>
            <div class="form_style">
                <form @submit="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label>Nome</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite o seu nome aqui..."
                                    required v-model="data.name" />
                            </div>
                            <div class="form-group">
                                <label>Morada</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite a sua morada..." required
                                    v-model="data.adress" />
                            </div>
                            <div class="form-group">
                                <label>Número</label>
                                <input type="number" class="form-control mb-2" placeholder="+244 945..." required
                                    v-model="data.number" />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control mb-2" placeholder="Digite o seu email aqui..."
                                    required v-model="data.email" />
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Enviar foto</label>
                                <input type="file" class="form-control mb-3" required
                                    @change="event => data.file = event.target.files[0]" />
                            </div>

                            <div class="form-group">
                                <label>Cargo</label>
                                <select class="form-select mb-3">
                                    <option>Selecionar um cargo</option>
                                    <option v-for="item in itemsPosition" :value="item.positionId" :key="item.positionId">{{
                                        item.name }} </option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Departamento</label>
                                <select class="form-select" required>
                                    <option value="">Seleciona uma opção</option>
                                    <option v-for="item in itemsDepartament" :value="item.departamentId"
                                        :key="item.departamentId"> {{ item.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-outline-success btn-lg mt-2">Cadastrar</button>
                        <router-link class="form-control btn btn-outline-danger btn-lg" to="/employee">Voltar</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div v-else="validate == true" class="container-fluid">
        <div class="content_top">
            <div>
                <h1>Actualizar funcionário</h1>
            </div>
            <div class="form_style">
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label>Nome</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite o seu nome aqui..."
                                    required />
                            </div>
                            <div class="form-group">
                                <label>Morada</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite a sua morada..."
                                    required />
                            </div>
                            <div class="form-group">
                                <label>Número</label>
                                <input type="number" class="form-control mb-2" placeholder="+244 945..." required />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control mb-2" placeholder="Digite o seu email aqui..."
                                    required />
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Enviar foto</label>
                                <input type="file" class="form-control mb-3" required />
                            </div>

                            <div class="form-group">
                                <label>Cargo</label>
                                <select class="form-select mb-3">
                                    <option>Selecionar um cargo</option>
                                    <option>Ceo</option>
                                    <option>Gestor</option>
                                    <option>Auxiliar</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Departamento</label>
                                <select class="form-select" required>
                                    <option>Selecionar um departamento</option>
                                    <option>Admistrativo</option>
                                    <option>Comércio</option>
                                    <option>Segurança</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-outline-success btn-lg mt-2">Cadastrar</button>
                        <router-link class="form-control btn btn-outline-danger btn-lg" to="/employee">Voltar</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import sidebar from './sidebar.vue';
export default {
    name: 'createEmployee',
    components: {
        sidebar
    },
    data() {
        return {
            validate: false,
            updateId: 0,
            items: [],
            itemsPosition: [],
            itemsDepartament: [],
            data: {
                name: '',
                adress: '',
                number: 0,
                email: '',
                file: null,
                position: 0,
                departament: 0
            }
        }
    },

    mounted() {
        if (localStorage.getItem('updateId')) {
            this.id = localStorage.getItem('updateId')
            this.validate = true
            localStorage.removeItem('updateId')
            this.fetchData(this.updateId)
        }
        this.extraInformation()
    },

    methods: {

        async extraInformation() {
            const config = {
                headers: {
                    'x-acess-token': localStorage.getItem('token')
                }
            }

            await this.$axios.get('/position/positionGet', config).then(response => {
                this.itemsPosition = response.data
            }).catch(error => {
                console.error(error)
            })

            await this.$axios.get('/departament/departamentGet', config).then(response => {
                this.itemsDepartament = response.data

            }).catch(error => {
                console.error(error)
            })
        },

        async fetchData(id) {
            const config = {
                headers: {
                    'x-acess-token': localStorage.getItem('token')
                }
            }
            await this.$axios.get(`/employee/employeeGetId/${id}`, config).
                then(response => {
                    this.items = response.data
                }).catch(error => {
                    console.error(error)
                })
        }
    }
}
</script>

<style scoped>
.content_top {
    position: absolute;
    height: 100%;
    width: 60%;
    left: 240px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 50px;
    margin-left: 150px;
}

h1 {
    border-bottom: 1px solid black;
    width: calc(100%-240px);

}

label {
    font-size: larger;
    font-family: 'Courier New', Courier, monospace;
}

.form_style {
    margin-top: 30px;
    margin-left: 10px;
    width: calc(100%-240px);
}

/* .home_content .text {
    font-size: 25px;
    font-weight: 500;
    color: #1d1b31;
    margin: 12px;
} */
</style>