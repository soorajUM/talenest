'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

const Search = () => {
    const [searchKey, setSearchKey] = useState('');
    const router = useRouter();
    return (
        <>
            <input
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value)}
                type="text"
                className="outline-none py-1 px-2"
            />
            <button
                className="bg-blue-300 p-1"
                onClick={() => {
                    if (searchKey) {
                        router.push(`/?q=${searchKey}`);
                        setSearchKey('')
                    }
                }}
            >&#x1F50D;</button>
        </>
    )
}

export default Search