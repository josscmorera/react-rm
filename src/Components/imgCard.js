import { useState } from 'react';

function ImgCard({ character }) {
    const [toggleCard, setToggleCard] = useState("front");

    const handleClick = () => {
        if (toggleCard === "front") {
            setToggleCard("back");
        } else {
            setToggleCard("front");
        }
    };

    return (
        <div className="card" onClick={handleClick}>
            {toggleCard === "front" ? (
                <div className="front">
                    <img src={character.image} alt={character.name} />
                    <h3>{character.name}</h3>
                </div>
            ) : (
                <div className="back">
                    <h3>{character.name}</h3>
                    <p>Status: {character.status}</p>
                    <p>Species: {character.species}</p>
                    <p>Gender: {character.gender}</p>
                    <p>Origin: {character.origin.name}</p>
                </div>
            )}
        </div>
    );
}

export default ImgCard;