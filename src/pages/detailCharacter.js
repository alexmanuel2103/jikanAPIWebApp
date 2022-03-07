import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import http from "../lib/request";
<<<<<<< HEAD
import "../styles.css"
=======
import "../pages/style.css"
>>>>>>> 01dc76642ec0b37dd1af939dfefa1638d974920b

 const DetailCharacter = () =>{
     const { id } = useParams();
     const [character, setCharacter] = useState({});
     const [image, setImages] = useState({});
     useEffect(()=>{

         const fetchCharacter = async() => {
            const character = await http.instance.getCharacter(id);
            setCharacter(character.data)
            setImages(character.data.images.jpg)
         }
         fetchCharacter();
     },[])

     return(
         <React.Fragment>
             <div className="Character__container">
                 <div className="Character__header">
                    <h1 className="Character__name">{character.name}</h1>  
                    <h1 className="Character__name_kanji">{character.name_kanji}</h1>  
                </div>
                <div className="Character__about">
                    <p className="Character__about_text">{character.about}</p> 
                    <img className="Character__image" src={image.image_url} alt = {character.name}/>
                </div>
             </div>
         </React.Fragment>
     )
 }

export default DetailCharacter;
