import StartupCard from "../../components/StartupCard";
import SearchForm from "../../components/SearchForm";

export default async function Home({
  searchParams
}: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  const posts =[{
    _createdAt: new Date(),
    views: 0,
    author: { _id: 1, name: 'John Doe' },
    _id: 1,
    title: 'Sample Startup',
    description: 'This is a sample startup description.',
    image: 'https://via.placeholder.com/150',
    category: 'Tech',
  }]
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
      <section className="section_container">
        <p className="text-30-semibold !text-white mb-2">
          {query?`Search Results for "${query}"`: 'All Startups'}
        </p>
        <ul className="mt-7  card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index:number) => (
              <StartupCard key={post?._id} post={post}/>
            ))
          ):(
            <p className="no-results">
              No startups found.
            </p>
          )}

        </ul>
      </section>
        {/* Add your recent startups component here */}
    </>
  );
}
