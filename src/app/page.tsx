import Link from "next/link";

const list =
  [
    {
      title: "The Whispering Forest",
      author: "Emily R. Wells",
      genre: "Fantasy",
      content: "A young girl ventures into a mysterious forest where ancient secrets and mythical creatures await."
    },
    {
      title: "Echoes of the Past",
      author: "John H. Carter",
      genre: "Historical Fiction",
      content: "A time traveler must uncover the truth about a long-forgotten betrayal that could change history."
    },
    {
      title: "The Lost Key",
      author: "Samantha D. Lee",
      genre: "Mystery",
      content: "A detective races against time to solve a series of cryptic clues that lead to a hidden treasure."
    },
    {
      title: "A Heart of Steel",
      author: "Michael T. Grant",
      genre: "Science Fiction",
      content: "In a dystopian future, a soldier with a mechanical heart must choose between loyalty and love."
    },
    {
      title: "The Silent Tide",
      author: "Anna W. Green",
      genre: "Thriller",
      content: "A small coastal town is rocked by a string of mysterious disappearances, with no clues left behind."
    },
    {
      title: "Starlight Dreams",
      author: "Clara F. Adams",
      genre: "Romance",
      content: "Two souls separated by fate must navigate a world of dreams and reality to find each other again."
    },
    {
      title: "The Hidden Chamber",
      author: "Lucas D. Flynn",
      genre: "Adventure",
      content: "An archaeologist uncovers a lost chamber beneath the city, filled with ancient artifacts and dangers."
    }
  ]

export default function Home() {
  return (
    <div>
      <header className="p-2 shadow">
        <div className=" max-w-4xl m-auto">
          <div className=" text-green-900 font-bold text-2xl">TaleNest</div>
        </div>
      </header>
      <main className="p-2 grid gap-2 max-w-4xl m-auto">
        {list.map((story) =>
          <Link href={'/tale/hello'} key={story.title} className="shadow p-2">
            <div className="text-lg text-slate-900">{story.title}</div>
            <div className=" text-gray-600">{story.content}</div>
          </Link>
        )
        }
      </main>
    </div>
  );
}
