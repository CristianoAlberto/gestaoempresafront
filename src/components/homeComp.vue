<template>
    <sidebar />
    <div class="container-fluid">
        <div class="content_top">
            <div>
                <h1>SANTÓME TECNOLOGY</h1>
            </div>
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
.content_top {

    height: 100%;
    width: 60%;
    padding-top: 200px;
    left: 240px;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    text-align: center;
    margin: 50px;
    margin-left: 370px;

}
</style>
