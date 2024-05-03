
import { NewsService } from 'src/app/core/services/news.service';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
// import { ToastrService } from 'ngx-toastr';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { NewsDialogComponent } from 'src/app/shared/components/news-dialog/news-dialog.component';
import { NewsInterface } from 'src/app/core/models/news.model';
import { ToastrService } from 'ngx-toastr';


export interface UserData {
	postAuthName: string;
	authImageURL: string;
	postImage: string;
	description: string;
	title: string;
	action: string;
}


@Component({
  selector: 'app-news-post',
  templateUrl: './news-post.component.html',
  styleUrls: ['./news-post.component.scss']
})
export class NewsPostComponent {
  displayedColumns: string[] = [ 'postAuthName', 'authImageURL', 'postImage', 'description', 'title', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort
 
  constructor(private fb : FormBuilder, private newService: NewsService,  private router: Router, private dialog: MatDialog, private toster : ToastrService) {



  
}
  ngOnInit(): void {
this.getAllNews()

  }

  editData(data: NewsInterface) {
    const dialog = this.dialog.open(NewsDialogComponent, {
  width: '500px',
      data: {
    type: 2,
    data: data,
  }
    })
    dialog.afterClosed().subscribe(res => {
      if (res === 'success') {
        this.getAllNews()
      }
    })
  }

  deleteNews(id: string) {
    this.newService.deleteNews(id).subscribe({
      next: (res) => {
        this.toster.success('success', res.message)
        this.getAllNews()
      },
      error: (err) => {
  
        this.toster.error('success', err.message)

      },
    });
  }
  getAllNews() {
    this.newService.getNews().subscribe({
      next: (res) => {
        this.dataSource = res.data

       }
  })
}
  addNews() {
  const dialog  =   this.dialog.open(NewsDialogComponent, {
      width: '500px',
    data: {
      type: 1,
      },

  })
    
  dialog.afterClosed().subscribe(res => {
    if (res === 'success') {
      this.getAllNews()
    }
  })
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
 
}

