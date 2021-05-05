import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Task';
  public EmpName: string;
  public EmpNo: number;
  public  arr = [];

  // tslint:disable-next-line:typedef
  submitData(){
    const val = {
      name: this.EmpName,
      no: this.EmpNo
    };

    // this.EmpName = '';
    // this.EmpNo = null;
    this.arr.push(val);
  }


  // tslint:disable-next-line:typedef
  deleteData(i){
    this.arr.splice(i , 1);
  }

}

