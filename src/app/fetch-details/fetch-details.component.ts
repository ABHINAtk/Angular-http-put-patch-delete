import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-fetch-details',
  templateUrl: './fetch-details.component.html',
  styleUrls: ['./fetch-details.component.css']
})
export class FetchDetailsComponent implements OnInit {
  users: any[] = [];
  selectedUserId: number | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        console.error('Error fetching users:', error);
        
      }
    );
  }

  onSelectUser(userId: number): void {
    this.selectedUserId = userId;
  }

  onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      response => {
        console.log('User deleted successfully:', response);
        
        this.users = this.users.filter(user => user.id !== userId);
        this.selectedUserId = null;
      },
      error => {
        console.error('Error deleting user:', error);
        
      }
    );
  }

  onUpdateUser(userId: number, updatedUser: any): void {
    this.userService.updateUser(userId, updatedUser).subscribe(
      response => {
        console.log('User updated successfully:', response);
        
        const index = this.users.findIndex(user => user.id === userId);
        if (index !== -1) {
          this.users[index] = response;
        }
        this.selectedUserId = null;
      },
      error => {
        console.error('Error updating user:', error);
        
      }
    );
  }
  patchUserData(userId: number) {
    const patchData = { name: 'Updated Name' }; 
    this.userService.patchUser(userId, patchData).subscribe(response => {
      console.log('User patched successfully:', response);
    });
  }
}

