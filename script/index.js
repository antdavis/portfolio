
fetch('https://api.github.com/users/antdavis', {
  method: "GET",
  headers: { "Content-type": "application/json;charset=UTF-8" }
})
  .then(response => response.json())
  .then(json => {
    document.getElementById("profile-pic").src = json.avatar_url;
    document.getElementById("bio").innerHTML = json.bio;
  })
  .catch(err => console.log('Request Failed', err));
