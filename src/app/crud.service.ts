import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  notes:any = []
  constructor() { }

  get(){
    return this.notes;
  }

  save(title, msg, index=-1){
    if( index !== -1){
      this.notes[index].title = title;
      this.notes[index].message = msg;
    } else {
      this.notes.push({title: title, message:msg})
    }
    return this.notes;
  }

  remove(index){
    if(index !== -1){
      this.notes.splice(index, 1);
    }
    return this.notes;
  }

}
