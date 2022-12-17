import { Injectable } from "@angular/core"
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable()
export class UserDetailFormService{
    value: string = 'Narendra';

    constructor(private httpservice : HttpClient){}

    getData() : Observable<object>{

        let url = '/assets/data.json'
        return this.httpservice.get(url);
    }

    getValue(){
        return this.value;
      }
      
      setValue(val : string){
        this.value = val;
      }
}