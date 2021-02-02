import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'
import { CrudService } from './../crud.service'
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  providers: [CrudService]
})
export class FormComponent implements OnInit {

  notesForm: FormGroup;
  isSubmitted = false;
  notesList:any = [];

  constructor(private formBuilder: FormBuilder, private crud: CrudService) { }

  ngOnInit(): void {

    this.notesList = this.crud.get();
    this.notesForm = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required]
    })
  }

  get formControls() { return this.notesForm.controls; }

  onSubmit(form) {
    this.isSubmitted = false;
    if (this.notesForm.valid) {
     this.notesList =  this.crud.save(this.notesForm.value.title, this.notesForm.value.body)
     form.resetForm();
    }
  }

  remove(index){
    this.notesList = this.crud.remove(index);
  }


  logout(){
    
  }
}
