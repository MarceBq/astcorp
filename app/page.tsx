import { Hero } from "@/components/home/Hero";
import { WhyAstcorp } from "@/components/home/WhyAstcorp";
import { Differentials } from "@/components/home/Differentials";
import { ClientsCarousel } from "@/components/home/ClientsCarousel";
import { Services } from "@/components/home/Services";
import { Trust } from "@/components/home/Trust";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { Process } from "@/components/home/Process";
import { FinalCTA } from "@/components/home/FinalCTA";

/**
 * Home.
 *
 * Orden: el argumento de venta (Por qué ASTCORP) va inmediatamente después del
 * hero, y recién luego los diferenciales, la prueba social y el catálogo.
 *
 * Ritmo cromático deliberado, alternando claro y oscuro para que la página no
 * se lea como un documento continuo:
 * hero oscuro -> blanco -> azul profundo -> lime -> claro -> azul profundo ->
 * blanco -> blanco -> azul.
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyAstcorp />
      <Differentials />
      <ClientsCarousel />
      <Services />
      <Trust />
      <FeaturedProducts />
      <Process />
      <FinalCTA />
    </>
  );
}
