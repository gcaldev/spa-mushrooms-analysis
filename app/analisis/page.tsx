"use client";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, ChangeEventHandler, FormEvent, useState } from "react";
import React from "react";
import SelectInput from "@/components/SelectInput";
import RadioButtons from "@/components/RadioButtons";

const radioOptions = [
  {
    text: "Poco",
    value: "option 1",
  },
  {
    text: "Moderado",
    value: "option 2",
  },
  {
    text: "Mucho",
    value: "option 3",
  },
];

type FormProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  setMushroom: Function;
  mushroom: Partial<IMushroom>;
  setMushroomLabel: Function;
  mushroomLabel: Partial<IMushroom>;
};

const Form1 = ({
  onChange,
  setMushroom,
  mushroom,
  setMushroomLabel,
  mushroomLabel,
}: FormProps) => (
  <>
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Pasto", value: "g" },
        { text: "Hojas", value: "l" },
        { text: "Pradera", value: "m" },
        { text: "Caminos", value: "p" },
        { text: "Brezales", value: "h" },
        { text: "Urbano", value: "u" },
        { text: "Basural", value: "w" },
        { text: "Bosque", value: "d" },
      ]}
      name="habitat"
      label="Habitat"
      onChange={onChange as any}
    />
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Invierno", value: "w" },
        { text: "Verano", value: "u" },
        { text: "Otoño", value: "a" },
        { text: "Primavera", value: "s" },
      ]}
      label="Temporada"
      name="season"
      onChange={onChange as any}
    />
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Parcial", value: "p" },
        { text: "Universal", value: "u" },
      ]}
      label="Tipo de velo"
      name="veil-type"
      onChange={onChange as any}
    />
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Marrón", value: "n" },
        { text: "Morado", value: "u" },
        { text: "Rojo", value: "e" },
        { text: "Blanco", value: "w" },
        { text: "Amarillo", value: "y" },
        { text: "N/A", value: "f" },
      ]}
      label="Color de velo"
      onChange={onChange as any}
      name="veil-color"
    />

    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Marrón", value: "n" },
        { text: "Gris", value: "g" },
        { text: "Verde", value: "r" },
        { text: "Rosa", value: "p" },
        { text: "Morado", value: "u" },
        { text: "Blanco", value: "w" },
        { text: "Negro", value: "k" },
      ]}
      label="Color de las esporas"
      name="spore-print-color"
      onChange={onChange as any}
    />

    <div className="flex items-center text-start">
      <input
        id="default-checkbox"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
        onChange={onChange as any}
        name="does-bruise-or-bleed"
      />
      <label
        htmlFor="default-checkbox"
        className="ml-1 text-sm font-medium text-gray-900"
      >
        Sangra/Tiene moretones
      </label>
    </div>
  </>
);

const Form2 = ({ onChange }: FormProps) => (
  <>
    <div>
      <label
        htmlFor="number-input"
        className="text-start block mb-2 text-sm font-medium text-gray-900"
      >
        Diametro (cm)
      </label>
      <input
        type="number"
        min="0"
        id="number-input"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="90210"
      />
    </div>
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Marrón", value: "n" },
        { text: "Beige", value: "b" },
        { text: "Gris", value: "g" },
        { text: "Verde", value: "r" },
        { text: "Rosa", value: "p" },
        { text: "Púrpura", value: "u" },
        { text: "Rojo", value: "e" },
        { text: "Blanco", value: "w" },
        { text: "Amarillo", value: "y" },
        { text: "Azul", value: "l" },
        { text: "Naranja", value: "o" },
        { text: "Negro", value: "k" },
      ]}
      label="Color del sombrero"
    />

    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Fibroso", value: "i" },
        { text: "Surcos", value: "g" },
        { text: "Escamoso", value: "y" },
        { text: "Lisa", value: "s" },
        { text: "Brillante", value: "h" },
        { text: "Cuero", value: "l" },
        { text: "Sedoso", value: "k" },
        { text: "Pegajoso", value: "t" },
        { text: "Arrugado", value: "w" },
        { text: "Carnoso", value: "e" },
      ]}
      label="Superficie"
    />
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Campana", value: "b" }, // B - Campana
        { text: "Cónico", value: "c" }, // C - Cónico
        { text: "Convexo", value: "x" }, // X - Convexo
        { text: "Plano", value: "f" }, // F - Plano
        { text: "Hundido", value: "s" }, // S - Hundido
        { text: "Esférico", value: "p" }, // P - Esférico
        { text: "Otros", value: "o" }, // O - Otros
      ]}
      label="Forma"
    />
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Adnatas", value: "a" }, // A - Adnatas
        { text: "Adnexas", value: "x" }, // X - Adnexas
        { text: "Decurrentes", value: "d" }, // D - Decurrentes
        { text: "Libres", value: "e" }, // E - Libres
        { text: "Sinuosas", value: "s" }, // S - Sinuosas
        { text: "Poros", value: "p" }, // P - Poros
        { text: "Ninguna", value: "f" }, // F - Ninguna
      ]}
      label="Adhesión de filamentos"
    />

    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Marrón", value: "n" }, // Brown
        { text: "Beige", value: "b" }, // Buff
        { text: "Gris", value: "g" }, // Gray
        { text: "Verde", value: "r" }, // Green
        { text: "Rosa", value: "p" }, // Pink
        { text: "Púrpura", value: "u" }, // Purple
        { text: "Rojo", value: "e" }, // Red
        { text: "Blanco", value: "w" }, // White
        { text: "Amarillo", value: "y" }, // Yellow
        { text: "Azul", value: "l" }, // Blue
        { text: "Naranja", value: "o" }, // Orange
        { text: "Negro", value: "k" }, // Black
        { text: "Ninguno", value: "f" }, // None
      ]}
      label="Color de filamentos"
    />
    <RadioButtons
      options={radioOptions}
      onChange={() => {}}
      value={"f"}
      label="Espacio entre filamentos"
    />
  </>
);

