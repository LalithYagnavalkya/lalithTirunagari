import Banner from "@/components/banner";
import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-col md:flex w-[100%]">
      <Navbar />
      <Banner />
    </main>
  );
}
