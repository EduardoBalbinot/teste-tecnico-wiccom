import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Specialties from "@/sections/Specialties";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Specialties specialties={["Cardiologia", "Endocrinologia", "Obstetrícia", "Gastroenterologia", "Cirurgia Geral", "Neurologia", "Ortopedia", "Dermatologia"]}/>
    </>
  );
}
