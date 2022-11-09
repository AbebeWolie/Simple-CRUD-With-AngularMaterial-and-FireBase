import { ApiService } from './services/api.service';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
  constructor(private dialog:MatDialog,private api:ApiService){}
  ngOnInit(): void {
    
   
  }

  

 openDialog(){
  const dialogRef = this.dialog.open(DialogFormComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
 }

//  getAllData(){
//   this.api.getData().subscribe(respose=>{
//     console.log(respose)
//   })
// }




  
}
