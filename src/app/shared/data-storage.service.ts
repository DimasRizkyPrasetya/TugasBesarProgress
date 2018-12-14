import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { KomikService } from "../komik/komik.service";
import { Komik } from "../komik/komik.model";
import 'rxjs/add/operator/map';

@Injectable()
export class DataStorageService {
    constructor(private http: Http, private komikService: KomikService) {}

    storeKomiks(){
    return this.http.put('https://tugas-besar-44bc7.firebaseio.com/komiks.json', this.komikService.getKomiks());
    }

    getKomiks(){
        this.http.get('https://tugas-besar-44bc7.firebaseio.com/komiks.json')
        .map(
            (response: Response) => {
                const komiks: Komik[] = response.json();
                for (let komik of komiks) {
                    if (!komik['ingredients']) { 
                        komik['ingredients'] = [];
                    }
                }
                return komiks;
            }
        )
        .subscribe(
            (komiks: Komik[]) => {
                this.komikService.setKomiks(komiks);
            }
        );
    }
}