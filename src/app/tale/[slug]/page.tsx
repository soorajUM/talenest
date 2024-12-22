import Link from "next/link";
import Tale from "../../../models/tale";
import connectDB from "../../../lib/connectDb";
import { Metadata } from "next";

export async function generateMetadata(
    { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata | null> {
    await connectDB();
    const tale = await Tale.findOne({
        slug: decodeURIComponent((await params).slug)
    });
    if (tale) {
        return {
            title: `${tale.title} | TaleNext`,
            description: tale.content[0],
            keywords: tale.tags
        }
    }
    return null
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    await connectDB();
    const tale = await Tale.findOne({
        slug: decodeURIComponent((await params).slug)
    });
    if (!tale) {
        return <>Not Found</>
    }
    return (
        <div>
            <header className="p-2 shadow" >
                <div className=" max-w-4xl m-auto" >
                    <Link href={'/'} className=" text-green-900 font-bold text-2xl" > TaleNest </Link>
                </div>
            </header>
            < main className="p-2 grid gap-2 max-w-4xl m-auto" >
                <div key={tale._id} className="shadow p-4" >
                    <div className="text-xl text-slate-900 pb-4 font-bold" > {tale.title} </div>
                    < div className=" text-gray-600 grid gap-4 text-lg" > {
                        tale.content.map((text: string, i: number) =>
                            <div key={i}>
                                {text}
                            </div>
                        )
                    } </div>
                </div>
            </main>
        </div>
    );
}
