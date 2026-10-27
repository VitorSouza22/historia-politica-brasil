import Link from "next/link";
import { periodos } from "@/data/periodos";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-4">
        História Política do Brasil
      </h1>

      <p className="text-center text-gray-600 mb-12">
        Do fim da Monarquia aos dias atuais
      </p>

      <ol className="max-w-3xl mx-auto border-l-2 border-gray-300">
        {periodos.map((periodo: (typeof periodos)[number]) => (
          <li key={periodo.slug} className="relative ml-8 mb-8 last:mb-0">
            <span className="absolute -left-[41px] top-7 h-4 w-4 rounded-full border-2 border-gray-100 bg-blue-600" />

            <Link
              href={`/periodo/${periodo.slug}`}
              className="block bg-white rounded-xl shadow p-6 transition hover:shadow-md hover:-translate-y-0.5"
            >
              <p className="text-sm font-semibold text-blue-600">
                {periodo.inicio} – {periodo.fim ?? "hoje"}
              </p>

              <h2 className="text-2xl font-semibold mt-1">{periodo.nome}</h2>

              <p className="mt-2 text-gray-700">{periodo.descricao}</p>

              <p className="mt-3 text-sm text-blue-600">Ver detalhes →</p>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}