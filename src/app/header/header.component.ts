import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoveroneComponent } from './../popoverone/popoverone.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(public popoverController:PopoverController) { }

  ngOnInit() {}

  async popclick(event){
    const popover = await this.popoverController.create({
      component:PopoveroneComponent,
      event
    });
    return await popover.present();
  }
}
