import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

@Component({
  moduleId: module.id,
  selector: 'user-config',
  templateUrl: 'user-config.component.html'
})
export class UserConfigComponent implements OnInit{
  @ViewChild('addUrlModal') 
  urlModal: ModalComponent;
  
  private _openmrsServer: string;
  serverUrls = [
    'http://localhost:8080/openmrs',
    'https://test2.ampath.or.ke:8443/amrs',
    'https://amrs.ampath.or.ke:8443/amrs'
  ];
  
  ngOnInit() {
    let cachedUrls = window.localStorage.getItem('openmrsServerList');
    if(cachedUrls) {
      this.serverUrls = JSON.parse(cachedUrls);
    }
    else {
      window.localStorage.setItem('openmrsServerList', 
        JSON.stringify(this.serverUrls));
    }
    
    let cachedUrl = window.localStorage.getItem('openmrsServer');
    if(cachedUrl) {
      this._openmrsServer = cachedUrl;
    }
    else {
      this._openmrsServer = this.serverUrls[0];
    }  
  }
  
  get openmrsServer() {
    return this._openmrsServer;
  }
  
  set openmrsServer(value: string) {
    window.localStorage.setItem('openmrsServer', value);
    this._openmrsServer = value;
  }
  
  saveUrlConfig(value:string) {
    console.log(value);
    this.openmrsServer = value;
  }
  
  addNewURL() {
    this.urlModal.open();
  }
  
  saveNewURL(url: string) {
    this.serverUrls.push(url);
    window.localStorage.setItem('openmrsServerList', 
      JSON.stringify(this.serverUrls));
    this.saveUrlConfig(url);
    this.urlModal.close();
  }
}
