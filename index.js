import axios from "axios";
// fetch('https://jsonplaceholder.typicode.com/posts/1') // Replace with your API endpoint
//     .then(response => {
//         // Check if the HTTP request was successful (status code 200)
//         if (!response.ok) {
//             // If not ok, throws to the catch method
//             throw new Error('Network response was not ok');
//         }
//         // Parse (or read) the response as JSON
//         return response.json();
//     })
//     .then(data => {
//         // Handle the JSON data
//         console.log('Response data:', data);
//     })
//     .catch(error => {
//         // Handle errors, such as network issues or invalid JSON
//         console.error('Fetch error:', error);
//     });

// const requestOptions = {
//   method: "GET",
//   redirect: "follow"
// };

// fetch("https://pokeapi.co/api/v2/ability/?limit=20&offset=20", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

// async function fetchData() {
//     try {
//         // Replace with your API endpoint
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         if (!response.ok) {
//             throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error("Fetch error:", error);
//         throw error;
//         // Rethrow the error for the caller to handle
//     }
// }

// fetchData().then(data => {
//   console.log(data);
// }).catch((err) => {
//   console.log(err)
// })

// (async function(){
//  const data = await fetchData();
//  console.log(data);
// })()


async function getData() {
  try {
    const response = await axios.get("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")


    if(response.status !== 200){
      throw new Error("Something went wrong with the axios call");
    }

    console.log(response.data);
    let data = response.data;
    console.log(data.results);

    //Print every ability name from the PokeAPI data
    data.results.forEach((ability) => {
      console.log(ability.name);
    })
    
  } catch(err){
    console.log(err);
  }
}

getData().then(() => {}).catch(() => {}) 