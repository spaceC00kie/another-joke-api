import React, { useState } from 'react'

const CatFacts = () => {
    const [fact, setFact] = useState("Let's learn about cats")

    const newFact = () => {
        fetch("https://catfact.ninja/fact")
            .then((res) => res.json())
            .then((i) => setFact(i.fact))
    }

    return (
        <div>
            {fact}
            <button onClick={() => newFact()}>How about another?</button>
        </div>
    )
}

export default CatFacts
