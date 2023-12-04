import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() userId: number | undefined;  // Initialize userId as a number or undefined
  user: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (this.userId !== undefined) {
      this.userService.getUserById(this.userId).subscribe(
        user => {
          this.user = user;
        },
        error => {
          console.error('Error fetching user details:', error);
          // Handle error appropriately
        }
      );
    }
  }
}


