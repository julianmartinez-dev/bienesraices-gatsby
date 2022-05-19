import React, { useState, useEffect} from 'react'
import { css } from '@emotion/react'
import usePropiedades from '../hooks/usePropiedades'
import PropiedadPreview from './propiedadPreview'
import * as ListadoPropiedadesCSS from '../css/listadoPropiedades.module.css'
import useFiltro from '../hooks/useFiltro'

const ListadoPropiedades = () => {

   const resultado =  usePropiedades();
   const [propiedades] = useState(resultado);
   const [filtradas, setFiltradas] = useState([]);

   //Filtrado de propiedades

 const { filtroUI, filtro } = useFiltro();


   useEffect(() => {
        if(filtro) {
            const filtradas = propiedades.filter( propiedad => propiedad.categoria === filtro);
            setFiltradas(filtradas);
        
        }else{
            setFiltradas(propiedades)
        }

       
   },[filtro, propiedades]);

  return (
      <>
      
    <h2
        css={css`
            margin-top: 5rem;
            `}
    >Nuestras Propiedades</h2>

    {filtroUI()}

    <ul className={ListadoPropiedadesCSS.propiedades}>
        {filtradas.map(propiedad => (
            <PropiedadPreview key={propiedad.id} propiedad={propiedad} />
        ))}
    </ul>
    </>
  )
}

export default ListadoPropiedades