import { Component, OnInit } from '@angular/core';
import { PropietarioService } from 'src/app/service/propietario.service';
import { MatTableDataSource } from '@angular/material/table'
import { Propietario } from 'src/app/model/propietario';
@Component({
  selector: 'app-propietario-listar',
  templateUrl: './propietario-listar.component.html',
  styleUrls: ['./propietario-listar.component.css']
})
export class PropietarioListarComponent implements OnInit {
  dataSource: MatTableDataSource<Propietario> = new MatTableDataSource();
  displayedColumns:string[]=['id','name','email'];
  constructor(private ps: PropietarioService) { }

  ngOnInit(): void {
    this.ps.listar().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
    })
  }

}
