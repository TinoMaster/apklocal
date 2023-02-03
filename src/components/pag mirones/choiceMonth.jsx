import React from "react";

export const ChoiceMonth = () => {
  return (
    <div className="flex flex-wrap m-2 justify-around bg-white/10 outline-1 outline-dotted outline-slate-400 rounded-lg mt-2">
      <input
        className="input-hide"
        type="radio"
        id="enero"
        value="enero"
        name="meses"
      />
      <label
        className="label-meses_pagMiron"
        htmlFor="enero"
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
      <label className="label-meses_pagMiron" htmlFor="febrero">
        Febrero
      </label>
      <input
        className="input-hide"
        type="radio"
        id="marzo"
        value="marzo"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="marzo">
        Marzo
      </label>
      <input
        className="input-hide"
        type="radio"
        id="abril"
        value="abril"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="abril">
        Abril
      </label>
      <input
        className="input-hide"
        type="radio"
        id="mayo"
        value="mayo"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="mayo">
        Mayo
      </label>
      <input
        className="input-hide"
        type="radio"
        id="junio"
        value="junio"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="junio">
        Junio
      </label>
      <input
        className="input-hide"
        type="radio"
        id="julio"
        value="julio"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="julio">
        Julio
      </label>
      <input
        className="input-hide"
        type="radio"
        id="agosto"
        value="agosto"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="agosto">
        Agosto
      </label>
      <input
        className="input-hide"
        type="radio"
        id="septiembre"
        value="septiembre"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="septiembre">
        Septiembre
      </label>
      <input
        className="input-hide"
        type="radio"
        id="octubre"
        value="octubre"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="octubre">
        Octubre
      </label>
      <input
        className="input-hide"
        type="radio"
        id="noviembre"
        value="noviembre"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="noviembre">
        Noviembre
      </label>
      <input
        className="input-hide"
        type="radio"
        id="diciembre"
        value="diciembre"
        name="meses"
      />
      <label className="label-meses_pagMiron" htmlFor="diciembre">
        Diciembre
      </label>
    </div>
  );
};
