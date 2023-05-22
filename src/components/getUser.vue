<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h1>Lista usuários</h1>
            </div>
            <div class="">
                <div>
                    <button type="" class="btn btn-outline-secondary mb-2">Cadastrar usuário</button>
                </div>
            </div>
            <table class="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Morada</th>
                        <th scope="col">Número</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cargo</th>
                        <th scope="col">Departamento</th>
                        <th scope="col">Actualizar</th>
                        <th scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Chris Alberto</td>
                        <td>Samba, Luanda</td>
                        <td>945213730</td>
                        <td>chrisalberto@gmail.com</td>
                        <td>CEO</td>
                        <td>Administrativo</td>
                        <td><i class='bx bx-refresh btn btn-info' style="margin-left: 15px;"></i></td>
                        <td><i class='bx bxs-trash btn btn-danger' style="margin-left: 9px;"></i></td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {

    name: 'getUser',
    components: {
        sidebar
    }
}
</script>

<style scoped>
td {
    border: 1px solid rgb(165, 174, 180);
}

th {
    border: 1px solid rgb(165, 174, 180);
}



label {
    margin: 7px;
    font-weight: 200;
    font-family: 'Courier New', Courier, monospace;
}

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
}
</style>
