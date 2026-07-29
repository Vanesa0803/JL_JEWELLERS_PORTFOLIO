import Container from "@/components/common/Container";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Container>
        <div className="py-32">
          <h1 className="text-5xl">
            JL Jewellers
          </h1>

          <p className="mt-6 max-w-xl text-lg text-neutral-600">
            Luxury Jewellery Portfolio
          </p>
        </div>
      </Container>
    </main>
  );
}