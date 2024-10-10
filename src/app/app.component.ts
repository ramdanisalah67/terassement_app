import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }
  
  
  scrollToSection(section: any) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngOnInit(): void {
    this.title.setTitle('HBTP ');
    this.meta.addTags([
      { name: 'description', content: 'A description of your page for Google' },
      { name: 'keywords', content: 'keywords, relevant, to, your, page' },
      { name: 'robots', content: 'index, follow' }
    ]);
  }


}
