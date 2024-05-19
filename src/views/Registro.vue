<template>
    <div id="container">
        <div id="content">
            <div id="blue"></div>
            <div id="orange"></div>
            <div id="main">
                <form action="">
                    <input type="number" placeholder="Id Card">
                    <input type="text" placeholder="Avatar">
                    <input type="text" placeholder="Names">
                    <input type="text" placeholder="Last Name">
                    <input type="text" placeholder="Last Name">
                    <input type="text" placeholder="Phone Number">
                    <input type="email" placeholder="Email">
                    
                    <input type="text" placeholder="User">
                    <input type="text" placeholder="Password">
                    <input type="text" placeholder="Repeat Password"> 
                    <button>REGISTRAR</button>
                </form>
            </div> 
        </div>
        
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>

    #container{
        box-sizing: border-box;
        background: linear-gradient(180deg, #00154F, #fc5204);
        display: flex;
        justify-content: center;
        align-items: center;
        /* Posibles errores */
        width: 100%;
        min-height: 100vh;
    }

    #content{
        background-color: yellow;
        /* El ancho y alto esta excelente, no tocar */
        width: 60vw;
        height: 70vh;
        background: none;
        position: relative;
       
    }
    #blue{
        transform: rotate(8deg);
        width: 60vw;
        height: 70vh;
        background-color: #00154F;
        position: absolute;
    }

     #orange{
        transform: rotate(-8deg);
        width: 60vw;
        height: 70vh;
        background-color: #fc5204;
        position: absolute;
        
    }

    #main{
        /* no tocar */
        width: 60vw;
        height: 70vh;
        /* no tocar */
        background-color: #455A64;
        position: absolute;
        border-radius:30px;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin: 0 auto; */
    } 

    #main form{
        /* position: absolute; */
        background-color: none;
        display:grid;
        width: 400px;
        grid-template-columns: repeat(
            auto-fill, 
            minmax(150px, 1fr)
        ); 
        /* grid-template-columns: repeat(2, 1fr); */
        gap: 10px;
        padding: 10px;
        
    }

    

    #main form input{
        padding: 10px;
        /* border-radius:15px; */
        border:none;
        border-bottom: 2px solid white;
        background: none; 
    }

    button{
        grid-column: 1/-1;
    }

    ::placeholder{
        
    color: white;
    font-size: 15px;
  
    }
</style>


