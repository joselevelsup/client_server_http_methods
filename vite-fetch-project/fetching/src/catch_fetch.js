import axios from "axios";

export async function fetchRandomCatImage(){
  const apiUrl = "https://cataas.com/cat?json=true";

  try {
    const response = await axios.get(apiUrl);  
    const catData = response.data;

    const catImageContainer = document.getElementById("catImageContainer");

    if(catData.id){
      const catImage = document.createElement('img');

      catImage.src = catData.url;

      catImage.alt = "Random Cat";

      catImageContainer.appendChild(catImage);

    }
  } catch(err){
    console.log(err);
  }
}