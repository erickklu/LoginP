<template>
  <div>
    <h2>Iniciar Sesión</h2>
    <form>
      <label for="username">Nombre de Usuario:</label>
      <input placeholder="USUARIO" v-model="username" type="text" id="username" required>

      <label for="password">Contraseña:</label>
      <input placeholder="CONTRASEÑA" v-model="password" type="password" id="password" required>

      <button @click="login()" type="submit">Iniciar Sesión</button>
      <button @click="register()">Registro</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';


    const router = useRouter();
    const username = ref('');
    const password = ref('');

    function login() {
      // Simular la lógica de inicio de sesión
      if (username.value === 'usuario' && password.value === 'contraseña') {
        // Redirigir a la página del menú
        router.push({ name: 'MenuPage' });
      } else {
        alert('Credenciales incorrectas');
      }
    }

    function register(){
      router.push({name: 'RegisterPage'});
    }

    

</script>

<style scoped>
/* Estilos específicos del componente si es necesario */
/* form {
  display: flex;
  flex-direction: column;
} */

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
