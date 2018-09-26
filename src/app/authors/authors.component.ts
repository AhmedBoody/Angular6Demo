import { Component, OnInit } from '@angular/core';
import{AuthorService} from '../author.service'
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
title:string = 'title of Authors';
authors:any[];
  constructor(private authorService : AuthorService) { this.authors = authorService.getAuthors();}

  ngOnInit() {
  }

}
