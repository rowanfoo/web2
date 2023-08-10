import { Component, OnInit, ViewChild } from '@angular/core';

import {Subject} from "rxjs";
import {CategoryRepo} from "../../repo/repo/CategoryRepo";
import {DataTableDirective} from "angular-datatables";
import { Router } from '@angular/router';
@Component({
  selector: 'app-hello-world-component',
  templateUrl: './hello-world-component.component.html',
  styleUrls: ['./hello-world-component.component.css']
})
export class HelloWorldComponentComponent implements OnInit {
  constructor(private categoryRepo: CategoryRepo , private route: Router) {
  }
  //this.route.navigate(['bigchart/' + data.value + '/5']);

  // @ViewChild(DataTableDirective, {static: false})
  // datatableElement: any = DataTableDirective;

  dtOptions: any = {};
  dtOptions1: any = {};
  dtOptions2: any = {};
  dtTrigger: Subject<any> = new Subject();
  dtTrigger1: Subject<any> = new Subject();
  dtTrigger2: Subject<any> = new Subject();
  dtTrigger3: Subject<any> = new Subject();
  dtTrigger4: Subject<any> = new Subject();
  dtTrigger5: Subject<any> = new Subject();
  dtTrigger6: Subject<any> = new Subject();
  dtTrigger7: Subject<any> = new Subject();
  dtTrigger8: Subject<any> = new Subject();
  dtTrigger9: Subject<any> = new Subject();
  dtTrigger10: Subject<any> = new Subject();
  dtTrigger11: Subject<any> = new Subject();
  dtTrigger12: Subject<any> = new Subject();



  // @ts-ignore
  data;
// @ts-ignore
  mining;
  copper;
  nickel;
  uranium;
  coal;
  lithium;
  graphite;
  tungsten;
  vanadium
  wishlist;
  portfolio;
  arr_names:any [] = new Array(1)
  graphitecode:string
  goldcode=""
  miningcode=""
  wishlistcode="";
  portfoliocode="";
  tungstencode="";
  lithiumcode="";
  coalcode=""
  uraniumcode=""
  nickelcode=""
  coppercode=""
  vanadiumcode=""
  ngOnInit(): void {
    console.log('-------------------------CategoryListComponent-----INIT-----------')


    this.dtOptions = {
      pageLength: 30,
      retrieve: true,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[2, 'desc']],
      dom: 'Bfrtip',
      buttons: [
        'columnsToggle',
        'colvis',
      ]
    }

    this.categoryRepo.getCategoryStock('subcategory', 'Copper').subscribe(value => {
      this.copper = value
      console.log(value.length)
      // console.log(value)
      // @ts-ignore
     // this.dtTrigger.next()
      // @ts-ignore
      //  this.dtTrigger.next()
      this.dtTrigger3.next()

      let zebra=""
      value.forEach(function (xx) {
        // @ts-ignore
        zebra = zebra + xx.code + ","
      });
      console.log("xxxx-----ZEBRA -"+ zebra   +"===="  )
      this.coppercode = zebra.substring(0 , zebra.lastIndexOf(",") )
      console.log("xxxx-----coppercode-"+ this.coppercode   +"===="  )

    })



    this.categoryRepo.getCategoryStock('subcategory', 'Nickel').subscribe(value => {
      this.nickel = value
      console.log(value.length)
      // console.log(value)
      // @ts-ignore
      // this.dtTrigger.next()
      // @ts-ignore
      //  this.dtTrigger.next()
      this.dtTrigger4.next()


      let zebra=""
      value.forEach(function (xx) {
        // @ts-ignore
        zebra = zebra + xx.code + ","
      });
      console.log("xxxx-----ZEBRA -"+ zebra   +"===="  )
      this.nickelcode = zebra.substring(0 , zebra.lastIndexOf(",") )
      console.log("xxxx-----nickelcode-"+ this.nickelcode   +"===="  )

    })

    this.categoryRepo.getCategoryStock('subcategory', 'Uranium').subscribe(value => {
      this.uranium = value
      console.log(value.length)
      // console.log(value)
      // @ts-ignore
      // this.dtTrigger.next()
      // @ts-ignore
      //  this.dtTrigger.next()
      this.dtTrigger5.next()

      let zebra=""
      value.forEach(function (xx) {
        // @ts-ignore
        zebra = zebra + xx.code + ","
      });
      console.log("xxxx-----ZEBRA -"+ zebra   +"===="  )
      this.uraniumcode = zebra.substring(0 , zebra.lastIndexOf(",") )
      console.log("xxxx-----uraniumcode-"+ this.uraniumcode   +"===="  )

    })

