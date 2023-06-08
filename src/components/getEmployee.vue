<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h2>Lista de funcionários</h2>
            </div>

            <div class="botao">
                <div class="">
                    <router-link to="/createEmployee"><i
                            class='mdi mdi-plus btn btn-outline-primary mb-1'></i></router-link>
                </div>
            </div>

            <div class="row ">
                <div v-for="(item, i) in items " :key="i" class="col-md-4 mb-2">
                    <div class="card">
                        <img :src="'images/employeesImages/' + item.picture" class="card-img-top picture" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ item.name }}</h5>
                            <h6>Departamento: {{ item.myDepartament }}</h6>
                            <h6>Cargo: {{ item.myPosition }}</h6>
                            <div class="d-flex justify-content-end">
                                <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"
                                    @click="moreInformation(item.employeeId, item.myPosition, item.myDepartament, item.employeeId)"
                                    class="btn-chris mdi mdi-information-variant"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Informações do funcionário</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-5">
                            <img class="picture2" :src="'images/employeesImages/' + itemsMoreInformation.picture" />
                        </div>
                        <div class="col-md-7">
                            <ul style="list-style-type: none;">
                                <li><label>Nome:</label> {{ itemsMoreInformation.name }}</li>
                                <li><label>Telefone:</label> {{ itemsMoreInformation.number }}</li>
                                <li><label>Email:</label> {{ itemsMoreInformation.email }}</li>
                                <li><label>Endereço:</label> {{ itemsMoreInformation.adress }}</li>
                                <li><label>Cargo:</label> {{ itemsMoreInformation.positionId }}</li>
                                <li><label>Departamento:</label> {{ itemsMoreInformation.departamentId }}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" @click="updateEmployee(itemsMoreInformation.id)"
                        class="btn btn-primary">Editar</button>
                    <button type="submit" @click="deletePosition(password)" class="btn btn-danger">Eliminar</button>
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
            itemsDepartament: [],
            itemsModal: [],
            itemsMoreInformation: {
                id: 0,
                name: '',
                adress: '',
                email: '',
                number: '',
                positionId: '',
                departamentId: '',
                picture: ''
            }
        };
    },
    mounted() {
        this.fetchData();
    },

    methods: {

        async moreInformation(value, position, departament, employeeId) {
            const config = {
                headers: {
                    'x-acess-token': localStorage.getItem('token')
                }
            }

            await this.$axios.get(`/employee/employeeGetId/${value}`, config)
                .then(response => {
                    this.itemsModal = response.data
                    this.itemsMoreInformation.name = this.itemsModal.name
                    this.itemsMoreInformation.adress = this.itemsModal.adress
                    this.itemsMoreInformation.email = this.itemsModal.email
                    this.itemsMoreInformation.number = this.itemsModal.number
                    this.itemsMoreInformation.picture = this.itemsModal.picture
                    this.itemsMoreInformation.positionId = position
                    this.itemsMoreInformation.departamentId = departament
                    this.itemsMoreInformation.id = employeeId
                }).catch(error => {
                    console.error(error)
                })

        },
        async fetchData() {

            const config = {
                headers: { 'x-acess-token': localStorage.getItem('token') }
            }
            await this.$axios.get('/employee/employeeGet', config)
                .then(response => {
                    this.items = response.data;
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
label {
    font-weight: bold;
}

.picture {
    height: 20%;
    width: auto;
    aspect-ratio: 1;
}

.picture2 {
    max-height: 300px;
    min-height: 300px;
    max-width: 250px;
    min-width: 250px;
}

.modal-lg {
    max-width: 600px;
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
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    margin: 50px;
    margin-left: 30%;
}

h1 {
    border-bottom: 1px solid black;
    width: calc(100%-240px);
}


.btn-chris:hover {
    padding-left: 30px;
    padding-right: 30px;
    transition: 0.1s;
    background-color: rgba(0, 80, 199, 0.7);
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
</style>
