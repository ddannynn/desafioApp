import { Moneda } from './moneda';
export class TipoCambio {
  id!: number;
  fecha!: Date;
  compra!: number;
  venta!: number;
  moneda!: Moneda;
}
