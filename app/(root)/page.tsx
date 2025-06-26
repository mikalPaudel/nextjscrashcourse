import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Get Funded!
        </h1>
        <p className="subheading !max-w-3xl">
          Join our community of entrepreneurs and investors to turn your ideas
          into reality.
        </p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
