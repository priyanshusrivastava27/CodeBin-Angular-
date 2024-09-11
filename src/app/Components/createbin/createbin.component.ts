import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-createbin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './createbin.component.html',
  styleUrl: './createbin.component.css'
})
export class CreatebinComponent {
  title = new FormControl("", [
    Validators.required,
    
  ])

  Code = new FormControl("", [
    Validators.required,
    
  ])

  BinForm = new FormGroup( {
    title:this.title,
    Code:this.Code

  })
  save(){
    console.log(this.BinForm.value)
  }

}
