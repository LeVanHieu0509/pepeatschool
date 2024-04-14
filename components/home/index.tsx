import { About } from "./about";
import { Hero } from "./hero";

export function Home(): JSX.Element {
  return (
    <main className="space-y-40 mb-40">
      <Hero />
      <About />
    </main>
  );
}
