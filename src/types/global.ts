export interface CuadreDiario {
  id: string;
  fecha: string;
  miron: number;
  fondo: number;
  salario1: number;
  salario2?: number;
  dueño: number;
  hojas?: Hojas;
  turno?: Turno;
}

export interface Turno {
  trabajador1: string;
  trabajador2?: string;
}

interface Hojas {
  bn: number;
  color: number;
  rest_bn?: number;
  rest_color?: number;
}
