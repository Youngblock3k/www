import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-redirecting',
  standalone: true,
  imports: [],
  templateUrl: './redirecting.component.html',
  styleUrl: './redirecting.component.scss'
})
export class RedirectingComponent {
  constructor(private titleService: Title, private metaService: Meta, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {  
      this.titleService.setTitle('Ascyt - Redirecting...');
      this.metaService.updateTag({property: 'og:title', content: 'Ascyt'});
      this.metaService.updateTag({property: 'og:url', content: 'https://ascyt.com' + this.router.url});
      this.metaService.updateTag({property: 'og:description', content: ''});
    });
  }
}
