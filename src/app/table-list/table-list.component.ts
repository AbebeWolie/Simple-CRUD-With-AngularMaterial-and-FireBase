import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogFormComponent } from './../dialog-form/dialog-form.component';
import { ApiService } from './../services/api.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  

  constructor(private api:ApiService,private dialog:MatDialog) { }

  displayedColumns: string[] = ['productName', 'catagory','date', 'freshness', 'price','action'];
  dataSource: MatTableDataSource<any>;


  ngOnInit(): void {
    this.getAllData()
  }

  editProduct(row:any){
    this.dialog.open(DialogFormComponent,{
      data:row,
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllData();
      }
    })
  }

  

  getAllData(){
    this.api.getData().subscribe({next:(res)=>{
      console.log(res)

      const ProductList = []

      Object.entries(res).map(x => {
        const [key, value] = x;
        value['id'] = key
        ProductList.push(value)
      })

      this.dataSource=new MatTableDataSource(ProductList);
      
    },error:(err)=>{
      console.log('Error Occured')
    }})
      
  }
    

  updateData(){
    this.api.putData(this.dataSource,).subscribe(res=>{
      alert('Product updated Successfuly')
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  deletProduct(id:any){
    
    this.api.delete(id).subscribe()
  }


  @Input() income=''
  @Output() outData= new EventEmitter<any>()

 
}
