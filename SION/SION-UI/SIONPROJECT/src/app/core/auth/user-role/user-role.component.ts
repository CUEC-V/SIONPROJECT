import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRole } from '../../models/userRole';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.css'
})
export class UserRoleComponent implements OnInit {
  roleForm!: FormGroup;
  isSuccess: boolean = false;

  items:any[]=[];
  roles:any[]=[];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.roleForm = new FormGroup({
      userId: new FormControl('', [Validators.required, Validators.min(3)]),
      roleId: new FormControl('', [Validators.required, Validators.min(3)])
    });

    this.authService.userRoles().subscribe({
      next:role => {
        this.items = role.users;
        this.roles = role.roles;
      },
       error: err=> console.log(err)
    })
  }

    onSubmit() {
      var value = this.roleForm.value as UserRole;
      this.authService.AddUserRole(value).subscribe({
        next: role => {
          if (role && Boolean(role)) {
            this.isSuccess = true;
          }
        },
        error: err => console.log(err)
      })
    }
}
