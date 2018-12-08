const CLIENT_ID = "O2IMRQRK3DF1BMDNWRLPEND3HRI0EN0CLMNAURIVGXN5UC2C";
const CLIENT_SECRET = "0PBSYBFVMPDAKSHMKWYPYJRWICOI2I1G42NY5W40RPA5TEKO";

export default function (getLocation = () => {
    fetch(`https://api.foursquare.com/v2/venues/explore?cat=food&near=coimbatore&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20181209`)
    .then(resp => resp.json())
    .then(result => result.response.groups[0].items)
});