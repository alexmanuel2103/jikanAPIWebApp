import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import http from "../lib/request";
import "./detail.css"



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
     },)


     return(
         <React.Fragment>
             <div className="Details_container">
             <h1>{character.name}</h1>  
             <h1>{character.name_kanji}</h1>  
             <p>{character.about}</p> 
             <img src={image.image_url} alt = {character.name}/>
             </div>
             
         </React.Fragment>
     )
 }

export default DetailCharacter;