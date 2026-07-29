import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import FadeIn from "@/components/common/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Container>
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <FadeIn>
            <h1 className="font-heading text-5xl md:text-7xl">
              JL Jewellers
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg text-[var(--muted)]">
              Crafting heirlooms that celebrate life's most cherished moments.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10">
              <Button href="#">
                Discover Collections
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </main>
  );
}