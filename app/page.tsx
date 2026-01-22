import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_compnents/Hero";
import { PopularCityList } from "./_compnents/PopularCityList";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularCityList />
    </div>
  );
}
