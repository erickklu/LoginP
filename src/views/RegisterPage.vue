<template>
    <div>
        <h3>Bienveindo al menú de registro</h3>
        <p>Complete los siguientes campos:</p>
        <form class="form" action="">

            <!-- <label for="">Cédula:</label> -->
            <input placeholder="CEDULA" type="number">
            <!-- <label for="">Nombres:</label> -->
            <input placeholder="NOMBRES" type="text">
            <!-- <label for="">Apellidos:</label> -->
            <input placeholder="APELLIDOS" type="text" name="" id="">

            <button @click="login()">Registrar</button>
        </form>
        
    </div>
</template>
<script>

    import { ref } from 'vue';
import { useRouter } from 'vue-router';
    export default {
        setup(){
const router = useRouter();
function login(){
      router.push({name: 'LoginPage'});
    }return{
    login
}
        }

    }








</script>
<style scoped>

    form{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
    }

    input {
        border: none;
        padding: 10px 10px 10px 10px;
        width: 350px;
        background-color: rgba(240, 239, 239, 0.978);
    }
    p{
        font-weight: bold;
        color: rgb(105, 105, 105);
    }
</style>