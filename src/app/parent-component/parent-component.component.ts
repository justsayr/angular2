import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
  name: string = ''
  message: String = ''
  showButton: Boolean = false

  constructor() {
    // this.name = 'Alfa'
  }

  clickMe () {
    console.log('Here I am ')
  }
  onMessageReceive (flag: boolean) {
    if(flag) {
      this.showButton = true
    }
  }
  ngOnInit() {
  }

}
