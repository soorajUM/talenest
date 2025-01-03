import Link from "next/link";
import connectDB from "../lib/connectDb";
import Tale from "../models/tale";
import Search from "./components/Search";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TaleNest | Where Stories Take Flight.",
  description: "The Gateway to a world of imagination and inspiration. Here, we celebrate the power of storytelling through short stories.",
  keywords: [
    'Storytelling',
    'Imagination',
    'Inspiration',
    'Creativity',
    'Community',
    'Connection',
    'Adventure',
    'Perspectives',
    'Narrative',
    'Discover',
    'Share',
    'Explore',
    'Passion',
    'Ideas',
  ]
};

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
      [
        { $match: { coverImage: { $exists: true } } },
        { $sample: { size: 20 } }
      ]
    );
  }

  return (
    <div>
      <header className="p-2 shadow">
        <div className=" max-w-6xl m-auto flex justify-between">
          <div className=" text-green-900 font-bold text-2xl">TaleNest</div>
          <div className="border flex content-center rounded">
            <Search />
          </div>
        </div>
      </header>
      <div className="max-w-6xl m-auto py-4">
        {!!searchKey && <div>Results for: <Link href="/" className="shadow py-1 px-2 rounded">{searchKey} X</Link></div>}
        <main className="p-2 pb-6 grid gap-2 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2">
          {tales.map((story) =>
            <Link
              href={`/tale/${encodeURIComponent(story.slug)}`} key={story._id} className="shadow">
              <Image
                src={`https://utfs.io/f/${story.thumpImage}`}
                alt={story.title}
                width={300}
                height={300}
              />
              <div
                className="text-lg text-slate-900 line-clamp-1 px-2 py-1 font-semibold"
                title={story.title}
              >{story.title}</div>
            </Link>
          )
          }
        </main>
        <div className="grid place-items-center">
          {!searchKey && <Link href="/" className="py-2 px-4 shadow rounded bg-gray-200">More {">"}</Link>}
        </div>
      </div>
    </div>
  );
}
