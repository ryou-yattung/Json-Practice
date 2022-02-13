fetch("http://localhost:3000/users")
  .then((response) => {
    //     const data = response.json();
    //     console.log(data);
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
    const html = data.data.map();
    document.querySelector("#test").innerHTML = `<h1>${data[0].name}</h1>`;
  })
  .catch((err) => console.log("Request Failed", err));
