

// import axios from 'axios';
// axios.defaults.headers.common['x-api-key'] =
//   'live_d3juQjfyw1lSAXigGoGpeVy5Z1AMGbZmspKxRrENA6ezAYoETgbdtVbXTFHuBcr6';
// axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';


// export function fetchBreeds() {
//   return axios.get(endPoint).then(data => {
//     return data.data;
//   });
// }

// export function fetchCatByBreed(endPoint, breedId) {
//   const catByBreed = endPoint + '?breed_ids=' + breedId;
//   return axios.get(catByBreed).then(resp => {
//     return resp.data;
//   });
// }

import axios from 'axios';
axios.defaults.headers.common['x-api-key'] =
  'live_d3juQjfyw1lSAXigGoGpeVy5Z1AMGbZmspKxRrENA6ezAYoETgbdtVbXTFHuBcr6';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';


export function fetchBreeds(endPoint) {
  return axios.get(endPoint).then(data => {
    return data.data;
  });
}

export function fetchCatByBreed(endPoint, breedId) {
  const catByBreed = endPoint + '?breed_ids=' + breedId;
  return axios.get(catByBreed).then(resp => {
    return resp.data;
  });
}