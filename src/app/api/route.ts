import { NextResponse } from "next/server";
import connectDB from "../../lib/connectDb";
import Tale from "../../models/tale";

export async function GET(request: Request) {
    await connectDB();
    await Tale.create({
        title: "The Whispering Forest",
        slug: 'the-whispering-forest',
        tags: ["Fantasy"],
        content: [
            "Once upon a time, in the tranquil town of Meadowfield, nestled gracefully within the folds of nature, where life moved at a gentler pace, a story unfolded that filled everyone's heart with hope and courage.",
            "The protagonist of our story is Rose, a twelve-year-old girl. Rose's life in Meadowfield had been simple, she lived in a secluded cottage, maintaining her family's old cemetery ground. For years, it was just them, but solitude didn't haunt their happiness for they cherished each other's company immensely.",
            "One day, Rose found an odd-looking key in the cemetery ground. It was unlike any she had seen before. The key was old, a peculiar design etched into its handle. Intrigued, she held on to it.",
            "That night, a dreadful storm hit Meadowfield, causing widespread devastation. The winds howled, and the thunder roared as if Mother Nature herself was mourning. In the chaos, a massive old tree from the cemetery grounds toppled onto their dainty cottage. Their home was destroyed, their heart, however, remained resilient.",
            "The miserable morning light revealed the destruction. Yet, in this devastation, the uprooted tree had unveiled a secret - a hidden rusted door that laid beneath it. That’s when Rose remembered the key. With a deep breath and newfound courage, she pushed the heavy door open.",
            "Inside, it was dark and damp. As her eyes adjusted to the darkness, Rose saw something that turned her fear into amazement. It was a room filled with endless scrolls and ancient artifacts, like a forgotten treasury of wisdom from a bygone era. In the corner was a mysterious glowing scroll that seemed to call out to Rose, guiding her forward. She opened it and her eyes widened, it was a map of Meadowfield but with countless secrets marked out.",
            "In the days that followed, curiosity led Rose to venture where the map guided, unearthing these buried cues – old relics, forgotten stories, secret spaces, and more. Each discovery rekindled hope in her heart and the townsfolk. Slowly but surely, they started rebuilding the town, with Rose's map as their guide. As each day passed, Meadowfield's charm was restored, along with the morale of its people.",
            "On her journey of discovery, Rose was no longer a mere cemetery keeper's daughter, she became a beacon of resilience and courage. She brought the town back to life not just through physical means, but by instilling a newfound sense of community and hope.",
            "By the end of the year, Meadowfield was more vibrant than ever. It was a testament to the town's resilience, to human spirit, and to Rose, the silent guardian who turned her destiny around. The people celebrated their survival and newfound unity. As for Rose, the little girl who lived by the cemetery became a legend, the savior of Meadowfield.",
            "The tale of Meadowfield and Rose is not just a story but a timeless reminder. It professes that even the worst storms are always followed by a bright dawn and those who hold on and fight against the odds, no matter how small or insignificant they might seem, find strength in themselves that they never knew existed."
        ]
    })

    return NextResponse.json({
        ok: "ok"
    })
}