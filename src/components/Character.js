import React from "react";
import { Link } from "react-router-dom";
import DetailCharacter from "../pages/detailCharacter";

const Character = (props) =>{
    const{ character } = props
    return(
        <React.Fragment>
            <Link to = {`/character/${character.character.mal_id}`}>
                <img src = {character.character.images.jpg.image_url} alt={DetailCharacter}/>
            </Link>
            {/* <h3>{character.character.name}</h3> */}
            {/* <p>For more information clic here {character.character.url}</p> */}
        </React.Fragment>
    )
}
export default Character;
