import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuService } from '../layout/services/menu.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { NewsService } from 'src/app/core/services/news.service';
import { NewsInterface } from 'src/app/core/models/news.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  newsList : NewsInterface[]=[]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    autoWidth:false,
    navText: ['', ''],
    margin: 10,
    autoplay: true,
    merge: true,
    stagePadding: 350,
    responsive: {
      0: {
        items: 1,
        mergeFit:true
      },
      400: {
        items: 1,
        mergeFit:true
      },
      740: {
        items: 1,
        mergeFit:true
      },
      940: {
        items: 1,
        mergeFit:false
      }
    },

  }
  header: OwlOptions = {

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 1000,
    autoWidth:true,
    autoplay: true,
    stagePadding: 200,
    items: 1,
    responsive: {
      0: {
        items: 1,
        loop:false
      },
      400: {
        items: 1,
        loop:false
      },
      740: {
        items: 1,
        loop:false
      },
      940: {
        items: 1,
        loop:false
      }
    },
  }

  blogCarousel: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoWidth:false,
    margin: 10,
    autoplay: true,
    navSpeed: 1500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
        mergeFit:true
      },
      400: {
        items: 1,
        mergeFit:true
      },
      740: {
        items: 1,
        mergeFit:true
      },
      940: {
        items: 5,
        mergeFit:false
      }
    },
  }
  constructor(private menuService: MenuService, private newsService: NewsService) {}
 
  ngOnInit(): void {
this.getAllNews()
  }
  ngAfterViewInit(): void {

  }

  getAllNews() {
    this.newsService.getNews().subscribe(res => {
      this.newsList = res.data[res.data.length - 1];
      console.log(this.newsList)
    })
  }
  public toggleMobileMenu(): void {
    this.menuService.showMobileMenu = true;
  }
}
