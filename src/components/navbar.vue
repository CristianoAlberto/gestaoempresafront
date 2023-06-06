<template>
    <div class="containe">
        <div class="input_style">
            <i class='mdi mdi-magnify'></i>
            <input type="text" placeholder="Search..." />
        </div>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style scoped>
.containe {
    margin-left: 15%;
    background-color: #11101d;
    height: 50px;
}

input {
    left: 0;
    top: 0;
    border-radius: 12px;
    outline: none;
    border: none;
    background: #1d1b31;
    padding-left: 5px;
    font-size: 20px;
    color: #fff;
    align-items: center;
    padding: 1px;
    padding-left: 50px;
    padding-right: 70px;


}

.input_style {
    padding-top: 7px;
    margin-left: 35%;
}

i {
    color: white;
}
</style>