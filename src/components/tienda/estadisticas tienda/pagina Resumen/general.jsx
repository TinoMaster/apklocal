import { faClosedCaptioning, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const General = () => {
  return (
    <div className="w-2/5 m-auto h-2/5 relative">
    <h2 className=" font-semibold ml-2"><FontAwesomeIcon icon={faClosedCaptioning}/> General</h2>
    <div className="w-full h-full rounded-md shadow-lg shadow-black/10 overflow-hidden">
      {/* Prueba desde aqui */}
      <div className="h-full flex flex-col shadow-lg shadow-black-400/50 bg-white/5 rounded-lg">
        <div className="h-full rounded-t-lg rounded-b-lg flex flex-col">
          <div className="flex flex-col w-full h-full">
            <div className="flex justify-between bg-white/10 p-3 rounded-t-lg">
              <h6 className="font-serif md:text-lg text-green-600">
                Venta Total
              </h6>
              <p className="text-sm  font-medium text-green-600">
                {""} <FontAwesomeIcon icon={faDollarSign} />
              </p>
            </div>

            <div className="flex justify-between p-2 ">
              <h6 className="font-serif text-sm md:text-base">
                Dueño
              </h6>
              <p className="text-sm  ">
                {" "}
                <FontAwesomeIcon icon={faDollarSign} />
              </p>
            </div>

            <div className="flex justify-between p-2 ">
              <h6 className="font-serif text-sm md:text-base">
                Salario
              </h6>
              <p className="text-sm ">
                {""} <FontAwesomeIcon icon={faDollarSign} />
              </p>
            </div>

            <div className="flex justify-between p-2 ">
              <h6 className="font-serif text-sm md:text-base">
                Mejor Venta
              </h6>
              <p className="text-sm ">
                {" "}
                <FontAwesomeIcon icon={faDollarSign} />
              </p>
            </div>

            <div className="flex justify-between p-2 ">
              <h6 className="font-serif text-sm md:text-base">
                Mejor Turno
              </h6>
              <p className="text-sm">
                <FontAwesomeIcon icon={faDollarSign} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
