import React, { useState } from "react"; // Importamos React y el hook useState desde la biblioteca de React.
import Pokemon from "./Pokemon"; // Importamos el componente Pokemon desde el archivo "Pokemon.jsx".

// Definimos un componente de función llamado 'Pokemons' utilizando una función de flecha.
export const Pokemons = () => {
    // Definimos un estado local llamado 'pokemons' que almacenará un array de pokemons.
    // El estado se inicializa como un array vacío.
    const [pokemons, setPokemons] = useState([]);

    // Definimos una función asíncrona llamada 'dataPokemons' que obtiene datos de la API.
    const dataPokemons = async () => {
        // Si ya hemos cargado los pokemons (si el array no está vacío), salimos de la función.
        if (pokemons.length > 0) { 
            return; 
        }

        // Definimos la URL de la API que queremos consultar.
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
        // Hacemos una solicitud a la API utilizando 'fetch' y esperamos la respuesta.
        const response = await fetch(url); 
        // Convertimos la respuesta en formato JSON y la almacenamos en la variable 'data'.
        const data = await response.json(); 
        // Actualizamos el estado 'pokemons' con los resultados obtenidos de la API.
        setPokemons(data.results); 
        // Imprimimos los datos en la consola para verificar que se hayan obtenido correctamente.
        console.log(data); 
    };

    // Llamamos a la función 'dataPokemons' para obtener los datos de la API cuando se renderiza el componente.
    dataPokemons();

    // La función 'Pokemons' devuelve el JSX que se renderizará en la pantalla.
    return (
        <div>
            <h1>POKEMONS</h1> {/* Título de la página */}

            {/* Mapeamos sobre el array 'pokemons' para crear un componente 'Pokemon' por cada pokemon en la lista */}
            {pokemons.map((pokemon, index) => {
                // Retornamos un componente 'Pokemon' por cada elemento en el array, pasando como props el nombre y la URL.
                return <Pokemon key={index} name={pokemon.name} url={pokemon.url} />;
            })}
        </div>
    );
};
