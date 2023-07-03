import { Component } from '@angular/core';

@Component({
  selector: 'app-show-projects',
  templateUrl: './show-projects.component.html',
  styleUrls: ['./show-projects.component.scss'],
})
export class ShowProjectsComponent {
  laptops: string[] = ['join.png', 'loco.png', 'crm.png'];
  headlines: string[] = ['Join', 'El Pollo Loco', 'Ring of fire']
  technologies: string[] = [
    'JavaSctipt | HTML | CSS',
    'JavaScript | HTML | CSS',
    'Angular | Firebase'
  ];
  descriptions: string[] = ['Task manager inspired by Kanban System. Creat and organize task using drap and drop function, assing user and categories.', 'A simple Jump-and-Run game based on an object-oriented approach. Help Pepe against the Chickens.', 'A very simple coustumer relationsship management system working with CRUD functionality.'];
}
