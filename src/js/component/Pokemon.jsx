// Importamos React y el hook useState desde la biblioteca de React
import React, { useState } from "react";

// Definimos el componente funcional 'Pokemon' que recibe 'name' y 'url' como props
const Pokemon = ({ name, url }) => {
    
    // Declaramos una variable de estado 'dataPokemon' inicializada como un objeto vacío
    // 'setDataPokemon' es la función para actualizar 'dataPokemon'
    const [dataPokemon, setDataPokemon] = useState({});
    
    // Definimos una función asíncrona para cargar los datos del Pokémon desde la API
    const cargaDatosPokemon = async () => {
        // Si 'dataPokemon' ya tiene un 'id', significa que los datos ya fueron cargados; entonces, salimos de la función
        if (dataPokemon.id) {
            return;
        }

        // Realizamos una solicitud HTTP a la URL proporcionada para obtener los datos del Pokémon
        const response = await fetch(url);
        
        // Convertimos la respuesta en formato JSON
        const data = await response.json();
        
        // Actualizamos el estado 'dataPokemon' con los datos obtenidos de la API
        setDataPokemon(data);
    }

    // Llamamos a la función 'cargaDatosPokemon' para iniciar la carga de datos
    cargaDatosPokemon();

    // El componente retorna el JSX que se renderizará en la interfaz de usuario
    return (
        // Contenedor principal del componente
        <div>
            {/* Mostramos el nombre del Pokémon en un encabezado de nivel 1 */}
            <h1>{name}</h1>
            
            {/* Contenedor para la imagen o el mensaje de carga */}
            <div>
                {/* Verificamos si 'dataPokemon' tiene datos y si 'sprites' está disponible */}
                {dataPokemon && dataPokemon.sprites ? (
                    // Si la condición es verdadera, mostramos la imagen frontal del Pokémon
                    <img 
                        src={dataPokemon.sprites.front_default} // URL de la imagen
                        alt={`Imagen de ${name}`} // Texto alternativo para la imagen
                    />
                ) : (
                    // Si la condición es falsa (datos aún no cargados), mostramos un mensaje indicando que se está buscando la imagen
                    <p>Buscando imagen</p>
                )}
            </div>
        </div>
    );
}

// Exportamos el componente 'Pokemon' para que pueda ser utilizado en otros archivos
export default Pokemon;
