import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SionRole } from '../../models/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit {
  items: any[] = [{ key: 'P', value: 'Pasteur' }, { key: 'D', value: 'Diacre' }, { key: 'O', value: 'Houssier' }, { key: 'B', value: 'Brébis' }];

  roleForm!: FormGroup;
  isSuccess: boolean = false;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.roleForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.min(3)]),
      normalizedName: new FormControl('')
    })
  }

  onSubmit() {
    var value = this.roleForm.value as SionRole;
    this.authService.ajoutRole(value).subscribe({
      next: role => {
        if (role && Boolean(role)) {
          this.isSuccess = true;
        }
      },
      error: err => console.log(err)
    })
  }
}
