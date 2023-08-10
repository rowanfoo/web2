import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {Injectable} from "@angular/core";
import {BigChart} from "../model/BigChart";
import {map} from "rxjs/operators";

@Injectable()
export class BigChartRepo  {

  constructor(private http: HttpClient) {
  }

  getimage(code: string): Observable<BigChart[]> {
    console.log('---------getimage-------');
    let url = Config.bigcharturl + 'getimage?code=' + code
    console.log('---------getimage-------' + url);
    return this.http.get<BigChart[]>(url);
  }




  getdualimages(code: string): Observable<BigChart[]> {
    console.log('---------getdualimages-------');
    let url = Config.bigcharturl + 'getdualimage?code=' + code
    console.log('---------getdualimages-------' + url);
    return this.http.get<BigChart[]>(url);
  }



  getweekimages(code: string): Observable<BigChart[]> {
    console.log('---------getimage-------');
    let url = Config.bigcharturl + 'getweeklyimage?code=' + code
    console.log('---------getimage-------' + url);
    return this.http.get<BigChart[]>(url);
  }

  getimages(code: string, year: number): Observable<BigChart[]>{
    console.log('---------getimage-------');
    let url = Config.bigcharturl + 'getimages?code=' + code + '&years=' + year
    console.log('---------getimage-------' + url);
    // return this.http.get<BigChart>(url);

    return this.http.get<BigChart[]>(url).pipe(
      map(value => {
        console.log(value)
        return value
      })
    )


  }

  getimagesrandomTwoyear(code: string): Observable<BigChart[]> {
    console.log('---------getimagesrandomTwoyear-------');
    let url = Config.bigcharturl + 'getrandom2images?code=' + code
    console.log('---------getimagesrandomTwoyear-------' + url);
    // return this.http.get<BigChart>(url);

    return this.http.get<BigChart[]>(url).pipe(
      map(value => {
        console.log(value)
        return value
      })
    )

  }

  getcompareimages(bigchart: BigChart): Observable<BigChart[]> {
    console.log('---------getcompareimages-------');
    let url = Config.bigcharturl + 'getcompareimages?code=' + bigchart.code + '&year=' + bigchart.year + '&mode=' + bigchart.mode + '&ma=' + bigchart.ma
    console.log('---------getcompareimages-------' + url);
    return this.http.get<BigChart[]>(url).pipe(
      map(value => {
        console.log(value)
        return value
      })
    )

  }


}
