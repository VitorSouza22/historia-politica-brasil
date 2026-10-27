import { notFound } from "next/navigation";
import { periodos } from "../../../data/periodos";

export async function Conteudo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const periodo = periodos.find((p) => p.slug === slug);
  if (!periodo) notFound();

  return (
    <>
      <h1 className="text-4xl font-bold mt-4">{periodo.nome}</h1>

      <p className="text-gray-600 mb-6">
        {periodo.inicio} - {periodo.fim ?? "hoje"}
      </p>

      <p className="text-lg mb-6">{periodo.descricao}</p>

      {periodo.texto?.map((paragrafo, i) => (
        <p key={i} className="mb-4 leading-relaxed">
          {paragrafo}
        </p>
      ))}

      {periodo.presidentes && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Presidentes</h2>
          <ul className="space-y-1">
            {periodo.presidentes.map((p) => (
              <li key={p.nome}>
                {p.nome}{" "}
                <span className="text-gray-600">({p.mandato})</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {periodo.eventos && (
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Linha do tempo</h2>
          <ul className="space-y-2">
            {periodo.eventos.map((e) => (
              <li key={`${e.ano}-${e.titulo}`}>
                <strong>{e.ano}</strong>: {e.titulo}
              </li>
            ))}
          </ul>
        </section>
      )}

      {periodo.referencias && (
        <section className="mt-10 border-t border-gray-300 pt-6">
          <h2 className="text-2xl font-semibold mb-3">Referências</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {periodo.referencias.map((r) => (
              <li key={r.texto}>
                {r.url ? (
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {r.texto}
                  </a>
                ) : (
                  r.texto
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </>
  );
}