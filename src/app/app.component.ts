import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isEmail: boolean = false;
  radioVal = { value: '' };
  constructor(private dialog: MatDialog) {}
  recentNodeClicked: any;
  flowTree = [{}];
  openDialog() {
    this.dialog.open(DialogComponent);
  }
  topEmployee: any = {
    id: 1,
    name: '+',
    imageUrl: 'https://images.pexels.com/photos/13973602/pexels-photo-13973602.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    subordinates: [
      // {
      //   // name: 'East Coast Group',
      //   // subordinates: [
      //   //   {
      //   //     name: 'Eastern Foreign',
      //   //   },
      //   //   {
      //   //     name: 'Eastern Domestic',
      //   //     subordinates: [{ name: 'Cleveland Chevy' }],
      //   //   },
      //   // ],
      // },
      // {
      //   name: 'West Coast Group',
      //   subordinates: [
      //     {
      //       name: 'Western Foreign',
      //     },
      //   ],
      // },
    ],
  };
  isClicked(topEmployee: any) {
    console.log(topEmployee);
    this.recentNodeClicked = topEmployee;
    // this.openDialog();
  }
  sendEmail(email: string, message: string) {
    let previousNode = this.recentNodeClicked;
    console.log('I am active.');
    console.log('Email: ' + email + ' Message: ' + message);
    //append and sync the clicked node with the data from modal
    let recentData = {
      id: previousNode.id,
      email: email,
      message: message,
      
    };
    this.flowTree.push(recentData);
    console.log(recentData);

    //track the previous id and add subordinate to it.
    previousNode.subordinates = [
      ...previousNode.subordinates,
      {
        id: 2,
        name: 'email',
        subordinates: [],
      },
    ];
    // this.topEmployee.subordinates = [...this.topEmployee.subordinates,previousNode.subordinates];
    // this.topEmployee.subordinates = previousNode.subordinates;
  }
  whichRadioClicked(value: string) {
    if (value == 'email') {
      //email
      this.isEmail = true;
      this.recentNodeClicked.subordinates.push({
        id: this.recentNodeClicked.id + 1,
        name: value,
        subordinates: [],
      });
    } else {
      //sms
      this.isEmail = false;
    }
  }
}
