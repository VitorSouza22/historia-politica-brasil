import { Conteudo } from "./conteudo";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <Conteudo params={params} />;
}