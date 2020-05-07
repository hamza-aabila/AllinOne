import { Component, OnInit } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-database',
  templateUrl: './database.page.html',
  styleUrls: ['./database.page.scss'],
})
export class DatabasePage implements OnInit {
  capturedSnapURL:string;
  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  databaseObj:SQLiteObject;
  name_model:string="";
  row_data:any=[];
  readonly database_name:string = "licda_datatable.db";
  readonly table_name:string = "licdatable";

  constructor(private platform:Platform, private sqlite:SQLite, private camera:Camera) {
    this.platform.ready().then(() => {
      this.createDB();
    }).catch(error=>{
      console.log(error);
    })
  }

  ngOnInit() {
  }

  createDB(){
    this.sqlite.create({
      name:this.database_name,
      location:'default'
    }).then((db:SQLiteObject)=>{
      this.databaseObj=db;
      alert('licda_datatable Database Created');
    }).catch(e=>{
      alert('error'+JSON.stringify(e));
    });
  }

  createTable() {
    this.databaseObj.executeSql('CREATE TABLE IF NOT EXISTS ' +
    this.table_name + ' (pid INTEGER PRIMARY KEY, Name varchar(255), Image varchar(255))',
    []).then(() => {
    alert('Table Created!');
    }).catch(e => { alert("error " + JSON.stringify(e));
    });
  }

  insertRow() {
    if (!this.name_model.length) {
    alert("Enter Name");
    return;
    }
    this.databaseObj.executeSql(`INSERT INTO ${this.table_name} (Name, Image) VALUES ('${this.name_model}', '${this.capturedSnapURL}')`, [])
    .then(() => {
    alert('Row Inserted!');
    this.getRows();
    }) .catch(e => { alert("error " + JSON.stringify(e)) });
  }

  getRows() {
    this.databaseObj.executeSql("SELECT * FROM " + this.table_name, [])
    .then((res) => {
    this.row_data = [];
    if (res.rows.length > 0) {
    for (var i = 0; i < res.rows.length; i++) {
    this.row_data.push(res.rows.item(i));
    }
    }
    })
    .catch(e => {
    alert("error " + JSON.stringify(e)) });
  }
  deleteRow(item){ 
    this.databaseObj.executeSql(`DELETE FROM ${this.table_name} WHERE pid = ${item.pid}`, [])
    .then((res) => { alert("Row Deleted!"); this.getRows(); })
    .catch(e => { alert("error " + JSON.stringify(e)) }); 
  }  

  CapturePhoto() {
    this.camera.getPicture(this.cameraOptions).then((imageData) => {
    let base64Image = 'data:image/jpeg;base64,' + imageData;
    this.capturedSnapURL = base64Image;
    }, (err) => {
    console.log(err);
    // Handle error
    });
  }

}

