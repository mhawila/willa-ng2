import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'user-config',
  templateUrl: 'user-config.component.html'
})
export class UserConfigComponent implements OnInit{
  private _openmrsServer: string;
  ngOnInit() {
    let cachedUrl = window.localStorage.getItem('openmrsServer')
    if(cachedUrl) {
      this._openmrsServer = cachedUrl;
    }  
  }
  
  get openmrsServer() {
    return this._openmrsServer;
  }
  
  set openmrsServer(value) {
    window.localStorage.setItem('openmrsServer', value);
    this._openmrsServer = value;
  }
}
