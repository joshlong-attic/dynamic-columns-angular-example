import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  posts: Array<LanguagePost> = [];

  constructor() {


    // todo go to the database and fetch all posts from before
    // put them in the posts array
  }

  addNewPost(): void {
    this.posts.push(new LanguagePost('English', 'Hello, world'));
  }
}

export class LanguagePost {

  language: string;
  text: string;

  constructor(language: string, text: string) {
    this.language = language;
    this.text = text;
  }
}

