import { FunctionComponent } from "preact/src/index.d.ts";


const Page:FunctionComponent=()=>{
    return(
        <div>
           <form>
            <h1>Bienvenido al parcial</h1>
            <input type="text" name="telefono" value="" placeholder="telefono"/>
            <button type="submit" ><a href="/country/pais">buscar</a> </button>
           </form>
         
          

        </div>
    )
}

export default Page;