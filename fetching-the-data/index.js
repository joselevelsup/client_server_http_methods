import axios from "axios";

async function fetchRandomCatImage(){
  try {
    const response = await axios.get("https://cataas.com/cat?json=true")

    console.log(response.data.url);
  } catch(err){
    console.log(err);
  }
}