<template>
    <sidebar />
    <div v-if="validate == false" class="container-fluid">
        <div class="content_top1">
            <router-link class="back btn btn-outline-danger mdi mdi-arrow-left" to="/position"></router-link>
            <div>
                <h1>Cadastrar cargo</h1>
            </div>
            <div class="form_style">
                <form @submit="handleSubmit()">
                    <div class="">
                        <div class="form-group">
                            <label>Nome do cargo</label>
                            <input type="texte" class="form-control mb-2" placeholder="Digite aqui o nome do cargo..."
                                required v-model="data.name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label>Salário base</label>
                            <input type="number" placeholder="Ex: 20000, 5000, 1000, 1000000..." class="form-control mb-2"
                                required v-model="data.baseSalary" />
                        </div>
                        <div class="form-group col-md-4">
                            <label>Subsídio</label>
                            <input type="number" placeholder="Ex: 20000, 5000, 1000, 1000000..." class="form-control mb-2"
                                required v-model="data.subsidy" />
                        </div>
                        <div class="form-group col-md-4">
                            <label>Salário líquido</label>
                            <input type="number" placeholder="Ex: 20000, 5000, 1000, 1000000..." class="form-control mb-2"
                                required v-model="data.netSalary" />
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
            <router-link class="back btn btn-outline-danger mdi mdi-arrow-left" to="/position"></router-link>
            <div>
                <h1>Actualizar cargo</h1>
            </div>
            <div class="form_style">
                <form>
                    <div class="">
                        <div class="form-group">
                            <label>Nome do cargo</label>
                            <input type="texte" class="form-control mb-2" placeholder="Digite aqui o nome do cargo..."
                                required v-model="data.name" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label>Salário base</label>
                            <input type="number" placeholder="Ex: 20000, 5000, 1000, 1000000..." class="form-control mb-2"
                                required v-model="data.baseSalary" />
                        </div>
                        <div class="form-group col-md-4">
                            <label>Subsídio</label>
                            <input type="number" placeholder="Ex: 20000, 5000, 1000, 1000000..." class="form-control mb-2"
                                required v-model="data.subsidy" />
                        </div>
                        <div class="form-group col-md-4">
                            <label>Salário líquido</label>
                            <input type="number" placeholder="Ex: 20000, 5000, 1000, 1000000..." class="form-control mb-2"
                                required v-model="data.netSalary" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-outline-success mt-2">Actualizar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {

    name: 'createPosition',
    components: {
        sidebar
    },
    data() {
        return {
            data: {
                name: '',
                baseSalary: 0,
                subsidy: 0,
                netSalary: 0
            },
            id: '',
            validate: false
        }
    },
    mounted() {
        const updatePositionId = localStorage.getItem('updatePositionId')
        if (updatePositionId > 0) {
            this.validate = true
            this.fecthData(updatePositionId)
        }
    },

    methods: {

        async fecthData(id) {
            const config = {
                headers: { 'x-acess-token': localStorage.getItem('token') }
            }
            await this.$axios.get(`/position/positionGetId/${id}`, config).then(response => {
                this.items = response.data
                this.data.name = this.items.name
                this.data.baseSalary = this.items.base_salary
                this.data.subsidy = this.items.subsidy
                this.data.netSalary = this.items.net_salary
                this.id = localStorage.getItem('updatePositionId')
                localStorage.removeItem('updatePositionId')
            }).catch(error => {
                console.log(error)
            })
        },


        async handleSubmit() {

            const data = {
                name: this.data.name,
                base_salary: this.data.baseSalary,
                subsidy: this.data.subsidy,
                net_salary: this.data.netSalary
            };

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-acess-token': localStorage.getItem('token')
                },
            }
            console.log('aaa')
            await this.$axios.post('/position/positionCreate', data, config)
                .then(response => {
                    this.$toast.success(response.data.message)
                    setTimeout(() => {
                        this.$toast.clear,
                            this.$router.push('/position')
                    }, 3000)
                }).catch(error => {
                    console.error(error)
                    this.$toast.error('Algo correu errado por favor tente novamente!')
                    setTimeout(() => {
                        this.$toast.clear,
                            this.$router.push('/position')
                    }, 3000)
                })
        },

        async updatePosition() {

            const config = {
                headers: { 'Content-Type': 'application/json', 'x-acess-token': localStorage.getItem('token') }
            }

            const data = {
                name: this.data.name,
                base_salary: this.data.baseSalary,
                subsidy: this.data.subsidy,
                net_salary: this.data.netSalary,
            }

            await this.$axios.put(`/position/positionUpdate/${this.id}`, data, config)
                .then(response => {
                    this.$toast.success(response.data.message)
                    setTimeout(() => {
                        this.$toast.clear
                        this.$router.push('/position')
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
