const dataFromBD = [
  {
    id: 1,
    imagen: "https://i.postimg.cc/D0YW4Dtq/Whats-App-Image-2022-09-05-at-3-54-12-PM.jpg",
    titulo: "Mochila Houston Red",
    descripcion: "Material: Gamuza",
    stock: 5,
    precio: "$10.000",
  },
  {
    id: 2,
    imagen: "https://i.postimg.cc/13Cb8ZRW/Whats-App-Image-2022-09-05-at-3-54-10-PM-1.jpg",
    titulo: "Mochila Houston Oliva",
    descripcion: "Material: Gamuza",
    stock: 5,
    precio: "$10.000",
  },
  {
    id: 3,
    imagen: "https://i.postimg.cc/13hrMCC9/295208063-1122512234969397-4246785277211889643-n.jpg",
    titulo: "Mochila Houston Animal Print",
    descripcion: "Material: Gamuza",
    stock: 5,
    precio: "$12.000",
  },
  {
    id: 4,
    imagen: "https://i.postimg.cc/8CdP85mF/Whats-App-Image-2022-07-18-at-10-29-58-AM.jpg",
    titulo: "Mochila Houston Rosa",
    descripcion: "Material: Ecocuero",
    stock: 5,
    precio: "$9.000",
  },
  {
    id: 5,
    imagen: "https://i.postimg.cc/1Xvrvsj2/Whats-App-Image-2022-08-25-at-7-30-54-PM.jpg",
    titulo: "Matera Texas Black",
    descripcion: "Material: Matelasse",
    stock: 5,
    precio: "$8.500",
  },
  {
    id: 6,
    imagen: "https://i.postimg.cc/XJdVKvpN/305469059-1150772978809989-2488239117100282190-n.jpg",
    titulo: "Riñonera Tulum Green",
    descripcion: "Material: Matelasse",
    stock: 5,
    precio: "$5.900",
  },
  {
    id: 7,
    imagen: "https://i.postimg.cc/j2vYvnKT/305631276-1149601742260446-6317278241311706528-n.jpg",
    titulo: "Matera Texas Blue Electric",
    descripcion: "Material: Matelasse",
    stock: 5,
    precio: "$8.500",
  },
  {
    id: 8,
    imagen: "https://i.postimg.cc/FRgMskYS/300843273-1139584789928808-5510840692550989438-n.jpg",
    titulo: "Mochila Houston Purple",
    descripcion: "Material: Matelasse",
    stock: 5,
    precio: "$10.000",
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
