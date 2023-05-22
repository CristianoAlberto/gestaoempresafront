<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h1>Cadastrar usuário</h1>
            </div>
            <div class="form_style">
                <form>
                    <div class="">
                        <div class="form-group col">
                            <label>Nome</label>
                            <input type="text" class="form-control mb-2" required />
                        </div>
                        <div class="form-group col">
                            <label>Email</label>
                            <input type="text" class="form-control mb-2" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Telefone</label>
                            <input type="number" class="form-control mb-2" required />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Senha</label>
                            <input type="password" class="form-control mb-2" required />
                        </div>
                    </div>
                    <div class="">
                        <div class="form-group col-md6">
                            <label>Enviar foto</label>
                            <input type="file" class="form-control mb-2" required />
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-outline-success btn-lg mt-2">Cadastrar</button>
                        <button type="button" class="btn btn-outline-danger btn-lg mt-2">Voltar</button>
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
    }
}
</script>

<style scoped>
label {
    margin: 7px;
    font-weight: 400;
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
