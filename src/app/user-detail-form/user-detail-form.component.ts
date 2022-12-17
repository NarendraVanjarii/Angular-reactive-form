import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDetailFormService } from './user-details-form.services';
@Component({
  selector: 'app-user-detail-form',
  templateUrl: './user-detail-form.component.html',
  styleUrls: ['./user-detail-form.component.css'],
  providers: [UserDetailFormService]
})
export class UserDetailFormComponent implements OnInit {
  data : any;
  

formUsernm = new FormControl('');
  constructor(private srv : UserDetailFormService) { 
    
  }
  
  ngOnInit(): void {
    console.log('value returned from json :', this.srv.getValue());
    this.formUsernm.patchValue(this.srv.getValue());
  }


  onSubmit(data : any){
    console.log('data: ', data);
    this.srv.setValue(data);
    this.data = data;
  }

}
