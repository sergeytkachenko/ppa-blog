import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar'

@Component({
  moduleId: module.id,
  selector: 'toolbar',
  templateUrl: 'toolbar.html',
  styleUrls: ['toolbar.css'],
  directives: [MdToolbar]
})

export class Toolbar {
  color = 'primary';
}
