const CLIENT_ID = "";
const CLIENT_SECRET = "";

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

// To get the data from the foursquare - Food near Coimbatore, Tamilnadu, India
export const fetchLocation = () => {
  return fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=coimbatore&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181209&query=food`)
    .then(handleErrors)
    .then(response => response.json())
    .then(result => result.response.groups[0].items)
    .catch(error => alert("Error in foursquare. Please restart."))
};
