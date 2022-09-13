import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  readonly registerUrl = 'https://localhost:7033/api';

  constructor(private http:HttpClient) { }
// Register services
  getRegisteredList(): Observable<any[]>{
    return this.http.get<any>(this.registerUrl + '/Registers');
  }

  getRegisteredById(id:number){
    return this.http.get(this.registerUrl + `/Registers/${id}`);
  }

  addRegister(data:any){
    return this.http.post(this.registerUrl + '/Registers', data)
  }

  updateRegister(id:number|string, data:any){
    return this.http.put(this.registerUrl + `/Registers/${id}`, data)
  }

 deleteRegister(id:number|string){
 return this.http.delete(this.registerUrl + `/Registers/${id}`)
 }
// Users services
getUsersList(): Observable<any[]>{
  return this.http.get<any>(this.registerUrl + '/Users');
}

getUserById(id:number){
  return this.http.get(this.registerUrl + `/Users/${id}`);
}

postUser(data:any){
  return this.http.post(this.registerUrl + '/Users', data)
}

updateUser(id:number|string, data:any){
  return this.http.put(this.registerUrl + `/Users/${id}`, data)
}

deleteUser(id:number|string){
  return this.http.delete(this.registerUrl + `/Users/${id}`)
  }

  getRollList(): Observable<any[]>{
    return this.http.get<any>(this.registerUrl + '/Rolls');
  }

  getRollById(id:number){
    return this.http.get(this.registerUrl + `/Rolls/${id}`);
  }
  
  postRoll(data:any){
    return this.http.post(this.registerUrl + '/Rolls', data)
  }
  
  updateRoll(id:number|string, data:any){
    return this.http.put(this.registerUrl + `/Rollss/${id}`, data)
  }
  
  deleteRoll(id:number|string){
    return this.http.delete(this.registerUrl + `/Rolls/${id}`)
    }
  
}