const Form3 = ({ onChange }: FormProps) => (
  <>
    <div>
      <label
        htmlFor="number-input"
        className="text-start block mb-2 text-sm font-medium text-gray-900"
      >
        Ancho (cm)
      </label>
      <input
        type="number"
        min="0"
        id="number-input"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="90210"
      />
    </div>
    <div>
      <label
        htmlFor="number-input"
        className="text-start block mb-2 text-sm font-medium text-gray-900"
      >
        Altura (cm)
      </label>
      <input
        type="number"
        min="0"
        id="number-input"
        aria-describedby="helper-text-explanation"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        placeholder="90210"
      />
    </div>
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Bulbosa", value: "b" }, // B - Bulbosa
        { text: "Hinchada", value: "s" }, // S - Hinchada
        { text: "Clavada", value: "c" }, // C - Clavada
        { text: "Copa", value: "u" }, // U - Copa
        { text: "Igual", value: "e" }, // E - Igual
        { text: "Rizomorfos", value: "z" }, // Z - Rizomorfos
        { text: "Enraizada", value: "r" }, // R - Enraizada
      ]}
      label="Raíz del tallo"
    />
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Fibrosa", value: "i" }, // I - Fibrosa
        { text: "Surcos", value: "g" }, // G - Surcos
        { text: "Escamosa", value: "y" }, // Y - Escamosa
        { text: "Lisa", value: "s" }, // S - Lisa
        { text: "Brillante", value: "h" }, // H - Brillante
        { text: "Cuero", value: "l" }, // L - Cuero
        { text: "Sedosa", value: "k" }, // K - Sedosa
        { text: "Pegajosa", value: "t" }, // T - Pegajosa
        { text: "Arrugada", value: "w" }, // W - Arrugada
        { text: "Carnosa", value: "e" }, // E - Carnosa
        { text: "Ninguna", value: "f" }, // F - Ninguna
      ]}
      label="Superficie del tallo"
    />
    <SelectInput
      options={[
        { text: "Elegir", value: "", defaultValue: true },
        { text: "Marrón", value: "n" }, // N - Marrón
        { text: "Beige", value: "b" }, // B - Beige
        { text: "Gris", value: "g" }, // G - Gris
        { text: "Verde", value: "r" }, // R - Verde
        { text: "Rosa", value: "p" }, // P - Rosa
        { text: "Púrpura", value: "u" }, // U - Púrpura
        { text: "Rojo", value: "e" }, // E - Rojo
        { text: "Blanco", value: "w" }, // W - Blanco
        { text: "Amarillo", value: "y" }, // Y - Amarillo
        { text: "Azul", value: "l" }, // L - Azul
        { text: "Naranja", value: "o" }, // O - Naranja
        { text: "Negro", value: "k" }, // K - Negro
        { text: "Ninguno", value: "f" }, // F - Ninguno
      ]}
      label="Color del tallo"
    />
  </>
);

