//URL from the API that we'll extract the data
const URL = "https://api.jikan.moe/v4/"

class http{
    static instance = new http()
    //async function to pull the characters 
    getCharacters = async(id) => {
        try{
            const request = await fetch (`${URL}anime/${id}/characters`)
            const response = await request.json()
            return response
        }catch(err){
            throw new Error(err);
        }
     
    }
    //obtains the data from an specific character with the ID
    getCharacter = async(id) => {
        try{
            const request = await fetch (`${URL}characters/${id}`)
            const response = await request.json()
            return response
        }catch(err){
            throw new Error(err);
        }
    }
    //This async function obtains the image of each character
    getImage = async(id) => {
        try{
            const request = await fetch (`${URL}characters/${id}/pictures`)
            const response = await request.json()
            return response
        }catch(err){
            throw new Error(err);
        }
    }
}export default http;

/*{id}/manga*/