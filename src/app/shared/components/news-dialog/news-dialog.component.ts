import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/core/services/news.service';

import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-news-dialog',
  templateUrl: './news-dialog.component.html',
  styleUrls: ['./news-dialog.component.scss'],
})
export class NewsDialogComponent implements OnInit{
  show = false;
  checkConfirmPasswordShow = false;
  checkPassword = 'password';
  checkConfirmPassword = 'password';
  createFormGroup!: FormGroup;
  title = 'Add'
  constructor(private fb: FormBuilder, private newService: NewsService, private router: Router, @Inject(MAT_DIALOG_DATA) public data: any, private toster : ToastrService,    public dialogRef: MatDialogRef<NewsDialogComponent>,) {
    this.createForm();
  }
  ngOnInit(): void {


    if (this.data.type === 2) {
      this.title = 'Edit'
      this.createFormGroup.get('postAuthName')?.setValue(this.data.data.postAuthName)
      this.createFormGroup.get('authImageURL')?.setValue(this.data.data.authImageURL)
      this.createFormGroup.get('postImage')?.setValue(this.data.data.postImage)
      this.createFormGroup.get('description')?.setValue(this.data.data.description)
      this.createFormGroup.get('title')?.setValue(this.data.data.title)
     
    }
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


    if (this.createFormGroup.invalid) {
      for (const control of Object.keys(this.createFormGroup.controls)) {
        this.createFormGroup.controls[control].markAsTouched();
      }
      return;
    }
if (this.data.type === 2) {
  this.createFormGroup.addControl('_id', this.fb.control('', [Validators.required]));
  this.createFormGroup.get('_id')?.setValue(this.data.data?._id);
  this.newService.updateNews(this.data.data._id, this.createFormGroup.value).subscribe({
    next: (res) => {

      this.createFormGroup.reset();
      this.toster.success('success', res.message)
      this.dialogRef.close("success");
    },
    error: (err) => {

      this.toster.error('success',err.message )
    },
  });
} else {
  this.newService.createNews(this.createFormGroup.value).subscribe({
    next: (res) => {
      this.createFormGroup.reset();
      this.toster.success('success', res.message)
      this.dialogRef.close("success");
    },
    error: (err) => {
      this.toster.error('success',err.message )

    },
  });
}
    


  }
}
