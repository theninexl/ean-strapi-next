import { getCoverImage, getWorks } from "./services/works";


export default async function Home() {
  const works = await getWorks();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
    { works.map(({ id, Title, cover }) => (
      <>
        <h1 key={id}>{Title}</h1>
        <img src={getCoverImage(cover)} />
      </>
    ))}
    </main>
  );
}
