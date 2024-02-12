import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="max-w-5xl mb-40 flex flex-col items-center gap-6 text-center">
        <Image
          width={200}
          height={200}
          src="/mushroom-home.png"
          alt="mushroom-logo"
          className="rounded-full"
        />
        <h1 className="font-extrabold text-3xl">
          Descubre los Hongos: ¿Comestibles o no?
        </h1>
        <p className="text-neutral-100 text-lg mb-4 px-24">
          Ingresa el hongo que encontraste y te diremos si es comestible.
          Recuerda, solo con fines educativos. Consulta siempre a un profesional
          para confirmar la seguridad. ¡Explora y aprende con precaución!
        </p>
        <Link
          href="/analisis"
          className="rounded before:ease relative h-12 w-40 overflow-hidden bg-[#FAF1E4] text-[#4F4A45] transition-all before:absolute before:right-0 before:top-0 before:h-20 before:w-6 before:translate-x-12 before:rotate-6 before:bg-black before:opacity-10 before:duration-700 hover:before:-translate-x-40 font-extrabold flex flex-col justify-center"
        >
          <span>Iniciar Análisis</span>
        </Link>
      </div>
    </main>
  );
}
