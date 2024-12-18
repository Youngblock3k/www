import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgbModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  constructor(private titleService: Title, private metaService: Meta, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {  
      this.titleService.setTitle('Ascyt - About');
      this.metaService.updateTag({property: 'og:title', content: 'Ascyt - About'});
      this.metaService.updateTag({property: 'og:url', content: 'https://ascyt.com' + this.router.url});
      this.metaService.updateTag({property: 'og:description', content: 'Information about Ascyt (Filip Schauer), including his hobbies, interests and more.'});
    });
  }
}
