export default function ResultLayout({ isEdible }: { isEdible: boolean }) {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center pb-12">
      <p className="text-6xl font-semibold">{isEdible ? "✔️" : "❌"}</p>
      <h1 className="text-xl max-w-lg mt-8">
        {isEdible
          ? "Hay un 98% de probabilidad de que el hongo sea comestible. Corroborá con un profesional"
          : "Hay un 98% de probabilidad de que el hongo no sea comestible. Desaconsejamos fuertemente ingerirlo"}
      </h1>
    </div>
  );
}
