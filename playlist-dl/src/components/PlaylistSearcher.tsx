import React from 'react'
import { useState } from 'react'

export default function PlaylistSearcher({setSearchPlayList}) {
    const [input, setInput] = useState("");
	//test
   const handleSearchSubmit = (someEvent: React.FormEvent<HTMLFormElement>) => {
        someEvent.preventDefault()
        setSearchPlayList(input)
        console.log(input, " in PlaylistSearcher comp")
    }
    return (
        <React.Fragment>
            <form onSubmit={someEvent =>{ handleSearchSubmit(someEvent)}}>
                <label>
                    <input type="text" id="playlistsearch" onChange={someEvent => setInput(someEvent.target.value)}  name="playlistURL" value={input} placeholder="...Search for youtube playlist" required></input>
                </label>
            </form >
        </React.Fragment>
  )
}
