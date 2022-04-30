export const fetchData = (url) => {
  let dataToReturn;
  fetch(url)
    .then((response) => response.json())
    .then((data) => (dataToReturn = data));
  return dataToReturn;
};
