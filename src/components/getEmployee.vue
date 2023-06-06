<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h1>Lista funcionários</h1>
            </div>
            <div class="">
                <div>
                    <router-link class="btn btn-outline-secondary mb-2" to="/createEmployee">Cadastrar
                        funcionário</router-link>
                </div>
            </div>

            <div class="row ">
                <div v-for="(item, i) in items " :key="i" class="col-md-4 mb-2">
                    <div class="card">
                        <img src="@/assets/chris.jpg" class="card-img-top picture" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <h6>Departamento: {{ item.myDepartament }}</h6>
                            <h6>Cargo: {{ item.myPosition }}</h6>
                            <div class="d-flex justify-content-end">
                                <a @click="showToast" class="btn-chris mdi mdi-information-variant"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import sidebar from "./sidebar.vue";

export default {

    name: 'getEmployee',
    components: {
        sidebar
    },

    data() {
        return {
            items: [],
            itemsPosition: [],
            itemsDepartament: []
        };
    },
    mounted() {
        this.fetchData();
    },

    methods: {

        showToast() {
            this.$toast.show(`Hey! I'm here`);
            this.$toast.success(`Hey! I'm here`);
            this.$toast.error(`Hey! I'm here`);
            this.$toast.warning(`Hey! I'm here`);
            this.$toast.info(`Hey! I'm here`);

            setTimeout(this.$toast.clear, 3000)
        },
        async fetchData() {

            const config = {
                headers: { 'x-acess-token': localStorage.getItem('token') }
            }
            await this.$axios.get('/employee/employeeGet', config)
                .then(response => {
                    this.items = response.data;
                    console.log(this.items)
                })
                .catch(error => {
                    console.error(error);
                });

            await this.$axios.get('/position/positionGet', config)
                .then(response => {
                    this.itemsPosition = response.data

                    this.items.map((employee) => {
                        this.itemsPosition.map((position) => {
                            if (employee.positionId === position.positionId) {
                                employee.myPosition = position.name;
                            }
                        });
                    });

                }).catch(error => {
                    console.error(error)
                })

            await this.$axios.get('/departament/departamentGet', config)
                .then(response => {
                    this.itemsDepartament = response.data

                    this.items.map((employee) => {
                        this.itemsDepartament.map((departament) => {
                            if (employee.departamentId === departament.departamentId) {
                                employee.myDepartament = departament.name;
                            }
                        });
                    });

                }).catch(error => {
                    console.error(error)
                })
        },

        async updateEmployee(value) {
            localStorage.setItem('updateId', value)
            this.$router.push('/createEmployee')
        }
    },

}
</script>

<style scoped>
.picture {
    height: 30%;
    width: auto;
    aspect-ratio: 1;
}

label {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-bottom: 5px;
    font-weight: bold;
}

.content_top {
    position: absolute;
    height: 100%;
    width: 60%;
    left: 150px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 50px;
    margin-left: 150px;
}

h1 {
    border-bottom: 1px solid black;
    width: calc(100%-240px);
}

.btn-chris {
    background-color: rgb(9, 80, 187);
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-radius: 10px;
    transition: 0.1s;
}

.btn-chris:hover {
    padding-left: 30px;
    padding-right: 30px;
    transition: 0.1s;
    background-color: rgba(0, 80, 199, 0.7);
}
</style>
