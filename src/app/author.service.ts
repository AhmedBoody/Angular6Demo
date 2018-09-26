import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor() { }
  getAuthors():string[]{
    return["author1","author11","author111"];  
  }
}
