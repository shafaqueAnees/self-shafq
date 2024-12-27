import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import RecomendedCar from "@/components/Recomded";
import Card from "@/components/Cards";
import PopularCar from "@/components/PopularCar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <section className="py-6 px-10 " >
 
 <Hero />
 <PopularCar />
 <RecomendedCar />
 {/* <Card /> */}

 </section>
  );
}
