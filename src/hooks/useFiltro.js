import React from 'react';
import { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const Formulario = styled.form`
    width: 100%;
    display: flex;
    margin: 2rem auto 0 auto;
    border: 1px solid #e1e1e1;
    max-width: 1200px;
    
`

const Select = styled.select`
    flex: 1;
    padding: 1rem;
    appearance: none;
    border:none;
    font-family: 'Lato', sans-serif;
    text-align: center;

`

const useFiltro = () =>{

    const [filtro, setFiltro] = useState('');
    
    const resultado = useStaticQuery(graphql`
      query {
        allStrapiCategoria {
          nodes {
            nombre
            id
          }
        }
      }
    `)

    const categorias = resultado.allStrapiCategoria.nodes;

    const filtroUI = () => (
        <Formulario>
            <Select
                onChange={e => setFiltro(e.target.value)}
                value={filtro}
            >
                <option value="">---Filtrar----</option>
                {categorias.map(categoria => (
                    <option key={categoria.id} value={categoria.nombre}>{categoria.nombre}</option>
                ))}
            </Select>
        </Formulario>
    )
 
    return {
        filtro,
        filtroUI

    }
}

export default useFiltro;