<template>
  <div id="container">
    <div id="formulario">
      <form action=""> 
        <!-- Logo de la empresa -->  
        <fieldset>
          <legend>
            <figure>
              <img id="logo" src="../assets/vue.svg" alt="">
            </figure>
          </legend>
             
          <!-- Nombre de la empresa -->
          <h3 id="nombre"><strong>JOSECA</strong></h3>

          <!-- Seccion de datos de usuario -->
          <!-- Input de usuarios -->
          <section id="users">
            <input id="user" class="entrada" type="text" placeholder="Username">
            <img class="icons imguser" src="../assets/icons/perfil.png" alt="">
          </section>
          <!-- Input de contraseñas -->
          <section id="passwords">
            <input id="pass" class="entrada" type="password" placeholder="Password">
            <img class="icons imgpass" src="../assets/icons/bloquear.png" alt="">
          </section>

          <!-- Enlace de guardar para siempre la contraseña -->
          <section id="remember">
            <input type="checkbox"><p>Remember me</p>
            
          </section>

          <!-- Tiene que ocupar todo el ancho del contenedor en que esta -->
          <button id="play">Ingresar</button>

          <!-- Otros enlaces -->
          <strong><a href="#">Forgot Password?</a> </strong> 
          <p>Don't have an acount? <strong><a href="">Register</a></strong></p>
        </fieldset>
      </form>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
            return {                
                usuario:"",
                pass:"",
                
            }

        },
        methods: {
            iniciarSesion(){
                /* console.log(this.usuario, this.pass,"aaaavvvvv"); */
                let jsn={
                    "usuario":this.usuario,
                    "pass":this.pass
                };
                 axios.post('/user/login', jsn)
                .then(data => {
                    console.log("frontend", data);
                    if(data.status==200){
                        alert("Welcome hdp")
                        this.$router.push('Lista');
                    }
                    else{
                        alert("Usuario no encontrado")
                    }
                }).catch(error => {
                    alert("Usuario no encontrado");
                    
                })
                
                /*
                await this.axios.post('/login', jsn)
                .then(response => {
                    console.log(response)
                })
                .catch(error =>{
                    var data = error.response.data
                })*/
            },

            registrarUsuario(){
                this.$router.push('Persona');
            }
        },
}
</script>
  
<style scoped>

  /* Este es el contenedor principal */ 
  #container{
    width: 100%;
    min-height: 100vh;
    display: flex;
    /* align-content: center; */
    align-items: center;
    justify-content: center;
    /* background: linear-gradient(to bottom left, #455A64 30%, #fc5204 100%); */
    background: linear-gradient(180deg, #00154F, #fc5204);
    /* border: 3px solid yellow; */
    color:white;
    box-sizing: border-box;

  }

  /* Es el segundo contenedor */
  #formulario{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: none;
    /* background: linear-gradient(to bottom left, #fc5204 50%, #455A64 50%); */
    min-width: 350px;
    /* border: 3px solid #00154F;   */
  }

  /* Este es el nombre de nuestro empresa */
  #nombre{
    margin:0px;
  }

  /* Es la parte dentro del #formulario pero que contiene todo */
  fieldset{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    
    min-width: 300px;
    margin-top:10px;
    margin-bottom: -50px;
    /* opacity: 0.8; */
    background-color: #00154F;
    box-shadow: 2px 2px 10px 10px rgba(0, 0, 0, 0.2);

    /* Este background divide el fondo pantalla en diferentes porcentajes que quieras */
    /* background: linear-gradient(to bottom left, #00154F 50%, white 50%); */
    border: 3px solid white;
    /* border: 15px solid transparent;
    border-image: linear-gradient(to right, #ffbb02, #f7df05) 1; */
  }


/* Es el contenedor de nuestro logo en la parte superior */
  legend{
    background-color: white;
    border-radius: 50%;
    /* border: 3px solid white; */
    padding: 0px;
    width:100px ;
    height: 100px;
    display: flex;
    justify-content: center;
  }

   /* Referencia al tamaño de nuestro logo */
   #logo{
    width: 70px;
    height: 70px;
    padding: 5px;
    /* outline:5px solid red ;
    border: 3px solid aqua; */

  }

/* Etiqueta Form */
  #formulario form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
  }

  /* Referencia al icono que esta dentro de los inputs */
  .icons{
    width: 15px;
    height: 15px;
  }

  /* Entrada se refiere a ambas etiquetas input */
  .entrada{
    
    border-bottom: 3px solid white;
    margin: 10px;
    width: 100%;
    height: 25px;
    padding: 5px 25px 5px 10px;

  }

  /* Contiene a nuestro input de usuario y su logo */
  #users{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  /* Es el input usuario */
  #users #user{
    background: none; 
    border:none;
    border-bottom: 2px solid white;
    /* border-bottom:2px solid white; */
  }

  /* Es la pseudoetiqueta de la etiqueta input*/
  ::placeholder {
    color: white;
    font-size: 15px;
  }

  
  #users #user:hover{
    border-bottom: 2px solid white;
    

  }

  

  #users #user:focus{
    outline: none;
    
  }

  /* Contiene a nuestro input de contraseña y su logo */
  #passwords{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  /* Es el input pass */
  #passwords #pass{
    background: none; 
    border:none;
    border-bottom: 2px solid white;
    /* border-bottom:2px solid white; */
  }

  #passwords #pass:hover{
    border-bottom: 2px solid white;
  }

  #passwords #pass:focus{
    outline: none;
  }

  /* Es el logo contenido en el input de usuario */
  #users .imguser{
    position: absolute;
    right:20px;
  }
/* Es el logo contenido en el input de pass */
  #passwords .imgpass{
    position: absolute;
    right:20px;
  }

  /* Es nuestro boton */
  #play{
    width:50%;
    background-color: #455A64;
    border:none;
  }

  #play:hover{
    background: linear-gradient(180deg, #455A64, #fc5204);
  }

  #remember{  
    margin:none; 
    display: flex;
    flex-direction:row;
  }
</style>