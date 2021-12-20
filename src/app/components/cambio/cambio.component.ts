import { Component, OnInit } from '@angular/core';
import { Movimiento } from 'src/app/entities/movimiento';
import { CambioService } from 'src/app/services/cambio.service';
import { Operacion } from '../../entities/operacion';

@Component({
  selector: 'app-cambio',
  templateUrl: './cambio.component.html',
  styleUrls: ['./cambio.component.css'],
})
export class CambioComponent implements OnInit {
  mov: Movimiento = new Movimiento();
  ope: Operacion = new Operacion();

  constructor(private cambioService: CambioService) {}

  ngOnInit(): void {}

  Calcular() {
    // console.log(this.mov);
    this.cambioService.calcular(this.mov).subscribe((res: any) => {
      this.ope = res;
    });
  }
}
