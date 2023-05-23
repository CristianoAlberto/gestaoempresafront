<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h1>Cadastrar funcionário</h1>
            </div>
            <div class="form_style">
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group ">
                                <label>Nome</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite o seu nome aqui..."
                                    required />
                            </div>
                            <div class="form-group">
                                <label>Morada</label>
                                <input type="text" class="form-control mb-2" placeholder="Digite a sua morada..."
                                    required />
                            </div>
                            <div class="form-group">
                                <label>Número</label>
                                <input type="number" class="form-control mb-2" placeholder="+244 945..." required />
                            </div>
                            <div class="form-group">
                                <label>Email</label>
                                <input type="email" class="form-control mb-2" placeholder="Digite o seu email aqui..."
                                    required />
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="form-group">
                                <label>Enviar foto</label>
                                <input type="file" class="form-control mb-3" required />
                            </div>

                            <div class="form-group">
                                <label>Cargo</label>
                                <select class="form-select mb-3">
                                    <option>Selecionar um cargo</option>
                                    <option>Ceo</option>
                                    <option>Gestor</option>
                                    <option>Auxiliar</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Departamento</label>
                                <select class="form-select" required>
                                    <option>Selecionar um departamento</option>
                                    <option>Admistrativo</option>
                                    <option>Comércio</option>
                                    <option>Segurança</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="d-grid gap-2">
                        <button type="submit" class="btn btn-outline-success btn-lg mt-2">Cadastrar</button>
                        <router-link class="form-control btn btn-outline-danger btn-lg" to="/employee">Voltar</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import sidebar from './sidebar.vue';
export default {
    name: 'createEmployee',
    components: {
        sidebar
    }
}
</script>

<style scoped>
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
    font-family: 'Courier New', Courier, monospace;
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