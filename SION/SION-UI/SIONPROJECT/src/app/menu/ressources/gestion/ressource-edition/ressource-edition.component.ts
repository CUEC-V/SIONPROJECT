import { Component, OnDestroy, OnInit } from '@angular/core';
import { RessourceService } from '../../service/ressource.service';
import { UploadService } from '../../../../core/upload-file.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Ressource } from '../../models/ressource-model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-ressource-edition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ressource-edition.component.html',
  styleUrl: './ressource-edition.component.css'
})
export class RessourceEditionComponent implements OnInit, OnDestroy {
  ressource!: Ressource;
  currentFile?: File;
  message = '';
  fileInfos?: Observable<any>;
  
  constructor(private ressourceService: RessourceService,
   private uploadService: UploadService,
    private router: Router, private activated: ActivatedRoute) { }

  ngOnInit(): void {
    const ressourceKey = this.activated.snapshot.params['id'];
    if (isNaN(ressourceKey)) {
      this.router.navigate(['/ressources/gestion']);
    }

    this.ressourceService.getRessourceById(ressourceKey).subscribe({
      next: ressource => this.ressource = ressource,
      error: err => console.log(err)
    });

  }

  selectFile(event: any): void {
    this.currentFile = event.target.files.item(0);
  }

  fileUpload(): void {
    if (this.currentFile) {
      this.uploadService.fupload(this.currentFile,this.ressource.id).subscribe({
        next: (event: any) => {
          if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.router.navigate(['/ressources/gestion']);
          }
        },
        error: (err: any) => {
          console.log(err);

          if (err.error && err.error.message) {
            this.message = err.error.message;
          } else {
            this.message = 'Impossible de charger ce fichier !';
          }
        },
        complete: () => {
          this.currentFile = undefined;
        },
      });
    }
  }

  ngOnDestroy(): void {
   
  }

}
