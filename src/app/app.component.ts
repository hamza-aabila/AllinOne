import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public navigate=[
    {
      title:'Home',
      url:'/home',
      icon:'home'
    },
    {
      title:'Appel',
      url:'/appel',
      icon:'call'
    },
    {
      title:'Database',
      url:'/database',
      icon:'server'
    },
    {
      title:'Currency Convert',
      url:'/currency',
      icon:'logo-euro'
    },
    {
      title:'AdMob',
      url:'/admob',
      icon:'cash'
    },
    {
      title:'Camera',
      url:'/camera',
      icon:'camera'
    },
    {
      title:'Qr Code',
      url:'/qrcode',
      icon:'qr-code'
    },
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
