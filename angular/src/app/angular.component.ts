import { Component } from '@angular/core';
import { MdCheckbox } from '@angular2-material/checkbox'
import { MdCard } from '@angular2-material/card'
import { MdButton } from '@angular2-material/button'
import { Toolbar } from './components/toolbar'

@Component({
  moduleId: module.id,
  selector: 'angular-app',
  templateUrl: 'angular.component.html',
  styleUrls: ['angular.component.css'],
  directives: [MdCheckbox, MdCard, Toolbar, MdButton]
})

export class AngularAppComponent {
  title = 'angular works!';
}
