import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ColorsService {
    // Take data from the file
    private dataLink = '../assets/colors-data.json';
    constructor(private http: Http) { }

    // export method data
    getColors(): any {
        return this.http.get(this.dataLink).pipe(map((response: Response) => {
            return response.json();
        }));
    }
}
