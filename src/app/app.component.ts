import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogViewComponent } from './components/dialog-view/dialog-view.component';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  person: Person = new Person(0, "")

  persons: Person[] = []

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogViewComponent, {
      data: {...this.person},
    });

    dialogRef.afterClosed().subscribe((person: Person) => {
      this.persons.push(person);
    });
  }
}
