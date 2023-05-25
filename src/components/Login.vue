<template>
    <div class="body">
        <div class="card">
            <form @submit.prevent="login()">
                <div>
                    <h1>Iniciar sessão</h1>
                </div>
                <div class="input-box">
                    <input type="text" name="email" id="email" required v-model="data.email" />
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <input type="password" name="password" id="password" required v-model="data.password" />
                    <label>Senha</label>
                </div>
                <button type="submit" class="btn">Entrar</button>
                <!-- <img width="20" height="20" src="https://img.icons8.com/clouds/20/enter-2.png" alt="enter-2"/> -->
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Login',
    data() {
        return {
            data: {
                email: "",
                password: "",
            },
        }
    },

    methods: {
        async login() {
            try {
                const response = await this.$axios.post('/authUser/userSignUp', {
                    email: this.data.email,
                    password: this.data.password,
                });

                const token = response.data.token.token

                await localStorage.setItem("token", token)
                if (response) {
                    this.$router.push('/');
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

}
</script>

<style lang="css" scoped>
.body {
    padding: 0;
    margin: 0;
    background: url('../assets/28963.webp') no-repeat;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-size: cover;
    background-attachment: fixed;
    filter: brightness(75%);
    display: flex;
    justify-content: center;
    align-items: center;

}

.card {
    position: relative;
    background-color: rgb(165, 133, 133);
    width: 400px;
    height: 440px;
    background: transparent;
    border-radius: 20px;
    backdrop-filter: blur(20px);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.btn {
    width: 100%;
    height: 45px;
    background: #14222e;
    border: none;
    outline: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1m;
    color: #fff;
    font-weight: 500px;
}


.input-box {

    justify-content: center;
    font-size: 1em;
    color: #162938;
    font-weight: 500;
    border-bottom: 2px solid #fff;
    position: relative;
    margin: 30px 0;
    width: 300px;
    padding: 7px;


}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
    font-size: large;
    color: #fff;
}

.input-box label {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 1em;
    color: #fff;
    pointer-events: none;
    transition: .5s;
}

h1 {
    right: 40px;
    color: #fff;
    text-align: center;
}

button:hover {
    background-color: rgb(10, 73, 92);
}

.input-box input:focus~label,
.input-box input:valid~label {
    top: -5px;
}
</style>