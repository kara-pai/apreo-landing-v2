import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { ProblemSection } from "../components/problem-section";
import { HowItWorks } from "../components/how-it-works";
import { MatchingEngine } from "../components/matching-engine";
import { PilotSection } from "../components/pilot-section";
import { FAQ } from "../components/faq";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <HowItWorks />
        <MatchingEngine />
        <PilotSection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
