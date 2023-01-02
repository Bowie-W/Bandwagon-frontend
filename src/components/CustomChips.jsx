import axios from "axios";
import { useEffect, useState } from "react";

export default function CustomChips({ handleChipbox, user }) {

    const userGenreChips = []
    const userInstrChips = []

    const genreChips = ['Jazz', 'Classical', 'Pop', 'Rock', 'Electronic', 'Country', 'Hip-Hop', 'R&B', 'Blues', 'Ambient', 'Folk', 'Metal', 'Punk', 'Latin']
    const instrChips = ['Vocals', 'Piano', 'Guitar', 'Trumpet', 'Saxophone', 'Bass', 'Flute', 'Clarinet',' Drums', 'Multi-Instrumental']


    const addGenreChip = (event) =>{
        event.preventDefault()
        const inArray = userGenreChips.includes(event.target.value)
        console.log(inArray)
        if (inArray){
            const index = userGenreChips.indexOf(event.target.value)
            if ( index > -1){
                userGenreChips.splice(index, 1)
            }
        } else {
            userGenreChips.push(event.target.value)
        }
        console.log(userGenreChips)
    }
    
    const addInstrChip = (event) =>{
        event.preventDefault()
        const inArray = userInstrChips.includes(event.target.value)
        console.log(inArray)
        if (inArray){
            const index = userInstrChips.indexOf(event.target.value)
            if ( index > -1){
                userInstrChips.splice(index, 1)
            }
        } else {
            userInstrChips.push(event.target.value)
        }
        console.log(userInstrChips)
    }

    const sendChips = (event) =>{
        event.preventDefault()
        const genreChipsString = userGenreChips.toString()
        console.log(genreChipsString)
        const instrChipsString = userInstrChips.toString()
        
    const chipInfo = {
        id:user.id,
        genreChips:genreChipsString,
        instrChips:instrChipsString

    }

        axios
        .put("http://localhost:5050/profile/customize/chips", chipInfo)
        .then((res) => {
            console.log(res)
        }) 
        .catch((error) => {
            console.log(error);
          });


    }

console.log(user)
 

  return (
    <div className="absolute h-screen w-screen top-0 left-0 bg-black-50 bg-opacity-50 flex justify-center items-center">
      <form className="bg-gray-50 text-white-50 w-3/4 h-screen mt-40 rounded-xl flex flex-col items-center">

        <div className="top box mx-2">
          
          <h1 className="font-semibold">Genres <span className="italic"> - Pick up to 3</span></h1>
          
          <div onClick={addGenreChip} className="chipbox-top">
          {genreChips.map((genreChip) =>(
                 <button type="click" value={genreChip} className=" text-center rounded-2xl text-white-50 px-3 py-1 bg-purple-50 mr-2 my-1">
                 {genreChip}
               </button>
            ))}
           
          </div>
        </div>
        <div className="bot box ml-2">
          <h1 className="font-semibold"> Instruments<span className="italic"> - Pick up to 3</span></h1>
          <div onClick={addInstrChip} className="chipbox-bot">
            {instrChips.map((instrChip) => (
                <button value={instrChip} className=" text-center rounded-2xl text-white-50 px-3 py-1 bg-black-50 mr-1 my-1">
                {instrChip}
              </button>
            ))}
        
          </div>
        </div>
        <div className="w-11/12 flex justify-between mt-2 border-t border-white-50">
          <button type="click" onClick={sendChips} className=" text-center rounded-2xl mt-1 text-white-50 px-3 py-1 bg-purple-50">
            Save Changes
          </button>
          <div className=" text-center px-2 mt-2 ml-4 rounded-full text-white-50 border border-white-50">
            <button onClick={handleChipbox}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}


