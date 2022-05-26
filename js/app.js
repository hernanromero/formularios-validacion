const formulario = document.getElementById("formulario");

const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");

const alertName = document.getElementById("alertName");
const alertEmail = document.getElementById("alertEmail");
const alertSuccess = document.getElementById("alertSuccess");

const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜüs]+$/;
const regUserEmail =
  /^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/;

const pintarMensajeExito = () => {
  alertSuccess.classList.remove("d-none");
  alertSuccess.textContent = "Mensaje enviado con éxito";
};

const pintarMensajeError = (errores) => {
  errores.forEach((item) => {
    item.tipo.classList.remove("d-none");
    item.tipo.textContent = item.msg;
  });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  alertSuccess.classList.add("d-none");

  //console.log(!userName.value.trim()); // true Si tiene espacios en blanco

  const errores = [];

  if (!regUserName.test(userName.value) || !userName.value.trim()) {
    // console.log("Nombre no válido");
    userName.classList.add("is-invalid");

    errores.push({
      tipo: alertName,
      msg: "Formato no válido, solo letras.",
    });
    // return; // Sale de la funcion
  } else {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    alertName.classList.add("d-none");
  }

  if (!regUserEmail.test(userEmail.value) || !userEmail.value.trim()) {
    // console.log("Email no válido");
    userEmail.classList.add("is-invalid");

    errores.push({
      tipo: alertEmail,
      msg: "Formato de email no válido",
    });
    // return; // Sale de la funcion
  } else {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    alertEmail.classList.add("d-none");
  }

  if (errores.length != 0) {
    pintarMensajeError(errores);
    return;
  }

  console.log("Formulario Enviado");
  pintarMensajeExito();
});


