<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h1>Cadastrar departamento</h1>
            </div>
            <div class="form_style">
                <form>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Nome do departamento</label>
                            <input type="text" class="form-control mb-2" required />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Sigla do departamento</label>
                            <input type="text" class="form-control mb-2" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <router-link class="form-control btn btn-outline-danger btn-lg"
                                to="/departament">Voltar</router-link>
                        </div>
                        <div class="col-md-6">
                            <button type="submit" class="form-control btn btn-outline-success btn-lg">Cadastrar</button>
                        </div>
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
    }
}
</script>

<style scoped>
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
