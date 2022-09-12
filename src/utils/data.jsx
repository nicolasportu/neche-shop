const dataFromBD = [
  {
    id: 1,
    imagen: "https://i.ibb.co/3hzGsmR/Whats-App-Image-2022-09-05-at-3-54-12-PM.jpg",
    titulo: "Mochila Houston Red",
    descripcion: "Material: Gamuza",
    stock: 5,
    precio: "$10.000",
  },
  {
    id: 2,
    imagen: "https://i.ibb.co/H4sT133/Whats-App-Image-2022-09-05-at-3-54-10-PM.jpg",
    titulo: "Mochila Houston Oliva",
    descripcion: "Material: Gamuza",
    stock: 5,
    precio: "$10.000",
  },
  {
    id: 3,
    imagen: "https://i.ibb.co/X2x7PDM/Whats-App-Image-2022-09-05-at-3-54-10-PM-1.jpg",
    titulo: "Mochila Houston Red",
    descripcion: "Material: Gamuza",
    stock: 5,
    precio: "$10.000",
  },
  {
    id: 4,
    imagen: "https://i.ibb.co/w4xhc66/Whats-App-Image-2022-07-18-at-10-29-58-AM.jpg",
    titulo: "Mochila Houston Rosa",
    descripcion: "Material: Ecocuero",
    stock: 5,
    precio: "$9.000",
  },
  {
    id: 5,
    imagen: "https://i.ibb.co/t3FhqFh/Whats-App-Image-2022-08-25-at-7-30-54-PM.jpg",
    titulo: "Matera Texas Black",
    descripcion: "Material: Matelasse",
    stock: 5,
    precio: "$8.500",
  },
];

let is_OK = true;

let apiPromise = new Promise((resolve, reject) => {
  if (is_OK) {
    setTimeout(() => {
      resolve(dataFromBD);
    }, 2000);
  } else {
    setTimeout(() => {
      reject("¡ERROR!");
    }, 4000);
  }
});

export default apiPromise;
