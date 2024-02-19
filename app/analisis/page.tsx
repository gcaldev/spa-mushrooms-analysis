"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useState,
} from "react";
import React from "react";
import SelectInput from "@/components/SelectInput";
import RadioButtons from "@/components/RadioButtons";
import { useRouter } from "next/navigation";

const radioOptions = [
  {
    text: "Nada",
    value: "f",
  },
  {
    text: "Poco",
    value: "c",
  },
  {
    text: "Mucho",
    value: "d",
  },
];

type FormProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  setMushroom: Function;
  mushroom: IMushroom;
  mushroomValidation: IMushroomValidation;
  setMushroomLabel: Function;
  mushroomLabel: Partial<IMushroomLabel>;
};

const Form1 = ({
  onChange,
  setMushroom,
  mushroom,
  setMushroomLabel,
  mushroomLabel,
  mushroomValidation,
}: FormProps) => {
  const [checked, setChecked] = useState<boolean>(
    mushroom["does-bruise-or-bleed"]
  );
  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { name, value, selectedIndex } = event.target;
    const selectedOptionText = event.target.options[selectedIndex].text;

    setMushroom((prev: any) => ({ ...prev, [name]: value }));
    setMushroomLabel((prev: any) => ({ ...prev, [name]: selectedOptionText }));
  };

  const handleCheckboxChange = () => {
    const doesBruiseOrBleed = !checked;
    setChecked((prev) => !prev);
    setMushroom((prev: any) => ({
      ...prev,
      "does-bruise-or-bleed": doesBruiseOrBleed,
    }));
    setMushroomLabel((prev: any) => ({
      ...prev,
      "does-bruise-or-bleed": doesBruiseOrBleed ? "Sí" : "No",
    }));
  };

  return (
    <>
      <SelectInput
        value={mushroom.habitat}
        options={[
          { text: "Elegir", value: "" },
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
        onChange={handleSelectChange}
        error={mushroomValidation.habitat}
        errorMessage="Campo requerido*"
      />
      <SelectInput
        value={mushroom.season}
        options={[
          { text: "Elegir", value: "" },
          { text: "Invierno", value: "w" },
          { text: "Verano", value: "u" },
          { text: "Otoño", value: "a" },
          { text: "Primavera", value: "s" },
        ]}
        label="Temporada"
        name="season"
        onChange={handleSelectChange}
        error={mushroomValidation.season}
        errorMessage="Campo requerido*"
      />
      <SelectInput
        value={mushroom["veil-type"]}
        options={[
          { text: "Elegir", value: "" },
          { text: "Parcial", value: "p" },
          { text: "Universal", value: "u" },
        ]}
        label="Tipo de velo"
        name="veil-type"
        onChange={handleSelectChange}
        error={mushroomValidation["veil-type"]}
        errorMessage="Campo requerido*"
      />
      <SelectInput
        value={mushroom["veil-color"]}
        options={[
          { text: "Elegir", value: "" },
          { text: "Marrón", value: "n" },
          { text: "Morado", value: "u" },
          { text: "Rojo", value: "e" },
          { text: "Blanco", value: "w" },
          { text: "Amarillo", value: "y" },
          { text: "N/A", value: "f" },
        ]}
        label="Color de velo"
        onChange={handleSelectChange}
        name="veil-color"
        error={mushroomValidation["veil-color"]}
        errorMessage="Campo requerido*"
      />

      <SelectInput
        value={mushroom["spore-print-color"]}
        options={[
          { text: "Elegir", value: "" },
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
        onChange={handleSelectChange}
        error={mushroomValidation["spore-print-color"]}
        errorMessage={"Campo requerido*"}
      />

      <div className="flex items-center text-start">
        <input
          id="default-checkbox"
          type="checkbox"
          checked={checked}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          onChange={handleCheckboxChange}
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
};

const Form2 = ({
  onChange,
  setMushroom,
  mushroom,
  setMushroomLabel,
  mushroomLabel,
  mushroomValidation,
}: FormProps) => {
  const [diameter, setDiameter] = useState<string>(mushroom["cap-diameter"]);
  const [selectedOption, setSelectedOption] = useState(
    mushroom["gill-spacing"]
  );

  const handleOptionChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    setSelectedOption(event.target.value);
    const optionText = radioOptions.find(
      (currentOption) => currentOption.value === value
    )?.text;
    /// alternativa .textContent
    setMushroom((prev: any) => ({ ...prev, [name]: value }));
    setMushroomLabel((prev: any) => ({ ...prev, [name]: optionText }));
  };

  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { name, value, selectedIndex } = event.target;
    const selectedOptionText = event.target.options[selectedIndex].text;

    setMushroom((prev: any) => ({ ...prev, [name]: value }));
    setMushroomLabel((prev: any) => ({ ...prev, [name]: selectedOptionText }));
  };

  const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    const diameterValue = value !== "";
    setDiameter(value);
    setMushroom((prev: any) => ({ ...prev, [name]: value }));
    setMushroomLabel((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
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
          placeholder="70"
          name="cap-diameter"
          value={diameter}
          onChange={handleInput}
        />
        {mushroomValidation["cap-diameter"] && (
          <p className="text-red-700 text-sm font-semibold">Campo requerido*</p>
        )}
      </div>
      <SelectInput
        value={mushroom["cap-color"]}
        onChange={handleSelectChange}
        options={[
          { text: "Elegir", value: "" },
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
        name="cap-color"
        error={mushroomValidation["cap-color"]}
        errorMessage={"Campo requerido*"}
      />

      <SelectInput
        value={mushroom["cap-surface"]}
        onChange={handleSelectChange}
        options={[
          { text: "Elegir", value: "" },
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
        name="cap-surface"
        error={mushroomValidation["cap-surface"]}
        errorMessage={"Campo requerido*"}
      />
      <SelectInput
        value={mushroom["cap-shape"]}
        onChange={handleSelectChange}
        options={[
          { text: "Elegir", value: "" },
          { text: "Campana", value: "b" }, // B - Campana
          { text: "Cónico", value: "c" }, // C - Cónico
          { text: "Convexo", value: "x" }, // X - Convexo
          { text: "Plano", value: "f" }, // F - Plano
          { text: "Hundido", value: "s" }, // S - Hundido
          { text: "Esférico", value: "p" }, // P - Esférico
          { text: "Otros", value: "o" }, // O - Otros
        ]}
        label="Forma"
        name="cap-shape"
        error={mushroomValidation["cap-shape"]}
        errorMessage={"Campo requerido*"}
      />
      <SelectInput
        value={mushroom["gill-attachment"]}
        onChange={handleSelectChange}
        options={[
          { text: "Elegir", value: "" },
          { text: "Adnatas", value: "a" }, // A - Adnatas
          { text: "Adnexas", value: "x" }, // X - Adnexas
          { text: "Decurrentes", value: "d" }, // D - Decurrentes
          { text: "Libres", value: "e" }, // E - Libres
          { text: "Sinuosas", value: "s" }, // S - Sinuosas
          { text: "Poros", value: "p" }, // P - Poros
          { text: "Ninguna", value: "f" }, // F - Ninguna
        ]}
        label="Adhesión de filamentos"
        name="gill-attachment"
        error={mushroomValidation["gill-attachment"]}
        errorMessage={"Campo requerido*"}
      />

      <SelectInput
        value={mushroom["gill-color"]}
        onChange={handleSelectChange}
        options={[
          { text: "Elegir", value: "" },
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
        name="gill-color"
        error={mushroomValidation["gill-color"]}
        errorMessage="Campo requerido*"
      />
      <RadioButtons
        options={radioOptions}
        onChange={handleOptionChange}
        value={selectedOption}
        label="Espacio entre filamentos"
        name="gill-spacing"
        error={mushroomValidation["gill-spacing"]}
        errorMessage={"Campo requerido*"}
      />
    </>
  );
};

const Form3 = ({
  onChange,
  setMushroom,
  mushroom,
  setMushroomLabel,
  mushroomLabel,
  mushroomValidation,
}: FormProps) => {
  const [checked, setChecked] = useState<boolean>(mushroom["has-ring"]);
  const [height, setHeight] = useState<string>(mushroom["stem-height"]);
  const [width, setWidth] = useState<string>(mushroom["stem-width"]);
  const handleSelectChange: ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { name, value, selectedIndex } = event.target;
    const selectedOptionText = event.target.options[selectedIndex].text;

    setMushroom((prev: any) => ({ ...prev, [name]: value }));
    setMushroomLabel((prev: any) => ({ ...prev, [name]: selectedOptionText }));
  };

  const handleCheckboxChange = () => {
    const hasRing = !checked;
    setChecked((prev) => !prev);
    setMushroom((prev: any) => ({
      ...prev,
      "has-ring": hasRing,
    }));
    setMushroomLabel((prev: any) => ({
      ...prev,
      "has-ring": hasRing ? "Sí" : "No",
    }));
  };

  const handleHeightInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    setHeight(value);
    handleInput(name, value);
  };

  const handleWidthInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;

    setWidth(value);
    handleInput(name, value);
  };

  const handleInput = (name: string, value: string) => {
    setMushroom((prev: any) => ({ ...prev, [name]: Number(value) }));
    setMushroomLabel((prev: any) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div>
        <label
          htmlFor="number-input"
          className="text-start block mb-2 text-sm font-medium text-gray-900"
        >
          Ancho (cm)
        </label>
        <input
          name="stem-width"
          type="number"
          min="0"
          id="number-input"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={width}
          placeholder="70"
          onChange={handleWidthInput}
        />
        {mushroomValidation["stem-width"] && (
          <p className="text-red-700 text-sm font-semibold">Campo requerido*</p>
        )}
      </div>
      <div>
        <label
          htmlFor="number-input"
          className="text-start block mb-2 text-sm font-medium text-gray-900"
        >
          Altura (cm)
        </label>
        <input
          name="stem-height"
          type="number"
          min="0"
          id="number-input"
          aria-describedby="helper-text-explanation"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="70"
          value={height}
          onChange={handleHeightInput}
        />
        {mushroomValidation["stem-height"] && (
          <p className="text-red-700 text-sm font-semibold">Campo requerido*</p>
        )}
      </div>
      <SelectInput
        value={mushroom["stem-root"]}
        name="stem-root"
        onChange={handleSelectChange}
        options={[
          { text: "Elegir", value: "" },
          { text: "Bulbosa", value: "b" }, // B - Bulbosa
          { text: "Hinchada", value: "s" }, // S - Hinchada
          { text: "Clavada", value: "c" }, // C - Clavada
          { text: "Copa", value: "u" }, // U - Copa
          { text: "Igual", value: "e" }, // E - Igual
          { text: "Rizomorfos", value: "z" }, // Z - Rizomorfos
          { text: "Enraizada", value: "r" }, // R - Enraizada
        ]}
        label="Raíz del tallo"
        error={mushroomValidation["stem-root"]}
        errorMessage={"Campo requerido*"}
      />
      <SelectInput
        value={mushroom["stem-surface"]}
        onChange={handleSelectChange}
        options={[
          { text: "Elegir", value: "" },
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
        name="stem-surface"
        error={mushroomValidation["stem-root"]}
        errorMessage={"Campo requerido*"}
      />
      <SelectInput
        value={mushroom["stem-color"]}
        onChange={handleSelectChange}
        options={[
          { text: "Elegir", value: "" },
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
        name="stem-color"
        error={mushroomValidation["stem-color"]}
        errorMessage={"Campo requerido*"}
      />
      <div className="flex items-center text-start">
        <input
          id="default-checkbox"
          type="checkbox"
          checked={checked}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
          onChange={handleCheckboxChange}
          name="has-ring"
        />
        <label
          htmlFor="default-checkbox"
          className="ml-1 text-sm font-medium text-gray-900"
        >
          Tiene anillo
        </label>
      </div>

      <SelectInput
        value={mushroom["ring-type"]}
        options={[
          { text: "Elegir", value: "" },
          { text: "Telaraña", value: "c" }, // C - Telaraña
          { text: "Evanescente", value: "e" }, // E - Evanescente
          { text: "Abombado", value: "r" }, // R - Abombado
          { text: "Surcos", value: "g" }, // G - Surcos
          { text: "Grande", value: "l" }, // L - Grande
          { text: "Colgante", value: "p" }, // P - Colgante
          { text: "Envainante", value: "s" }, // S - Envainante
          { text: "Zona", value: "z" }, // Z - Zona
          { text: "Escamoso", value: "y" }, // Y - Escamoso
          { text: "Móvil", value: "m" }, // M - Móvil
          { text: "Ninguno", value: "f" }, // F - Ninguno
          { text: "Desconocido", value: "?" }, // Desconocido
        ]}
        name="ring-type"
        label="Tipo de anillo"
        onChange={handleSelectChange}
        error={mushroomValidation["ring-type"]}
        errorMessage={"Campo requerido*"}
      />
    </>
  );
};

const Form4 = ({
  mushroomLabel,
}: {
  mushroomLabel: Partial<IMushroomLabel>;
}) => {
  return (
    <div className="text-start align-center ">
      <h3 className="text-md text-[#4F4A45] font-bold">
        Características generales
      </h3>
      <div className="grid grid-cols-3 gap-2 text-[#4F4A45] text-sm my-2">
        <p>Color del velo: {mushroomLabel["veil-color"]}</p>
        <p>Habitat: {mushroomLabel.habitat}</p>
        <p>Sangra/Tiene manchas: {mushroomLabel["does-bruise-or-bleed"]}</p>
        <p>Temporada: {mushroomLabel.season}</p>
        <p>Color de la espora: {mushroomLabel["spore-print-color"]}</p>
      </div>
      <hr className="h-px border-0 bg-gray-700" />
      <h3 className="text-md text-[#4F4A45] font-bold mt-4">Sombrero</h3>
      <div className="grid grid-cols-3 gap-2 text-[#4F4A45] text-sm my-2">
        <p>Diámetro: {mushroomLabel["cap-diameter"]}</p>
        <p>Color del sombrero: {mushroomLabel["cap-color"]}</p>
        <p>Superficie: {mushroomLabel["cap-surface"]}</p>
        <p>Forma: {mushroomLabel["cap-shape"]}</p>
        <p>Adhesión de filamentos: {mushroomLabel["gill-attachment"]}</p>
        <p>Color de filamentos: {mushroomLabel["gill-color"]}</p>
        <p>Espacio entre filamentos: {mushroomLabel["gill-spacing"]}</p>
      </div>
      <hr className="h-px border-0 bg-gray-700" />
      <h3 className="text-md text-[#4F4A45] font-bold mt-4">Tallo</h3>
      <div className="grid grid-cols-3 gap-2 text-[#4F4A45] text-sm my-2">
        <p>Ancho: {mushroomLabel["stem-width"]}</p>
        <p>Alto: {mushroomLabel["stem-height"]}</p>
        <p>Raiz: {mushroomLabel["stem-root"]}</p>
        <p>Superficie: {mushroomLabel["stem-surface"]}</p>
        <p>Color: {mushroomLabel["stem-color"]}</p>
        <p>Tiene anillo: {mushroomLabel["has-ring"]}</p>
        {mushroomLabel["has-ring"] === "Sí" && (
          <p>Tipo de anillo: {mushroomLabel["ring-type"]}</p>
        )}
      </div>
    </div>
  );
};
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

export interface IMushroomValidation {
  "cap-diameter": boolean;
  "stem-width": boolean;
  "stem-height": boolean;
  "stem-color": boolean;
  "cap-color": boolean;
  "gill-color": boolean;
  "cap-surface": boolean;
  "cap-shape": boolean;
  "does-bruise-or-bleed": boolean;
  "gill-attachment": boolean;
  "gill-spacing": boolean;
  "stem-root": boolean;
  "stem-surface": boolean;
  "veil-type": boolean;
  "veil-color": boolean;
  "spore-print-color": boolean;
  "has-ring": boolean;
  "ring-type": boolean;
  habitat: boolean;
  season: boolean;
}

export interface IMushroom {
  "cap-diameter": string;
  "stem-width": string;
  "stem-height": string;
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

export interface IMushroomLabel {
  "cap-diameter": number;
  "stem-width": number;
  "stem-height": number;
  "stem-color": string;
  "cap-color": string;
  "gill-color": string;
  "cap-surface": string;
  "cap-shape": string;
  "does-bruise-or-bleed": string;
  "gill-attachment": string;
  "gill-spacing": string;
  "stem-root": string;
  "stem-surface": string;
  "veil-type": string;
  "veil-color": string;
  "spore-print-color": string;
  "has-ring": string;
  "ring-type": string;
  habitat: string;
  season: string;
}

export default function MushroomAnalysisContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [mushroomValidation, setMushroomValidation] =
    useState<IMushroomValidation>({
      "cap-diameter": false,
      "stem-width": false,
      "stem-height": false,
      "stem-color": false,
      "cap-color": false,
      "gill-color": false,
      "cap-surface": false,
      "cap-shape": false,
      "does-bruise-or-bleed": false,
      "gill-attachment": false,
      "gill-spacing": false,
      "stem-root": false,
      "stem-surface": false,
      "veil-type": false,
      "veil-color": false,
      "spore-print-color": false,
      "has-ring": false,
      "ring-type": false,
      habitat: false,
      season: false,
    });
  const [mushroom, setMushroom] = useState<IMushroom>({
    "cap-diameter": "",
    "stem-width": "",
    "stem-height": "",
    "stem-color": "",
    "cap-color": "",
    "gill-color": "",
    "cap-surface": "",
    "cap-shape": "",
    "does-bruise-or-bleed": false,
    "gill-attachment": "",
    "gill-spacing": "",
    "stem-root": "",
    "stem-surface": "",
    "veil-type": "",
    "veil-color": "",
    "spore-print-color": "",
    "has-ring": false,
    "ring-type": "",
    habitat: "",
    season: "",
  });
  const [mushroomLabel, setMushroomLabel] = useState<Partial<IMushroomLabel>>({
    "does-bruise-or-bleed": "No",
    "has-ring": "No",
  });
  const router = useRouter();

  const isLastStep = steps.length - 1 === step;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (step === 0) {
      const {
        season,
        habitat,
        "veil-type": veilType,
        "veil-color": veilColor,
        "spore-print-color": sporeColor,
      } = mushroom;
      const anyFieldInvalid =
        !season || !habitat || !veilType || !veilColor || !sporeColor;

      setMushroomValidation((prev) => ({
        ...prev,
        season: !season,
        habitat: !habitat,
        "veil-type": !veilType,
        "veil-color": !veilColor,
        "spore-print-color": !sporeColor,
      }));

      if (anyFieldInvalid) return;
    }
    if (step === 1) {
      const {
        "cap-diameter": capDiameter,
        "cap-color": capColor,
        "cap-shape": capShape,
        "cap-surface": capSurface,
        "gill-attachment": gillAttachment,
        "gill-color": gillColor,
        "gill-spacing": gillSpacing,
      } = mushroom;
      const anyFieldInvalid =
        capDiameter === "" ||
        !capColor ||
        !capSurface ||
        !gillAttachment ||
        !gillColor ||
        !gillSpacing;

      setMushroomValidation((prev) => ({
        ...prev,
        "cap-diameter": capDiameter === "",
        "cap-color": !capColor,
        "cap-shape": !capShape,
        "cap-surface": !capSurface,
        "gill-attachment": !gillAttachment,
        "gill-color": !gillColor,
        "gill-spacing": !gillSpacing,
      }));

      if (anyFieldInvalid) return;
    }
    if (step === 2) {
      const {
        "stem-height": height,
        "stem-width": width,
        "stem-root": root,
        "stem-surface": surface,
        "stem-color": color,
        "ring-type": ringType,
      } = mushroom;

      const anyFieldInvalid =
        height === "" ||
        width === "" ||
        !root ||
        !surface ||
        !color ||
        !ringType;

      setMushroomValidation((prev) => ({
        ...prev,
        "stem-height": height === "",
        "stem-width": width === "",
        "stem-root": !root,
        "stem-surface": !surface,
        "stem-color": !color,
        "ring-type": !ringType,
      }));
      console.log(mushroomValidation, "ACA");
      if (anyFieldInvalid) return;
    }
    if (!isLastStep) {
      setStep((prev) => prev + 1);
      return;
    }

    setIsLoading(true);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...mushroom,
        "stem-width": Number(mushroom["stem-width"]),
        "stem-height": Number(mushroom["stem-height"]),
        "cap-diameter": Number(mushroom["cap-diameter"]),
      }),
    };
    await fetch("http://127.0.0.1:8000/predict-class", options)
      .then((res) => {
        if (!res.ok) throw new Error("Network response not ok.");
        return res.json();
      })
      .then((res: { "is-edible": boolean }) => {
        setIsLoading(false);
        const isEdible = res["is-edible"];
        router.push(isEdible ? "/comestible" : "/venenoso");
      })
      .catch((err) => console.log(err));
  };

  const handleBackButton = () => {
    setStep((prev) => prev - 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setMushroom((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading) return null;

  const Form = steps[step].inputs;
  console.log(mushroom);
  console.log(mushroomLabel);
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="rounded-md h-[550px] w-[900px] bg-[#D9D9D9] mb-8 flex p-4 gap-4">
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
            noValidate
          >
            {isLastStep ? (
              <Form4 mushroomLabel={mushroomLabel} />
            ) : (
              <div className="grid grid-cols-2 gap-x-4 gap-y-4 max-w-[375px] self-center">
                {
                  <Form
                    onChange={handleChange}
                    setMushroom={setMushroom}
                    mushroom={mushroom}
                    setMushroomLabel={setMushroomLabel}
                    mushroomLabel={mushroomLabel}
                    mushroomValidation={mushroomValidation}
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
