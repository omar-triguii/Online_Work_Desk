import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-find-user',
  templateUrl: './find-user.component.html',
  styleUrls: ['./find-user.component.css'],
})
export class FindUserComponent implements OnInit {
  users: User[] = [];
  searchKey: string = '';

  constructor(private userService: UserService) { }
  searchUsers(key: string) {
    console.log(key);
    const results: User[] = [];
    for (const user of this.users) {
      if (
        user.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        user.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        user.email.toLowerCase().indexOf(key.toLowerCase()) !== -1 ||
        user.phoneNumber.toLowerCase().indexOf(key.toLowerCase()) !== -1
      )
        results.push(user);
    }
    this.users = results;
    if (!key) {
      this.getUsers();
    }
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userService.getAllUsers().subscribe({
      next: (response: User[]) => {
        this.users = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      },
    });
  }
}
