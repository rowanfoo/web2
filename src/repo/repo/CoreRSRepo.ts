import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Config} from "../../share/Config";
import {Injectable} from "@angular/core";
import {News} from "../model/News";
import {tap} from "rxjs/internal/operators/tap";
import { CoreRS } from "../model/CoreRS";

@Injectable()
export class CoreRSRepo {


  constructor(private http: HttpClient) {
  }


  getNewsCode(code: string): Observable<CoreRS[]> {
    let serverurl = Config.newsurl + '/rs/' + code;
    console.log('-----------getNewsCode-----url------------' + serverurl);

    return this.http.get<CoreRS[]>(serverurl).pipe(
      tap(value => {
        console.log(value)
      })
    )
  }




}
