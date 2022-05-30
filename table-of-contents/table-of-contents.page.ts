import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.page.html',
  styleUrls: ['./table-of-contents.page.scss'],
})
export class TableOfContentsPage implements OnInit {
  public chapters = [
    {
      title: "Chapter 1 | The Beginning",
      url: "/chapter1"
    },
    {
      title: "Chapter 2 | The Middle",
      url: "/chapter2"
    },
    {
      title: "Chapter 3 | The End",
      url: "/chapter3"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
