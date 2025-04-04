import { FreshContext, Handlers } from "$fresh/server.ts";
type CiudadProps={
    nom_ciudad:string
    pais:string
    temperatura:string;
}
export const handler: Handlers = {
  async GET(_req: Request, ctx: FreshContext<unknown, CiudadProps>) {
    const resp = await ctx.render();
    resp.headers.set("X-Custom-Header", "Hello");
    return resp;
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>Ciudad</h1>
      <p>Vaya mierda de ciudad macho.</p>
    </main>
  );
}