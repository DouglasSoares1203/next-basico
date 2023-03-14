import Link from "next/link";
import { useRouter } from "next/router";

export default function CodigoENome() {
  const router = useRouter();
  const codigo = router.query.codigo;
  const nome = router.query.nome;

  return (
    <div>
      <h1>
        Rotas/{codigo}/{nome}
        <Link href="/rotas" passHref>
          <button>Voltar</button>
        </Link>
      </h1>
    </div>
  );
}
