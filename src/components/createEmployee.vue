<template>
    <sidebar />
    <div v-if="validate == false" class="container-fluid">
        <div class="content_top1">
            <router-link class="back btn btn-outline-danger mdi mdi-arrow-left" to="/employee"></router-link>
            <div>
                <h1>Cadastrar funcionário</h1>
            </div>
            <div class="form_style">
                <form @submit="handleSubmit()">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label>Nome</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite o seu nome..." required
                                    v-model="data.name" />
                            </div>
                            <div class="form-group">
                                <label>Morada</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite a sua morada..." required
                                    v-model="data.adress" />
                            </div>
                            <div class="form-group">
                                <label>Cargo</label>
                                <select class="form-select" required v-model="data.position">
                                    <option value="">Seleciona uma opção</option>
                                    <option v-for="item in itemsPosition" :value="item.positionId" :key="item.positionId">
                                        {{ item.name }}
                                    </option>
                                </select>
                            </div>

                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control mb-2" placeholder="Digite o seu email..." required
                                    v-model="data.email" />
                            </div>

                            <div class="form-group">
                                <label>Número</label>
                                <input type="number" class="form-control mb-2" placeholder="+244 945..." required
                                    v-model="data.number" />
                            </div>

                            <div class="form-group">
                                <label>Departamento</label>
                                <select class="form-select" required v-model="data.departament">
                                    <option value="">Seleciona uma opção</option>
                                    <option v-for="item in itemsDepartament" :value="item.departamentId"
                                        :key="item.departamentId"> {{ item.name }}
                                    </option>
                                </select>
                            </div>

                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Enviar foto</label>
                                <input type="file" class="form-control mb-3" required
                                    @change="event => data.file = event.target.files[0]" />
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end ">
                        <button type="submit" class="btn btn-outline-success  mt-2">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div v-if="validate == true" class="container-fluid">
        <div class="content_top">
            <router-link class="back btn btn-outline-danger mdi mdi-arrow-left" to="/employee"></router-link>
            <div>
                <h1>Actualizar funcionário</h1>
            </div>
            <div class="form_style">
                <form @submit="updateEmployee()">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label>Nome</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite o seu nome..." required
                                    v-model="data.name" />
                            </div>
                            <div class="form-group">
                                <label>Morada</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite a sua morada..." required
                                    v-model="data.adress" />
                            </div>
                            <div class="form-group">
                                <label>Cargo</label>
                                <select class="form-select mb-2" v-model="data2.position">
                                    <option v-for="item in itemsPosition" :value="item.positionId" :key="item.positionId">{{
                                        item.name }} </option>
                                </select>
                            </div>

                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control mb-2" placeholder="Digite o seu email..." required
                                    v-model="data.email" />
                            </div>

                            <div class="form-group">
                                <label>Número</label>
                                <input type="number" class="form-control mb-2" placeholder="+244 945..." required
                                    v-model="data.number" />
                            </div>

                            <div class="form-group">
                                <label>Departamento</label>
                                <select class="form-select" v-model="data2.departament" required>
                                    <option v-for="item in itemsDepartament" :value="item.departamentId"
                                        :key="item.departamentId">
                                        {{ item.name }}
                                    </option>
                                </select>
                            </div>

                        </div>
                        <div class="col-md-6">

                            <div class="form-group">
                                <label>Enviar foto</label>
                                <input type="file" class="form-control mb-3" required
                                    @change="event => data.file = event.target.files[0]" />
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end ">
                        <button type="submit" class="btn btn-outline-success  mt-2">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue';
import sidebar from './sidebar.vue';

export default {
    name: 'createEmployee',
    components: {
        sidebar
    },
    data() {
        return {
            validate: false,
            items: [],
            itemsPosition: [],
            itemsDepartament: [],
            data: {
                name: '',
                adress: '',
                number: 0,
                email: '',
                file: null,
                position: ref(''),
                departament: ref('')
            },
            data2: {
                position: '',
                departament: 0
            },
            id: 0
        }
    },

    mounted() {
        const updateEmployeeId = localStorage.getItem('updateEmployeeId')
        if (updateEmployeeId > 0) {
            this.validate = true
            localStorage.removeItem('updateEmployeeId')
            this.fetchData(updateEmployeeId)
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
                console.log(this.itemsDepartament)
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

            this.id = id

            await this.$axios.get(`/employee/employeeGetId/${id}`, config).
                then(response => {
                    this.items = response.data
                    this.data.name = this.items.name
                    this.data.adress = this.items.adress
                    this.data.number = this.items.number
                    this.data.email = this.items.email
                    this.data2.position = this.items.positionId
                    this.data2.departament = this.items.departamentId


                }).catch(error => {
                    console.error(error)
                })
        },

        async handleSubmit() {
            const config = {
                headers: {
                    'x-acess-token': localStorage.getItem('token')
                }
            }
            const formData = new FormData

            formData.append('name', this.data.name)
            formData.append('adress', this.data.adress)
            formData.append('number', this.data.number)
            formData.append('email', this.data.email)
            formData.append('picture', this.data.file)
            formData.append('positionId', this.data.position)
            formData.append('departamentId', this.data.departament)

            await this.$axios.post('/employee/employeeCreate', formData, config)
                .then(response => {
                    if (response.data.message.slice(0, 1) == 'E') {
                        this.$toast.warning(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear(),
                                this.$router.push('/employee')
                        }, 2000)
                    } else {
                        this.$toast.success(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear(),
                                this.$router.push('/employee')
                        }, 3000)
                    }

                }).catch(error => {
                    console.error(error)
                })
        },

        async updateEmployee() {
            const config = {
                headers: {
                    'x-acess-token': localStorage.getItem('token')
                }
            }
            const formData = new FormData
            formData.append('name', this.data.name)
            formData.append('adress', this.data.adress)
            formData.append('number', this.data.number)
            formData.append('email', this.data.email)
            formData.append('picture', this.data.file)
            formData.append('positionId', this.data2.position)
            formData.append('departamentId', this.data2.departament)

            await this.$axios.put(`/employee/employeeUpdate/${this.id}`, formData, config)
                .then(response => {
                    this.$toast.success(response.data.message)
                    setTimeout(() => {
                        this.$toast.clear(),
                            this.$router.push('/employee')
                    }, 3000)
                }).catch(error => {
                    console.error(error)
                })
        }
    }
}
</script>

<style scoped>
label {
    margin: 7px;
    font-weight: 400;
    font-family: 'Courier New', Courier, monospace;
}

.content_top1 {
    height: 100%;
    width: 60%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
    margin: 40px;
    margin-left: 350px;
}

.content_top {
    height: 100%;
    width: 60%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    color: #2c3e50;
    margin: 50px;
    margin-left: 350px;
}

h1 {
    text-align: left;
    margin-left: 30%;
}

label {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.back {
    top: -35px;
    left: -19vh;

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