    this.categoryRepo.getCategoryStock('subcategory', 'Coal').subscribe(value => {
      this.coal = value
      console.log(value.length)
      // console.log(value)
      // @ts-ignore
      // this.dtTrigger.next()
      // @ts-ignore
      //  this.dtTrigger.next()
      this.dtTrigger6.next()
      let zebra=""
      value.forEach(function (xx) {
        // @ts-ignore
        zebra = zebra + xx.code + ","
      });
      console.log("xxxx-----ZEBRA -"+ zebra   +"===="  )
      this.coalcode = zebra.substring(0 , zebra.lastIndexOf(",") )
      console.log("xxxx-----coalcode-"+ this.coalcode   +"===="  )


    })

    this.categoryRepo.getCategoryStock('subcategory', 'Lithium').subscribe(value => {
      this.lithium = value
      console.log(value.length)
      // console.log(value)
      // @ts-ignore
      // this.dtTrigger.next()
      // @ts-ignore
      //  this.dtTrigger.next()
      this.dtTrigger7.next()

      let zebra=""
      value.forEach(function (xx) {
        // @ts-ignore
        zebra = zebra + xx.code + ","
      });
      console.log("xxxx-----ZEBRA -"+ zebra   +"===="  )
      this.lithiumcode = zebra.substring(0 , zebra.lastIndexOf(",") )
      console.log("xxxx-----lithiumcode-"+ this.lithiumcode   +"===="  )


    })
    // @ts-ignore
    this.dtOptions = {
      pageLength: 30,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[2, 'desc']]
    }


    // @ts-ignore
    this.dtOptions1 = {
      pageLength: 30,
      autoWidth: true,
      pagingType: 'full_numbers',
      order: [[2, 'desc']]
    }
    // // @ts-ignore
    // this.dtOptions2 = {
    //   pageLength: 30,
    //   autoWidth: true,
    //   pagingType: 'full_numbers',
    //   order: [[2, 'desc']]
    // }
    //


    this.categoryRepo.getMarketCap1B('Mining').subscribe(value => {
      this.mining = value
      console.log(value.length)
     // console.log(value)
      // @ts-ignore
      this.dtTrigger2.next()

      let zebra=""
      console.log("xxxx-----miningcode-"+ this.miningcode   +"===="  )

      value.forEach(function (xx) {
        // @ts-ignore
        console.log("xxxx-"+xx.code  +"===="  )
        // @ts-ignore
        //  console.log("xxxx1-"+this.graphitecode   )
        // @ts-ignore
//        zebra = + xx.code + ","
        zebra = zebra + xx.code + ","
        //this.graphitecode = this.graphitecode + xx.code +","
        // console.log("xxxx-----BRA -"+ this.graphitecode   +"===="  )
      });
      console.log("xxxx-----ZEBRA -"+ zebra   +"===="  )
      this.miningcode = zebra.substring(0 , zebra.lastIndexOf(",") )
//      this.graphitecode = this.graphitecode.substring(0 , this.graphitecode.lastIndexOf(",") - 1)
      console.log("xxxx-----goldCODE-"+ this.miningcode   +"===="  )


    })



    this.arr_names[0] = this.mining
    // this.arr_names[0] = this.data

    this.categoryRepo.getCategoryStock('subcategory', 'Gold').subscribe(value => {
      this.data = value
      // this.data.forEach(function (value) {
      //   console.log(value.code +":::"+   value.news.news.length);
      // });




      //    this.data =value.filter( (element, index, array)=> {
        // @ts-ignore
      //  console.log(index)
//        console.log(array[3])
      //  console.log(element.marketcap)
        // @ts-ignore
    //    return element.marketcap > 800
     // } )

      //console.log(value.length)

      // this.data.forEach((xx)=>{
      //   console.log("xxxx---"+xx.marketcap+"===="  )
      // })
      // console.log(value)
      // @ts-ignore

     // @ts-ignore
    //  this.dtTrigger.next()

      let zebra=""
      console.log("xxxx-----goldCODE-"+ this.goldcode   +"===="  )

      value.forEach(function (xx) {
        // @ts-ignore
        console.log("xxxx-"+xx.code  +"===="  )
        // @ts-ignore
        //  console.log("xxxx1-"+this.graphitecode   )
        // @ts-ignore
//        zebra = + xx.code + ","
        zebra = zebra + xx.code + ","
        //this.graphitecode = this.graphitecode + xx.code +","
        // console.log("xxxx-----BRA -"+ this.graphitecode   +"===="  )
      });
      console.log("xxxx-----ZEBRA -"+ zebra   +"===="  )
      this.goldcode = zebra.substring(0 , zebra.lastIndexOf(",") )
//      this.graphitecode = this.graphitecode.substring(0 , this.graphitecode.lastIndexOf(",") - 1)
      console.log("xxxx-----goldCODE-"+ this.goldcode   +"===="  )




    // @ts-ignore
    this.dtTrigger1.next()
    })

