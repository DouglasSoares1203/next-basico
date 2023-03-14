import Link from "next/link";
import Router from "next/router";

export default function Rotas() {
  function navegacaoSimples(url) {
    Router.push(url);
  }

  function navegacaoComParams(url) {
    Router.push({
      query: {
        id: 123,
        nome: "Ana Silva",
      },
    });
  }

  return (
    <div>
      <h1>Rotas Index</h1>
      <ul>
        <Link href="/rotas/params?id=12&nome=Ana" passHref>
          <li>Params</li>
        </Link>
        <Link href="/rotas/123/buscar" passHref>
          <li>Buscar</li>
        </Link>
        <Link href="/rotas/123/Daniel" passHref>
          <li>Daniel</li>
        </Link>
      </ul>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <button onClick={navegacaoComParams}>Params</button>
        <button onClick={() => Router.push("/rotas/123/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/Daniel")}>
          Daniel
        </button>
      </div>
    </div>
  );
}
