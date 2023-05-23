<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h1>APRESENTAÇÃO</h1>
            </div>
            <span class="text">Apresentando o Gestão de Empresa<br />

                Estou entusiasmado em compartilhar com vocês um vislumbre do meu novo sistema em desenvolvimento, Gestão de
                Empresa. Este sistema inovador está sendo projetado para revolucionar a forma como
                você os recursos da sua empresa.

                Sou um dev talentoso e dedicado, estamos empenhado em criar uma solução robusta e
                intuitiva que atenda às suas necessidades específicas.</span>
        </div>
    </div>
</template>

<script>
import sidebar from "./sidebar.vue";
export default {

    name: 'homeComp',
    components: {
        sidebar
    }
}
</script>

<style scoped>
.picture {
    height: 45px;
    width: 45px;
    object-fit: cover;
    border-radius: 12px;
}

label {
    margin: 7px;
    font-weight: 200;
    font-family: 'Courier New', Courier, monospace;
}


.text {
    font-size: larger;
    font-family: 'Times New Roman', Times, serif;
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
