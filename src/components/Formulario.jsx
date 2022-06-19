import React, { useState } from "react";
import useLetras from "../hooks/useLetras";

const Formulario = () => {

    const [busqueda, setBusqueda] = useState({
        artista: '',
        cancion: ''
    })

    const {setAlerta, busquedaLetra} = useLetras()
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(Object.values(busqueda).includes("")){
            setAlerta('Coloca nombre de artista y cancion')
            return
        }
        busquedaLetra(busqueda)
    }
    // console.log(busqueda)
  return (
    <form action="" onSubmit={handleSubmit}>
      <legend>Busqueda por Artistas y Cancion</legend>
      <div className="form-grid">
        <div>
          <label>Artista</label>
          <input type="text" name="artista" placeholder="Busca por Artista" value={busqueda.artista} onChange={e => setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
          })} />
        </div>
        <div>
          <label>Cancion</label>
          <input type="text" name="cancion" placeholder="Busca por cancion" value={busqueda.cancion} onChange={e => setBusqueda(
            { ...busqueda,
             [e.target.name]: e.target.value}
          )} />
        </div>
        <input type="submit" value="Buscar" />
      </div>
    </form>
  );
};

export default Formulario;
