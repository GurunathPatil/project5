import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  userDetails : string;
  formDetails(form){

    this.userDetails = form.value;
    console.log(form.value)
  }
  }


