import Link from "next/link";
import connectDB from "../lib/connectDb";
import Tale from "../models/tale";

export const dynamic = 'force-dynamic'
export default async function Home() {
  await connectDB();
  const tales = await Tale.aggregate(
    [{ $sample: { size: 20 } }]
  );

  return (
    <div>
      <header className="p-2 shadow">
        <div className=" max-w-4xl m-auto">
          <div className=" text-green-900 font-bold text-2xl">TaleNest</div>
        </div>
      </header>
      <main className="p-2 grid gap-2 max-w-4xl m-auto">
        {tales.map((story) =>
          <Link href={`/tale/${encodeURIComponent(story.slug)}`} key={story._id} className="shadow p-2">
            <div className="text-lg text-slate-900">{story.title}</div>
            <div className=" text-gray-600 line-clamp-3">{story.content[0]}</div>
          </Link>
        )
        }
      </main>
    </div>
  );
}
