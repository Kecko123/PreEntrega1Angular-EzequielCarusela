import { Component } from '@angular/core';

export interface Alumno {
  name: string;
  position: number;
  note: string;
}

const ELEMENT_DATA: Alumno[] = [
  {position: 1, name: 'Julian Fernández', note: '9'},
  {position: 2, name: 'Enzo Alvarez', note: '2'},
  {position: 3, name: 'Lionel Acuña', note: '10'},
  {position: 4, name: 'Marcos Messi', note: '8'},



];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})


export class UsersComponent {
  displayedColumns: string[] = ['position', 'name', 'note'];
  dataSource = ELEMENT_DATA
}
