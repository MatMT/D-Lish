import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
//Componentes
import WiggleAlert from "../components/WiggleAlert";

// CONTENIDO VARIABLE
import useCafeterias from "../hooks/useCafeterias";

//Iconos
import { FaRegHeart } from "react-icons/fa";
import FoodCard from "../components/Cafeteria/FoodCard";

export default function CafetinView() {
  // Extraer parametro
  const { cafeterias, obtenerContenidoCafeteria, contenidoCafeteria, limpiarCafeteria } = useCafeterias();
  const { cafeteriaId } = useParams();

  // Extraer contenido de la cafeteria actual al tener el ID 
  useEffect(() => {
    limpiarCafeteria();
    obtenerContenidoCafeteria(cafeteriaId);
  }, []);

  // ESPERA === Componente de carga
  if (contenidoCafeteria.length == [] || cafeterias.length == []) {
    return <p className=" text-9xl">Cargando</p>
  }

  // Contenido de la cafeteria
  const cafeteria = cafeterias.find(cafeteria => cafeteria.id == cafeteriaId);
  const { nombre, cafe_wallp, likes } = cafeteria;
  const { platillos } = contenidoCafeteria;

  return (
    <>
      <section className="mb-[3rem] md:mb-[5rem] animate-fade-right animate-ease-in-out animate-once animate-duration-[1000ms]">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl md:text-7xl font-bold mt-10 ml-10 md:px-10">
            {nombre ? nombre : ''}
          </h1>
          <div className="stat flex flex-col items-end" style={{ backgroundImage: `url('../src/assets/cafeterias/${cafe_wallp ? cafe_wallp : ''}.jpg')` }}>
            <div className="stat-title text-xs md:text-lg">Recomendado por</div>
            <div className="flex items-center">
              <div className="stat-figure text-primary text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 md:w-8 md:h-8 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
              </div>
              <div className="stat-value text-sm md:text-3xl text-primary ml-1">
                {likes ? likes : ''}
              </div>
            </div>
            <div className="stat-desc text-sm md:text-lg">Estudiantes</div>
          </div>
        </div>
      </section >

      <section className="bg-neutral text-white mt-6 min-h-screen rounded-xl items-center justify-between mx-2 xl:mx-[1rem] animate-fade-up animate-ease-in-out animate-once animate-duration-[1000ms] animate-delay-[800ms]">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-2xl font-bold px-2 ml-6 md:ml-[3rem] mt-6 text-terc">
              ● Abierto
            </h2>
          </div>
          <div className="flex items-center">
            <h2 className="text-2xl px-1 ml-6 md:ml-[3rem] mt-6 text-white">
              171
            </h2>
            <FaRegHeart className="w-7 h-7 ml-2 mt-6 mr-6 md:mr-[3rem]" />
          </div>
        </div>

        <section className="mb-10">
          <WiggleAlert />
        </section>

        <section className="flex items-center justify-center ">
          <div className="join">
            <input
              className="join-item btn bg-base-100"
              type="radio"
              name="options"
              aria-label="Desayunos"
            />
            <input
              className="join-item btn bg-base-100"
              type="radio"
              name="options"
              aria-label="Almuerzos"
            />
            <input
              className="join-item btn bg-base-100"
              type="radio"
              name="options"
              aria-label="Bebidas"
            />
          </div>
        </section>

        <div className="flex flex-col lg:flex-row items-center justify-center mt-[3rem] px-[3rem] md:px-[8rem] lg:px-[3rem] gap-8">

          {/* CONDICIONAL - ARREGLO DE PLATILLOS */}
          {platillos.length ?
            platillos.map(
              (platillo, id) => (
                <FoodCard name={platillo.name} key={id} id={platillo.id} description={platillo.description} cafeteriaId={cafeteriaId} />
              )) :
            'No hay nada'
          }

        </div>
        <br />
      </section>

      <br /> <br />


    </>
  );
}
