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

  private readonly birthDate = new Date('2007-04-25');

  public get isBirthday(): boolean {
    const today = new Date();

    return today.getMonth() === this.birthDate.getMonth() && today.getDate() === this.birthDate.getDate();
  }

  getCurrentAge(): number {
    const today = new Date();

    const yearDiff = today.getFullYear() - this.birthDate.getFullYear();
    if (today.getMonth() < this.birthDate.getMonth() || (today.getMonth() === this.birthDate.getMonth() && today.getDate() < this.birthDate.getDate())) {
      return yearDiff - 1;
    }
    return yearDiff;
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
