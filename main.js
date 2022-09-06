const API_URL_GET = "https://reqres.in/api";
const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL_GET}/users`)
  .then((response) => response.json())
  .then((users) => {
    const tpl = users.data.map(
      (user) =>
        `
          <div class="card col-12 col-md-3 col-lg-3 mb-4 shadow p-3 mb-5 bg-white rounded">
          <img class="card-img-top" src="${user.avatar}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${
              user.first_name + " " + user.last_name
            }</h5>
            <p class="card-text">${user.email}</p>        
          </div>
        </div>
    `
    );
    HTMLResponse.innerHTML = `${tpl}`;
  })
  .catch((err) => console.log("Ha ocurrido un error...", err)); // Capturar errores

async function registerUser() {
  var API_URL_POST = "https://reqres.in/api/register";
  var data = { email: "eve.holt@reqres.in", password: "pistol" };
  fetch(API_URL_POST, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => {
      Swal.fire("Ha ocurrido un error...", "", "error");
      console.error("Error:", error);
    })
    .then((response) => {
      Swal.fire("¡Persona registrada con éxito!", "", "success");
      console.log("Success:", response);
    });
}
