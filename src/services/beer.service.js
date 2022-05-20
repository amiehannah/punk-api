const API_URL = "https://api.punkapi.com/v2/beers";

// const BREWED_BEFORE = "brewed_before=01-2010"
// const ABV = "abv_gt=6"
// Parameters are passed in as a query string and can be chained together.

export const fetchBeers = (getABVBeers, getClassicBeers) => {
  return fetch(`${API_URL}?${getABVBeers}&${getClassicBeers}`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      return jsonResponse;
    })

    .catch((error) => {
      console.log(error);
    });
};
