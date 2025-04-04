import { FreshContext, Handlers } from "$fresh/server.ts";
import { PageProps } from "$fresh/server.ts";
import Axios from "npm:axios"

type PaisProps = {
  nombre: string;
  pais: string;
};

export const handler: Handlers = {
  GET(req: Request, ctx: FreshContext<unknown, PaisProps>) {
    try {
        const url= new URL(req.url)
        const telefono=url.searchParams.get("telefono")
        if(telefono?.length!=9){
            return <div>No funciona tampoco</div>;

        }
        const api=Axios.get<PaisProps>(`https://api.api-ninjas.com/v1/validatephone?number${telefono}`)
        const response= ctx.render(api)
        return new response;
        
      
    } catch (error) {
      return <div>No funciona macho</div>;
    }
  },
};

export default function Page({ data }: PageProps<PaisProps>) {
  const { nombre, pais } = data;
  return (
    <div>
      <header class="header">
        <h1>Pais</h1>
        <p> El nombre es {nombre}</p>
        <p>El pais es {pais}</p>
        <footer class="footer"></footer>
      </header>
    </div>
  );
}
