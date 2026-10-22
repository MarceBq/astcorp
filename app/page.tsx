import { Hero } from "@/components/home/Hero";
import { WhyAstcorp } from "@/components/home/WhyAstcorp";
import { Process } from "@/components/home/Process";
import { Services } from "@/components/home/Services";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FinalCTA } from "@/components/home/FinalCTA";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";

/**
 * Home.
 *
 * El proceso va inmediatamente después del argumento de venta, y la prueba
 * social cierra la página justo antes del footer.
 *
 * Ritmo de fondos: claro salvo dos bloques azules —el proceso y el cierre—,
 * ambos con transición curva para que no se lean como láminas sueltas.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyAstcorp />
      <Process />
      <Services />
      <FeaturedProducts />
      <FinalCTA />
      <ClientsCarousel />
    </>
  );
}
