import { ApiService } from './../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {
    options=['Brand New','Second Hand','Refurbished']
    action:string='Save';
    ProductForm:FormGroup;

  constructor( private formBuilder:FormBuilder,private api:ApiService,private dialogref:MatDialogRef<DialogFormComponent>,@Inject(MAT_DIALOG_DATA) public editeData:any) { }

  ngOnInit(): void {
    
    this.ProductForm = this.formBuilder.group({
      productName:['',Validators.required],
      catagory:['',Validators.required],
      date:['',Validators.required],
      price:['',Validators.required],
      freshness:['',Validators.required]

      
    })
    console.log(this.editeData)
    console.log(this.ProductForm.controls);

    const ed = this.editeData.value

      console.log(ed);
      
      
    

    if(this.editeData){
      this.action='Update'
      this.ProductForm.controls['productName'].setValue(this.editeData.productName)
      this.ProductForm.controls['catagoty'].setValue(this.editeData.catagory)
      this.ProductForm.controls['date'].setValue(this.editeData.date)
      this.ProductForm.controls['freshness'].setValue(this.editeData.freshness)
      this.ProductForm.controls['price'].setValue(this.editeData.price)
      this.ProductForm.controls['comment'].setValue(this.editeData.comment)
    }
  }


  onSubmit(form:FormGroup){
    this.api.postData(form.value).subscribe({next:(response)=>
    {
      alert('Product Is Added SuccesFully')
      
    },error:(error)=>{
      alert('Faild While Adding data')
    }})
    this.ProductForm.reset()
    this.dialogref.close()
  }


  
}
