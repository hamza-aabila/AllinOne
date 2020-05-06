import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


@Component({
  selector: 'app-popoverone',
  templateUrl: './popoverone.component.html',
  styleUrls: ['./popoverone.component.scss'],
})
export class PopoveroneComponent implements OnInit {

  constructor(public popoverController:PopoverController) { }

  ngOnInit() {}
  close(){
    this.popoverController.dismiss();
  }
}
