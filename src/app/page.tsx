import Link from "next/link";
import connectDB from "../lib/connectDb";
import Tale from "../models/tale";
import Search from "./components/Search";

export const dynamic = 'force-dynamic'
export default async function Home({ searchParams }: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const searchKey = (await searchParams)?.q?.trim();
  await connectDB();
  let tales = [];
  if (searchKey) {
    tales = await Tale.aggregate(
      [
        {
          $search: {
            index: "title-vector-search",
            text: {
              query: searchKey,
              path: {
                wildcard: "*"
              }
            }
          }
        },
        { $limit: 20 }
      ]
    );
  } else {
    tales = await Tale.aggregate(
      [{ $sample: { size: 20 } }]
    );
  }

  return (
    <div>
      <header className="p-2 shadow">
        <div className=" max-w-4xl m-auto flex justify-between">
          <div className=" text-green-900 font-bold text-2xl">TaleNest</div>
          <div className="border flex content-center rounded">
            <Search />
          </div>
        </div>
      </header>
      <main className="p-2 grid gap-2 max-w-4xl m-auto">
        {!!searchKey && <div>Results for: <Link href="/" className="shadow py-1 px-2 rounded">{searchKey} X</Link></div>}
        {tales.map((story) =>
          <Link href={`/tale/${encodeURIComponent(story.slug)}`} key={story._id} className="shadow p-2">
            <div className="text-lg text-slate-900">{story.title}</div>
            <div className=" text-gray-600 line-clamp-3">{story.content[0]}</div>
          </Link>
        )
        }
        {!searchKey && <Link href="/" className="py-2 px-4 shadow rounded m-auto bg-gray-200">More {">"}</Link>}
      </main>
    </div>
  );
}
