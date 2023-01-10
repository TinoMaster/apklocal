import React from 'react'

export const Meses = ({setMesDelAño,yearChoice}) => {
  return (
    <div className="flex flex-wrap m-2  justify-around bg-violet-200 rounded-lg mt-2">
          <input
            className="input-hide"
            type="radio"
            id="enero"
            value="enero"
            name="meses"
          />
          <label
            className="label-meses default:"
            htmlFor="enero"
            onClick={() => setMesDelAño(`1-${yearChoice}`)}
            defaultChecked={true}
          >
            Enero
          </label>
          <input
            className="input-hide"
            type="radio"
            id="febrero"
            value="febrero"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="febrero"
            onClick={() => setMesDelAño(`2-${yearChoice}`)}
          >
            Febrero
          </label>
          <input
            className="input-hide"
            type="radio"
            id="marzo"
            value="marzo"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="marzo"
            onClick={() => setMesDelAño(`3-${yearChoice}`)}
          >
            Marzo
          </label>
          <input
            className="input-hide"
            type="radio"
            id="abril"
            value="abril"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="abril"
            onClick={() => setMesDelAño(`4-${yearChoice}`)}
          >
            Abril
          </label>
          <input
            className="input-hide"
            type="radio"
            id="mayo"
            value="mayo"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="mayo"
            onClick={() => setMesDelAño(`5-${yearChoice}`)}
          >
            Mayo
          </label>
          <input
            className="input-hide"
            type="radio"
            id="junio"
            value="junio"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="junio"
            onClick={() => setMesDelAño(`6-${yearChoice}`)}
          >
            Junio
          </label>
          <input
            className="input-hide"
            type="radio"
            id="julio"
            value="julio"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="julio"
            onClick={() => setMesDelAño(`7-${yearChoice}`)}
          >
            Julio
          </label>
          <input
            className="input-hide"
            type="radio"
            id="agosto"
            value="agosto"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="agosto"
            onClick={() => setMesDelAño(`8-${yearChoice}`)}
          >
            Agosto
          </label>
          <input
            className="input-hide"
            type="radio"
            id="septiembre"
            value="septiembre"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="septiembre"
            onClick={() => setMesDelAño(`9-${yearChoice}`)}
          >
            Septiembre
          </label>
          <input
            className="input-hide"
            type="radio"
            id="octubre"
            value="octubre"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="octubre"
            onClick={() => setMesDelAño(`10-${yearChoice}`)}
          >
            Octubre
          </label>
          <input
            className="input-hide"
            type="radio"
            id="noviembre"
            value="noviembre"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="noviembre"
            onClick={() => setMesDelAño(`11-${yearChoice}`)}
          >
            Noviembre
          </label>
          <input
            className="input-hide"
            type="radio"
            id="diciembre"
            value="diciembre"
            name="meses"
          />
          <label
            className="label-meses"
            htmlFor="diciembre"
            onClick={() => setMesDelAño(`12-${yearChoice}`)}
          >
            Diciembre
          </label>
        </div>
  )
}
