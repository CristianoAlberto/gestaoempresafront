<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h1>Cadastrar cargo</h1>
            </div>
            <div class="form_style">
                <form>
                    <div class="">
                        <div class="form-group">
                            <label>Nome do cargo</label>
                            <input type="texte" class="form-control mb-2" placeholder="Digite aqui o nome do cargo..."
                                required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-4">
                            <label>Salário base</label>
                            <input type="number" placeholder="Ex: 20000, 5000, 1000, 1000000..." class="form-control mb-2"
                                required />
                        </div>
                        <div class="form-group col-md-4">
                            <label>Subsídio</label>
                            <input type="number" placeholder="Ex: 20000, 5000, 1000, 1000000..." class="form-control mb-2"
                                required />
                        </div>
                        <div class="form-group col-md-4">
                            <label>Salário líquido</label>
                            <input type="number" placeholder="Ex: 20000, 5000, 1000, 1000000..." class="form-control mb-2"
                                required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <button type="button" class="form-control btn btn-outline-danger btn-lg">Voltar</button>
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

    name: 'createPosition',
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
