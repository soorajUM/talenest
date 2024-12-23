'use client'

import { useState } from "react"

const PlayButton = ({
    title,
    content
}: {
    title: string,
    content: string[]
}) => {
    const [isPlaying, setIsPlaying] = useState<boolean | null>(null);
    return (
        <button
            onClick={() => {
                if (isPlaying === null) {
                    const utterance = new SpeechSynthesisUtterance(
                        `${title}
                        ${content.join("\n")}
                        `
                    );
                    const voices = window.speechSynthesis.getVoices();
                    utterance.voice = voices[7];
                    speechSynthesis.speak(utterance);
                    setIsPlaying(true)
                } else if (!isPlaying) {
                    window.speechSynthesis.resume();
                    setIsPlaying(true);
                } else {
                    window.speechSynthesis.pause();
                    setIsPlaying(false);
                }
            }}
        >
            {isPlaying ? "⏸︎" : "🔊"}</button>
    )
}

export default PlayButton