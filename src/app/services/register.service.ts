import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly registerUrl = 'https://localhost:7033/api';

  constructor(private http:HttpClient) { }

  getRegisteredList(): Observable<any[]>{
    return this.http.get<any>(this.registerUrl + '/Registers');
  }

  addRegister(data:any){
    return this.http.post(this.registerUrl + '/Registers', data)
  }

  // updateRegister(id:number|string, data:any){
  // return this.http.put(this.registerUrl + `/Registers/${id}`, data)
  // }

//  deleteRegister(id:number|string){
//return this.http.delete(this.registerUrl + `/Register/${id}`)
//}


}
