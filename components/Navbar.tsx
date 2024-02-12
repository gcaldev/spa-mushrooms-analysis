"use client";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="flex justify-end bg-[#3A4D39] fixed w-full z-20 top-0 start-0">
      <ul className="flex justify-between gap-8 m-4">
        <li>
          <Link className="font-semibold text-base" href={"/"}>
            Inicio
          </Link>
        </li>
        <li>
          <Link className="font-semibold text-base" href={"/analisis"}>
            Análisis
          </Link>
        </li>
        <li>
          <Link className="font-semibold text-base" href={"/analisis"}>
            Anatomía Fungi
          </Link>
        </li>
        <li>
          <Link className="font-semibold text-base" href={"/analisis"}>
            Investigación
          </Link>
        </li>
      </ul>
    </nav>
  );
}
