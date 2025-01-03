import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, NgbModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private titleService: Title, private metaService: Meta, private activatedRoute: ActivatedRoute, private router:Router) { }

  getCurrentAge(): number {
    const today = new Date();
    const birthDate = new Date('2007-04-25');

    const timeDiff = Math.abs(today.getTime() - birthDate.getTime());

    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
        this.titleService.setTitle('Ascyt • Home');
        this.metaService.updateTag({ property: 'og:title', content: 'Ascyt • Home' });
        this.metaService.updateTag({ property: 'og:url', content: 'https://ascyt.com' + this.router.url });
        this.metaService.updateTag({ property: 'og:description', content: 'The home page of the personal website of Ascyt (Filip Schauer).' });
    });
  }
}
