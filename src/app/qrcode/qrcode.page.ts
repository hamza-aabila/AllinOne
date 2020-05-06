import { Component } from '@angular/core';
import { ZBar, ZBarOptions } from '@ionic-native/zbar/ngx';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.page.html',
  styleUrls: ['./qrcode.page.scss'],
})
export class QrcodePage {

  zbarOptions:any;
  scannedResult:any;
 
  constructor(private zbar: ZBar) {
    this.zbarOptions = {
      flash: 'off',
      drawSight: false
    }
  }
 
  scanCode(){
    this.zbar.scan(this.zbarOptions)
   .then(result => {
      console.log(result); // Scanned code
      this.scannedResult = result;
   })
   .catch(error => {
      alert(error); // Error message
   });
  }

}
