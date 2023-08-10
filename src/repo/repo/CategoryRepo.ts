import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {map} from "rxjs/operators";
import {tap} from "rxjs/internal/operators/tap";

@Injectable()
export class CategoryRepo {

  constructor(private http: HttpClient) {
  }



  getCategoryTagStocks(category: string, tag: string): Observable<string[]> {
    let categoryurl = Config.categoryurl + '/stock/category/' + category + '/tag/' + tag;
    console.log('---REPO-   getCategoryTagStocks-----1--' + categoryurl);
    return this.http.get<string[]>(categoryurl).pipe(
      tap(value => {
        console.log(value)
        return value
      })
    )

  }

  getAllCategoryTag(tag: string): Observable<string[]> {
    let categoryurl = Config.categoryurl + '/tag/' + tag;

    return this.http.get<string[]>(categoryurl).pipe(
      tap(value => {
        console.log(value)
        return value
      })
    )

  }

  getAllCategory(): Observable<string[]> {
    var categoryurl = Config.categoryurl;
    console.log('---REPO-   getAllCategory-----1--' + categoryurl);
    return this.http.get<string[]>(categoryurl).pipe(
      tap(value => {
        console.log(value)
        return value
      })
    )

  }




  getTags(): Observable<String[]> {
    var url = Config.categoryurl + '/tags';
//    console.log('--- getTags-----1--' + url);
    return this.http.get<String[]>(url);
  }

  getSubcategory(): Observable<string[]> {
    var url = Config.categoryurl + '/subcategory';
    //  console.log('--- getSubcategory-----1--' + url);
    return this.http.get<string[]>(url);
  }

// will return json
  getCategoryStock(mode: string, name: string){
    var categoryurl = Config.categoryurl + '/stocks/' + mode + '/' + name;
    console.log('---REPO-   getCategoryStock-----1--' + categoryurl);
    return this.http.get<string[]>(categoryurl).pipe(
      tap(value => {
       //   console.log(value)
        return value
      })
    )

  }

//  category/stocks/mktCapGreater1b/{category}
getMarketCap1B(name: string) {
  var categoryurl = Config.categoryurl + '/stocks/mktCapGreater1b' +'/' + name;
  console.log('---REPO-   getMarketCap1B-----1--' + categoryurl);
  return this.http.get<string[]>(categoryurl).pipe(
    tap(value => {
    //  console.log(value)
      return value
    })
  )
}

  getWishlist() {
    var categoryurl = Config.categoryurl + '/stocks/wishlist';
    console.log('---REPO-   getWishlist-----1--' + categoryurl);
    return this.http.get<string[]>(categoryurl).pipe(
      tap(value => {
        return value
      })
    )
  }

  getPortfolio() {
    var categoryurl = Config.categoryurl + '/stocks/portfolio';
    console.log('---REPO-   getPortfolio-----1--' + categoryurl);
    return this.http.get<string[]>(categoryurl).pipe(
      tap(value => {
        return value
      })
    )
  }


// @GetMapping("/category/stocks/{mode}/{category}")


  getCatetoryCodes(mode: string, category: string): Observable<string[]> {
    let wishlisturl = Config.categoryurl

    wishlisturl = 'http://localhost:8080/category/stocks/code/' + mode + '/' + category
    console.log('-----getCatetoryCodess-------' + wishlisturl)

    return this.http.get<string[]>(wishlisturl)
      .pipe(
        tap(value => {
        //  console.log('value')
       //   console.log(value)
        })
      )
  }


}

