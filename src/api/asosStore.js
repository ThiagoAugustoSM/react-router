const searchByName = (name) => {
  fetch(`https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&q=${name}&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "asos2.p.rapidapi.com",
      "x-rapidapi-key": "hKjkcOxSbYmsh3nBTtS9NMQdhkjyp17JH8Pjsn1bzFhMODoGDx"
    }
  })
  .then(response => response.json())
  .then(res => console.log(res.products))
  .catch(err => {
    console.log(err);
  });
}

export { searchByName };