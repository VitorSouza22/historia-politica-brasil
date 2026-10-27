import Link from "next/link";
import { periodos } from "../data/periodos";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-5xl font-bold text-center mb-4">
        História Política do Brasil
      </h1>

      <p className="text-center text-gray-600 mb-10">
        Do fim da Monarquia aos dias atuais
      </p>

      <div className="max-w-4xl mx-auto space-y-4">
        {periodos.map((periodo) => (
          <Link
            key={periodo.slug}
            href={`/periodo/${periodo.slug}`}
            className="block bg-white rounded-xl shadow p-6 transition hover:shadow-md hover:-translate-y-0.5"
          >
            <h2 className="text-2xl font-semibold">{periodo.nome}</h2>

            <p className="text-gray-600">
              {periodo.inicio} - {periodo.fim ?? "hoje"}
            </p>

            <p className="mt-2 text-gray-700">{periodo.descricao}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}