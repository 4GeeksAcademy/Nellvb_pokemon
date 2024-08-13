import React, { useState } from "react";

const Pokemon = ({ name, url }) => {

    const [dataPokemon, setDataPokemon] = useState({});

    const cargaDatosPokemon = async () => {
        if (dataPokemon.id) {
            return;
        }
        const response = await fetch(url);
        const data = await response.json();
        setDataPokemon(data);
    }

    cargaDatosPokemon();

    return (
        <div>
            <h1>{name}</h1>
            <div>
                {dataPokemon && dataPokemon.sprites ? (
                    <img src={dataPokemon.sprites.front_default} alt={`Imagen de ${name}`}/>) :
                    (<p>
                        Buscando imagen
                    </p>)
                }

            </div>
        </div>
    )

}

export default Pokemon;