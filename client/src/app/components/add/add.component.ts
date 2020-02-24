import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  faPlus = faPlus;
  showForm: boolean;
  @Output() addEvt = new EventEmitter();
  constructor() {
    this.showForm = true;
  }

  ngOnInit(): void {
  }

  toggleAptDisplay() {
    this.showForm = !this.showForm;
  }

  handleAdd(formInfo: any) {
    console.log(formInfo);
    const tempItem: object = {
      petName: formInfo.petName,
      ownerName: formInfo.ownerName,
      aptDate: formInfo.aptDate + ' ' + formInfo.aptTime,
      aptNotes: formInfo.aptNotes,
    };
    this.addEvt.emit(tempItem);
    this.showForm = !this.showForm;
  }
}