this.graphitecode='A'
    this.categoryRepo.getCategoryStock('subcategory', 'Graphite').subscribe(value => {
      this.graphite = value
      // @ts-ignore
      //  this.dtTrigger.next()
      this.dtTrigger8.next()
let zebra=""
      console.log("xxxx-----graphiteCODE-"+ this.graphitecode   +"===="  )

      value.forEach(function (xx) {
        // @ts-ignore
        console.log("xxxx-"+xx.code  +"===="  )
        // @ts-ignore
      //  console.log("xxxx1-"+this.graphitecode   )
        // @ts-ignore
//        zebra = + xx.code + ","
        zebra = zebra + xx.code + ","
        //this.graphitecode = this.graphitecode + xx.code +","
       // console.log("xxxx-----BRA -"+ this.graphitecode   +"===="  )
      });
      console.log("xxxx-----ZEBRA -"+ zebra   +"===="  )
      this.graphitecode = zebra.substring(0 , zebra.lastIndexOf(",") )
//      this.graphitecode = this.graphitecode.substring(0 , this.graphitecode.lastIndexOf(",") - 1)
      console.log("xxxx-----graphiteCODE-"+ this.graphitecode   +"===="  )


    })

    this.categoryRepo.getCategoryStock('subcategory', 'Tungsten').subscribe(value => {
      this.tungsten = value
      // @ts-ignore
      //  this.dtTrigger.next()
      this.dtTrigger9.next()



      let zebra=""
      value.forEach(function (xx) {
        // @ts-ignore
        zebra = zebra + xx.code + ","
      });
      this.tungstencode = zebra.substring(0 , zebra.lastIndexOf(",") )
      console.log("xxxx-----wishlistcode-"+ this.tungstencode   +"===="  )


    })

    this.categoryRepo.getWishlist().subscribe(value => {
      this.wishlist = value
      // @ts-ignore
      //  this.dtTrigger.next()
      this.dtTrigger10.next()

      let zebra=""
      value.forEach(function (xx) {
        // @ts-ignore
        zebra = zebra + xx.code + ","
      });
      this.wishlistcode = zebra.substring(0 , zebra.lastIndexOf(",") )
      console.log("xxxx-----wishlistcode-"+ this.wishlistcode   +"===="  )


    })

    this.categoryRepo.getPortfolio().subscribe(value => {
      this.portfolio = value
      // @ts-ignore
      //  this.dtTrigger.next()
      this.dtTrigger11.next()

      let zebra=""
      value.forEach(function (xx) {
        // @ts-ignore
        zebra = zebra + xx.code + ","
      });
      console.log("xxxx-----ZEBRA -"+ zebra   +"===="  )
      this.portfoliocode = zebra.substring(0 , zebra.lastIndexOf(",") )
      console.log("xxxx-----portfoliocode-"+ this.portfoliocode   +"===="  )

    })






    this.categoryRepo.getCategoryStock('subcategory', 'Vanadium').subscribe(value => {
      this.vanadium = value
      // @ts-ignore
      this.dtTrigger12.next()
      let zebra=""
      value.forEach(function (xx) {
        // @ts-ignore
        zebra = zebra + xx.code + ","
      });
      this.vanadiumcode = zebra.substring(0 , zebra.lastIndexOf(",") )
      console.log("xxxx-----vanadiumcode-"+ this.vanadiumcode   +"===="  )


    })
    console.log('111')


 }

  goClick(code) {
    console.log('------CLICK-------')
    // this.route.navigate(['bigchart/BHP,RIO']);
    this.route.navigate(['bigchart/week/'+code]);

  }
  oneyear(code) {
    console.log('------CLICK-------')
    // this.route.navigate(['bigchart/BHP,RIO']);
    this.route.navigate(['bigchart/day/'+code]);
  }

  clicknews(code) {
    console.log('------CLICK-------')
    // this.route.navigate(['bigchart/BHP,RIO']);
    this.route.navigate(['news/'+code]);
  }

  day(code){
   // this.route.navigate(['bigchart/day/'+code]);
   //  this.route.navigate(['bigchart/day/'+code]).then((result) => {
   //    window.open(url, '_blank');
   //  });

    this.route.navigate([]).then((result) => {
      window.open('bigchart/day/'+code, '_blank');
    });

  }

  dual(code){
    this.route.navigate([]).then((result) => {
      window.open('bigchart/dual/'+code, '_blank');
    });

  }

}
