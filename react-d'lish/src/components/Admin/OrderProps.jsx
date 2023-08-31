import React, { useEffect } from 'react';
import OrderContent from './OrderContent';
import useOwner from '../../hooks/useOwner';

function OrderProps(props) {
  const { idPlatillo } = props;
  const { pedidos, obtenerPedidos } = useOwner();
  useEffect(() => {
    obtenerPedidos();
  }, []);
  return (
    <div className="flex items-center w-[95%] justify-center text-lg">
      <div className="container">
        <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
          <thead className="text-white">
            <tr className="bg-secondary flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
              <th className="border p-3 text-left">Precio $</th>
              <th className="border p-3 text-left">Cliente</th>
              <th className="border p-3 text-left">Complemento 1</th>
              <th className="border p-3 text-left">Complemento 2</th>
              <th className="border p-3 text-left">Bebida</th>
              <th className="border p-3 text-left">Acompañante</th>
              {/* <th className="p-3 text-left">Acciones</th> */}
            </tr>
          </thead>
          {/* PEDIDOS */}
          <tbody className="flex-1 sm:flex-none text-[#1f1f1f]  font-semibold">
            {pedidos.length ? pedidos.map((pedido, id) => {
              // Encabezado de la tabla para cada producto
              if (pedido.mainDish.id == idPlatillo) {
                return <OrderContent key={id}
                  price={pedido.price}
                  nameUser={pedido.user.name}
                  content1={pedido.sideDish1.name}
                  content2={pedido.sideDish2.name}
                  drink={pedido.drink?.name}
                  accompaniment={pedido.accompaniment?.name}
                />
              } else {
                return <tr key={id}  >
                  <td></td>
                  <td></td>
                  <td className='text-center w-full text-3xl text-red-800 font-bold'>No hay pedidos</td>
                  <td></td>
                  <td></td>
                </tr>
              }
            }) : <tr><td colSpan="6" className='text-center'>No hay pedidos</td></tr>}
          </tbody>
        </table>
      </div>
    </div>


  )
}

export default OrderProps
