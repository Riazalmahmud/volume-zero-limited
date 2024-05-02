import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.scss'],
})
export class NewsDialogComponent {
  show = false;
  checkConfirmPasswordShow = false;
  checkPassword = 'password';
  checkConfirmPassword = 'password';
  createFormGroup!: FormGroup;
  constructor(private fb: FormBuilder, private newService: NewsService, private router: Router,) {
    this.createForm();
  }
  createForm() {
    this.createFormGroup = this.fb.group({
      postAuthName: new FormControl('', [Validators.required]),
      authImageURL: new FormControl('', [Validators.required]),
      postImage: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
    });

    
  }
  get f() {
    return this.createFormGroup.controls;
  }

  loginSubmit() {
    console.log(this.createFormGroup.value);

    if (this.createFormGroup.invalid) {
      for (const control of Object.keys(this.createFormGroup.controls)) {
        this.createFormGroup.controls[control].markAsTouched();
      }
      return;
    }
    this.newService.createNews(this.createFormGroup.value).subscribe({
      next: (res) => {
        console.log(res);

        this.createFormGroup.reset();
     alert(res.message)
      },
      error: (err) => {
        alert('Create Post failed: ' + err.message)
        console.log(err);
      },
    });
    console.log(this.createFormGroup.value);
  }
}
