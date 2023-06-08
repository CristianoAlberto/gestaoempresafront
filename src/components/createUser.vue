<template>
    <sidebar />
    <div v-if="validate == false" class="container-fluid">
        <div class="content_top1">
            <router-link class="back btn btn-outline-danger mdi mdi-arrow-left" to="/user"></router-link>
            <div>
                <h1>Cadastrar usuário</h1>
            </div>
            <div class="form_style">
                <form @submit="handleSubmit()">
                    <div class="">
                        <div class="form-group col">
                            <label>Nome</label>
                            <input type="text" class="form-control mb-2" required v-model="data.name" />
                        </div>
                        <div class="form-group col">
                            <label>Email</label>
                            <input type="text" class="form-control mb-2" required v-model="data.email" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Telefone</label>
                            <input type="number" class="form-control mb-2" required v-model="data.number" />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Senha</label>
                            <input type="password" class="form-control mb-2" required v-model="data.password" />
                        </div>
                    </div>
                    <div class="">
                        <div class="form-group col-md6">
                            <label>Enviar foto</label>
                            <input type="file" class="form-control mb-2" required
                                @change="event => data.file = event.target.files[0]" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" class="btn btn-outline-success  mt-2">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div v-else="validate == true" class="container-fluid">
        <div class="content_top">
            <router-link class="back btn btn-outline-danger mdi mdi-arrow-left" to="/user"></router-link>
            <div>
                <h1>Actualizar usuário</h1>
            </div>
            <div class="form_style">
                <form @submit="updateUser()">

                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Nome</label>
                            <input type="text" class="form-control mb-2" required v-model="data.name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Email</label>
                            <input type="text" class="form-control mb-2" required v-model="data.email" />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Telefone</label>
                            <input type="number" class="form-control mb-2" required v-model="data.number" />
                        </div>

                        <div class="form-group col-md-6">
                            <label>Senha antiga</label>
                            <input type="password" class="form-control mb-2" required v-model="data.password" />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Senha nova</label>
                            <input type="password" class="form-control mb-2" required v-model="data.newPassword" />
                            <small class="text-muted mdi mdi-information">Caso não queira alterar a senha é so repetir a
                                senha antiga no campo da senha nova. </small>
                        </div>
                        <div class="form-group col-md-6">
                            <label>Enviar foto</label>
                            <input type="file" class="form-control mb-2" required
                                @change="event => data.file = event.target.files[0]" />
                        </div>
                    </div>
                    <div class="">

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

import sidebar from "./sidebar.vue";
export default {

    name: 'createUser',
    components: {
        sidebar
    },
    data() {
        return {
            data: {
                name: '',
                email: '',
                number: 0,
                password: '',
                newPassword: '',
                file: null
            },
            id: '',
            items: [],
            validate: false
        }
    },
    mounted() {
        const updateId = localStorage.getItem('updateId')
        if (updateId) {
            this.validate = true
            this.fecthData(updateId)
        }
    },

    methods: {
        async fecthData(id) {
            const config = {
                headers: { 'x-acess-token': localStorage.getItem('token') }
            }
            await this.$axios.get(`/user/userGetId/${id}`, config).then(response => {
                this.items = response.data
                this.data.name = this.items.name
                this.data.email = this.items.email
                this.data.number = this.items.number
                this.id = localStorage.getItem('updateId')
                localStorage.removeItem('updateId')
            }).catch(error => {
                console.log(error)
            })
        },

        async handleSubmit() {

            const config = {
                headers: { 'x-acess-token': localStorage.getItem('token') }
            }

            const formData = new FormData()
            formData.append('name', this.data.name)
            formData.append('email', this.data.email)
            formData.append('number', this.data.number)
            formData.append('password', this.data.password)
            formData.append('picture', this.data.file)

            await this.$axios.post('/user/userCreate', formData, config)
                .then(response => {

                    if (response.data.message.slice(0, 1) == 'E') {
                        this.$toast.warning(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear()
                            this.$router.push('/user')
                        }, 3000)
                    } else {
                        this.$toast.success(response.data.message)
                        setTimeout(() => {
                            this.$toast.clear()
                            this.$router.push('/user')
                        }, 3000)
                    }
                })
                .catch(error => {
                    console.error(error)
                });
        },

        async updateUser() {

            const config = {
                headers: { 'x-acess-token': localStorage.getItem('token') }
            }

            const formData = new FormData()
            formData.append('name', this.data.name)
            formData.append('email', this.data.email)
            formData.append('number', this.data.number)
            formData.append('oldPassword', this.data.password)
            formData.append('newPassword', this.data.newPassword)
            formData.append('picture', this.data.file)

            await this.$axios.put(`/user/userUpdate/${this.id}`, formData, config)
                .then(response => {
                    this.$toast.success(response.data.message)
                    setTimeout(() => {
                        this.$toast.clear
                        this.$router.push('/user')
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
    width: 60%;
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
