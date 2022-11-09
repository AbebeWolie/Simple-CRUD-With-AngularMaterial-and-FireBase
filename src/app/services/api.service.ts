import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postData(post:any){
    return this.http.post<any>('https://jsondemo-3499b-default-rtdb.firebaseio.com/productList.json',post);
  }

  getData(){
    return this.http.get<any>('https://jsondemo-3499b-default-rtdb.firebaseio.com/productList.json');
  }

  delete(id:any){
    return this.http.delete(`https://jsondemo-3499b-default-rtdb.firebaseio.com/productList/${id}.json`)
  }

  putData(data:any){
    return this.http.put<any>('https://jsondemo-3499b-default-rtdb.firebaseio.com/productList.json',data)
  }
}
