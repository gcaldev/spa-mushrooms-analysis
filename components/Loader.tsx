import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen pb-12">
      <Image
        width={200}
        height={200}
        src="/mushroom-loader.png"
        alt="mushroom-loader"
      />
      <h1 className="text-xl font-semibold">
        Estamos analizando los detalles del hongo
      </h1>
    </div>
  );
}
