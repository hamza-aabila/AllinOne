import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { PopoveroneComponent } from './popoverone/popoverone.component';


@NgModule({
    declarations:[HeaderComponent,PopoveroneComponent],
    imports:[IonicModule],
    entryComponents:[PopoveroneComponent],
    exports:[HeaderComponent,PopoveroneComponent]
})
export class ComponentsModule{}