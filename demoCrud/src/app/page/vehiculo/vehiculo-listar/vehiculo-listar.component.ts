import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/service/vehiculo.service';
import { Vehiculo } from 'src/app/model/vehiculo';

@Component({
  selector: 'app-vehiculo-listar',
  templateUrl: './vehiculo-listar.component.html',
  styleUrls: ['./vehiculo-listar.component.css']
})
export class VehiculoListarComponent implements OnInit {
  dataSource: MatTableDataSource<Vehiculo> = new MatTableDataSource();
  displayedColumns:string[]=['id','license','date','propietario']
  constructor(private Vs: VehiculoService) { }

  ngOnInit(): void {
    this.Vs.listar().subscribe(d => {
      this.dataSource = new MatTableDataSource(d);
    })
  }

}
