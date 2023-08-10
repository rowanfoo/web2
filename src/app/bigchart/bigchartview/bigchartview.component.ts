import {Component, ElementRef, Input, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {interval, Subscription } from 'rxjs';
import {BigChart} from "../../../repo/model/BigChart";
import {BigChartRepo} from "../../../repo/repo/BigChartRepo";

@Component({
  selector: 'app-bigchartview',
  templateUrl: './bigchartview.component.html',
  styleUrls: ['./bigchartview.component.css']
})
// @Directive({
//   selector: '[appHighlight]'
// })

export class BigchartviewComponent implements OnInit , OnDestroy{

  constructor(private bigChartRepo: BigChartRepo, private  route: ActivatedRoute, public ele: ElementRef) {
  }
  // constructor(private bigChartRepo: BigChartRepo, public ele: ElementRef) {
  // }

// this is to trigger a refresh in the component when we change the property codes in the component
//   ngOnChanges(changes: SimpleChanges): void {
//     console.log(changes.codes.currentValue)
//   }

  // @ts-ignore
  bigcharts: BigChart[]
 // code: string
  width: string
  count = 0
  count1 = 0
  year: number
  buttontext: string
  buttontext2: string
  load = true;
  @Input() codes: string;
  @Input() code: string
  subscription: Subscription;
  timer = 3
  size = 0


  ngOnDestroy(): void {
    console.log('-----On Destory----')
    this.subscription.unsubscribe()
  }

  ngOnInit() {
    console.log('------------------BigchartviewComponent------------------------' + this.code);
//    console.log('------------------BigchartviewComponent------------------------' + this.route.snapshot.params['code']);

   let paramcode = this.route.snapshot.params['code'];
    let parammode = this.route.snapshot.params['mode'];


    this.size = paramcode.split(",").length
    this.size = this.size + (this.size * 0.3)
    console.log('------------------BigchartviewComponent------------------------' + paramcode);
    console.log('------------------BigchartviewComponent-----------------size -------' +  this.size );


let timer = interval(3000)
this.subscription = timer.subscribe(value => {
    console.log(value)
    this.timer++
  }
)

    if (parammode === "day"){
  this.bigChartRepo.getimage(paramcode).subscribe(value => {
    console.log(value);
    this.load = false;
    this.bigcharts = value
    this.subscription.unsubscribe()
    this.load = false
  })
}else if (parammode === "week"){
  this.bigChartRepo.getweekimages(paramcode).subscribe(value => {
    console.log(value);
    this.load = false;
    this.bigcharts = value
    this.subscription.unsubscribe()
    this.load = false
  })
}else if (parammode === "dual"){
  this.bigChartRepo.getdualimages(paramcode).subscribe(value => {
    console.log(value);
    this.load = false;
    this.bigcharts = value
    this.subscription.unsubscribe()
    this.load = false
  })
}

    this.width = '800;'
    this.buttontext = 'summary'
    this.buttontext2 = 'random'

  }

  goClick() {
    // this.width = '200%;'
    // this.count++
    // this.buttontext = 'large'

    // if (this.count == 0) {
    //   console.log(' widht 100')
    //   this.width = '200%;'
    //   this.count++
    //   this.buttontext = 'large'
    // } else if (this.count == 1) {
    //   console.log(' ok ORIGINAL')
    //   this.width = '2000px;'
    //   this.count++
    //   this.buttontext = 'original'
    // } else {
    //   console.log('summ')
    //
    //   this.count = 0
    //   this.width = '1000px;'
    //   this.buttontext = 'summary'
    // }

    if (this.count == 0) {
      console.log(' widht 100')
      this.width = '600px;'
      this.count++
      this.buttontext = 'large'
    } else if (this.count == 1) {
      console.log(' ok ORIGINAL')
      this.width = '2000px;'
      this.count++
      this.buttontext = 'original'
    } else {
      console.log('summ')

      this.count = 0
      this.width = '800px;'
      this.buttontext = 'summary'
    }


  }


  goClick2() {
    this.load = true;
    if (this.count1 == 0) {
      this.bigChartRepo.getimagesrandomTwoyear(this.code).subscribe(value => {
        console.log(value);
        this.load = false;
        this.bigcharts = value
      })
      this.count1++
      this.buttontext2 = 'chart'
    } else {
      this.bigChartRepo.getimages(this.code, this.year).subscribe(value => {
        this.load = false;
        console.log(value);
        this.bigcharts = value
      })
      this.count1 = 0
      this.buttontext2 = 'random'
    }
  }
}
