import Image from "next/image";
import Cabecalho from "./components/Cabecalho"

export default function Home() {
  return (
    <>
      <Cabecalho/>
      <main className = "p-8">
        <h2 className =  "text-2xl font-semibold mb-4">Bem-vindo ao blog!</h2>
        <p>Explore os posts.</p>
      </main>
    </>
  )
}