const Form4 = () => (
  <div className="text-start align-center mx-8">
    <h3 className="text-md text-[#4F4A45] font-bold">
      Características generales
    </h3>
    <div className="grid grid-cols-3 gap-2 text-[#4F4A45] text-sm my-2">
      <p>Color del velo: Gris</p>
      <p>Habitat: Urbano</p>
      <p>Sangra/Tiene manchas: Sí</p>
      <p>Temporada: Invierno</p>
      <p>Color de la espora: Rojo</p>
    </div>
    <hr className="h-px border-0 bg-gray-700" />
    <h3 className="text-md text-[#4F4A45] font-bold mt-4">Sombrero</h3>
    <div className="grid grid-cols-2 gap-2 text-[#4F4A45] text-sm my-2">
      <p>Color del velo: Gris</p>
      <p>Habitat: Urbano</p>
      <p>Sangra/Tiene manchas: Sí</p>
      <p>Temporada: Invierno</p>
      <p>Color de la espora: Rojo</p>
    </div>
    <hr className="h-px border-0 bg-gray-700" />
    <h3 className="text-md text-[#4F4A45] font-bold mt-4">Tallo</h3>
    <div className="grid grid-cols-2 gap-2 text-[#4F4A45] text-sm my-2">
      <p>Color del velo: Gris</p>
      <p>Habitat: Urbano</p>
      <p>Sangra/Tiene manchas: Sí</p>
      <p>Temporada: Invierno</p>
      <p>Color de la espora: Rojo</p>
    </div>
  </div>
);
const steps = [
  {
    title: "Características generales",
    inputs: Form1,
  },
  {
    title: "Características del sombrero",
    inputs: Form2,
  },
  {
    title: "Características del tallo",
    inputs: Form3,
  },
  {
    title: "Detalles del hongo",
    inputs: Form4,
  },
];

export interface IMushroom {
  "cap-diameter": number;
  "stem-width": number;
  "stem-height": number;
  "stem-color": string;
  "cap-color": string;
  "gill-color": string;
  "cap-surface": string;
  "cap-shape": string;
  "does-bruise-or-bleed": boolean;
  "gill-attachment": string;
  "gill-spacing": string;
  "stem-root": string;
  "stem-surface": string;
  "veil-type": string;
  "veil-color": string;
  "spore-print-color": string;
  "has-ring": boolean;
  "ring-type": string;
  habitat: string;
  season: string;
}

export default function MushroomAnalysisContainer() {
  const [selectedOption, setSelectedOption] = useState("");
  const [step, setStep] = useState<number>(0);
  const [mushroom, setMushroom] = useState<IMushroom | {}>({});
  const [mushroomLabel, setMushroomLabel] = useState<IMushroom | {}>({});

  const isLastStep = steps.length - 1 === step;

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const isValidMushroom = () => true;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValidMushroom()) return;

    if (isLastStep) {
      await fetch("https://www.youtube.com/feed/subscriptions");

      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleBackButton = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMushroom((prev) => ({ ...prev, [name]: value }));
  };

  const Form = steps[step].inputs;
  console.log(mushroom);
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="rounded-md h-[500px] w-[900px] bg-[#D9D9D9] mb-8 flex p-4 gap-4">
        <div className="relative rounded-md bg-black w-[250px] h-full">
          <Image
            alt="mushroom-form"
            src={`/step-images/step-${step + 1}.png`}
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="flex-1 text-center mt-4 flex flex-col items-center">
          <h2 className="text-xl text-[#4F4A45] font-extrabold">
            {steps[step].title}
          </h2>
          <form
            className="flex-1 flex flex-col mx-4 mt-8 w-full"
            onSubmit={handleSubmit}
          >
            {isLastStep ? (
              <Form4 />
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 max-w-[375px] self-center">
                {
                  <Form
                    onChange={handleChange}
                    setMushroom={setMushroom}
                    mushroom={mushroom}
                    setMushroomLabel={setMushroomLabel}
                    mushroomLabel={mushroomLabel}
                  />
                }
              </div>
            )}
            <div className="flex-1 flex justify-end items-end gap-8 mr-8">
              <span>
                {step > 0 && (
                  <button
                    className="text-[#4F4A45] font-bold"
                    type="button"
                    onClick={handleBackButton}
                  >
                    Volver
                  </button>
                )}
                <button
                  className="text-[#D9D9D9] bg-[#4F4A45] hover:bg-[#353330] font-bold rounded-lg text-sm px-6 py-2 ml-4 self-end"
                  type="submit"
                >
                  {isLastStep ? "Analizar" : "Continuar"}
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
