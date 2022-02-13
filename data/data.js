fetch("http://localhost:3000/users", { method: "GET" })
  .then((response) => {
    const data = response.json();
    //     console.log(data);
    return data;
  })
  .then((data) => {
    console.log(data);
    const html = data.map((user) => {
      return `<p>id: ${user.id} name: ${user.name}</p>`;
    });
    console.log(html);
    document.getElementById("test").innerHTML = `<h1>${html}</h1>`;
    //or  .insertAdjacentHTML("afterbegin", `<h1>${html}</h1>`);
  })
  .catch((err) => console.log("Request Failed", err));
