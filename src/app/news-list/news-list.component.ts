import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Subject} from "rxjs";
import { News } from 'src/repo/model/News';
import { NewsRepo } from 'src/repo/repo/NewsRepo';
import {DataTableDirective} from "angular-datatables";
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-news-list',
  templateUrl:'./news-list.component.html',
  styleUrls: ['./news-list.component.css']
})


export class NewsListComponent implements OnInit {

  constructor(private  newsRepo: NewsRepo ,  private  route: ActivatedRoute) {
  }

  @Input() code: string
  @Input() month: string
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};

  news: News[];

  ngOnInit() {
    let paramcode = this.route.snapshot.params['code'];
    console.log('------------------BigchartviewComponent------------------------' + paramcode);

    this.newsRepo.getNewsCodesbyWeek(paramcode).subscribe(value1 => {
      console.log(value1);
      this.news = value1
      // @ts-ignore
      this.dtTrigger.next()

    })
    this.dtOptions = {
      pageLength: 50,
      autoWidth: true,
      pagingType: 'full_numbers',
     // order: [[2, 'desc']],
      dom: 'Bfrtip',
      buttons: [
        'columnsToggle',
        'colvis',
      ]

    }

  }

}
