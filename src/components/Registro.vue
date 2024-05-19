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
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        

    }

    #content{
        width: 600px;
        min-height: 50vh;
        background: none;
        position: relative;
       
    }
    #blue{
        transform: rotate(8deg);
        width: 600px;
        min-height: 50vh;
        background-color: #00154F;
        position: absolute;
    }

     #orange{
        transform: rotate(-8deg);
        width: 600px;
        min-height: 50vh;
        background-color: #fc5204;
        position: absolute;
        
    }

    #main{
        
        width: 600px;
        min-height: 50vh;
        background-color: #455A64;
        position: absolute;
        border-radius:30px;
        display: flex;
        justify-content: center;
        align-items: center;
        
    } 

    #main form{
        width: 500px;
        display:grid;
        grid-template-columns: repeat(
            auto-fill, 
            minmax(200px, 1fr)
        ); 
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


