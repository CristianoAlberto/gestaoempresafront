<template>
    <sidebar />
    <div v-if="validate == false" class="container-fluid">
        <div class="content_top1">
            <router-link class="back btn btn-outline-danger mdi mdi-arrow-left" to="/departament"></router-link>
            <div>
                <h1>Cadastrar departamento</h1>
            </div>
            <div class="form_style">
                <form @submit="handleSubmit()">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Nome do departamento</label>
                            <input type="text" class="form-control mb-2" v-model="data.name" required />
                            <small class="text-muted mdi mdi-information">Por favor preencha todos os campos são de caracter
                                obrigatório. </small>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Sigla do departamento</label>
                            <input type="text" class="form-control mb-2" v-model="data.acronym" required />
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-outline-success  mt-2">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div v-if="validate == true" class="container-fluid">
        <div class="content_top1">
            <router-link class="back btn btn-outline-danger mdi mdi-arrow-left" to="/departament"></router-link>
            <div>
                <h1>Actualizar departamento</h1>
            </div>
            <div class="form_style">
                <form @submit="updateDepartament()">
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Nome do departamento</label>
                            <input type="text" class="form-control mb-2" v-model="data.name" required />
                            <small class="text-muted mdi mdi-information">Por favor preencha todos os campos são de caracter
                                obrigatório. </small>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Sigla do departamento</label>
                            <input type="text" class="form-control mb-2" v-model="data.acronym" required />
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-outline-success  mt-2">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {

    name: 'createDepartament',
    components: {
        sidebar
    },
    data() {
        return {
            data: {
                name: '',
                acronym: ''
            },
            id: '',
            validate: false,
        }
    },
    mounted() {
        const updateDepartamentId = localStorage.getItem("updateDepartamentId")
        if (updateDepartamentId > 0) {
            this.validate = true
            this.fetchData(updateDepartamentId)
        }
    },

    methods: {
        async fetchData(id) {
            const config = {
                headers: {
                    'x-acess-token': localStorage.getItem("token")
                }
            }
            await this.$axios.get(`/departament/departamentGetId/${id}`, config)
                .then(response => {
                    this.data.name = response.data.name
                    this.data.acronym = response.data.acronym
                    this.id = localStorage.getItem("updateDepartamentId")
                    localStorage.removeItem("updateDepartamentId")
                }).catch(error => {
                    console.error(error)
                })
        },

        async handleSubmit() {
            const data = {
                name: this.data.name,
                acronym: this.data.acronym
            }

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-acess-token': localStorage.getItem("token")
                }
            }

            await this.$axios.post('/departament/departamentCreate/', data, config)
                .then(response => {
                    this.$toast.success(response.data.message)
                    setTimeout(() => {
                        this.$toast.clear(),
                            this.$router.push('/departament')
                    }, 2000)
                }).catch(error => {
                    console.error(error)
                })
        },

        async updateDepartament() {

            const data = {
                name: this.data.name,
                acronym: this.data.acronym
            }
            const config = {
                headers: { 'Content-Type': 'application/json', 'x-acess-token': localStorage.getItem('token') }
            }

            await this.$axios.put(`/departament/departamentUpdate/${this.id}`, data, config)
                .then(response => {
                    console.log(response.data)
                    this.$toast.success(response.data.message)
                    setTimeout(() => {
                        this.$toast.clear
                        this.$router.push('/departament')
                    }, 2000)
                })
                .catch(error => {
                    console.error(error)
                });

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
    width: 65%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 40px;
    margin-left: 350px;
}

.content_top {
    height: 100%;
    width: 60%;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 50px;
    margin-left: 350px;
}

h1 {
    text-align: left;
    margin-left: 30%;
}

label {
    font-size: larger;
}

.back {
    top: -35px;
    left: -19vh;

}
</style>
