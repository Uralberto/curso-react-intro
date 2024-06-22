import React from "react";


const useLocalStorage = (itemName, initialValue) => {
  const [item, setItem] = React.useState(initialValue); //Esto etaba mas abajo. Ahora aquí
  //El estado inicial ya no será parsedItem sino initialValue
  //Con esto estamos logrando que el estado inicial sea un array vacio
  //Es una array vacío porque no tenemos todos?
  //O es un array vacío porque estamos esperando a que se ejecute el useEffect?
  // Para ello creamos un estado de carga y otro de error para saber si la información
  // es de localStorage o es la informacion que apenas se está cargando, o tenemos un error.

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false); // false porque inicialmente no tenemos porque
  // decir  error...error..error, falló la palicación, no. Hay que esperar al proceso de carga
  // y si en esa vuelta se detecta error, pues ahí si.

  // const localStorageItem = localStorage.getItem(itemName);
  //  let parsedItem; Estas dos lineas de codigo la introducimos en useEffect

  // Esta lágica la encapsulamos en el useEffect de abajo para empezar a simular
  // demora en el llamdo al localStorage
  // if (!localStorageItem) {
  //   localStorage.setItem(itemName, JSON.stringify(initialValue));
  //   parsedItem = initialValue;
  // } else {
  //   parsedItem = JSON.parse(localStorageItem);
  // }

  React.useEffect(() => {

   setTimeout (() => {
    try {
      const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
    setItem(parsedItem)
  }
  // Esta parte de localStorage va a ser asincrona, se va a demorar. (Simulacion)
  setLoading(false)}

  catch (error) {
    setError(error) // que muestre el error. O así también: setError(true)
  }
  
}, 3000); // Estamos simulando que se ejecute despues de 3 segundo
    
   })

    

  // const [item, setItem] = React.useState(parsedItem);   // ¿Como hacer para que este estado empiece siendo algo, cualquier caso?
  // Que no se quede esperando que se ejecute lo que esta pensado en el useEffect?
  // llevamos este estado inicial para arriba, en primer lugar

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
  // Es mejor retornar, de cauerdo con React, un objeto y no un array
  // Se pueden llamar en otro lugar sin importar el orden
};

export { useLocalStorage };