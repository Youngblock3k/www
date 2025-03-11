import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeSwitcherService } from '../theme-switcher/theme-switcher.service';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NgbModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public constructor(public themeSwitcherService:ThemeSwitcherService, 
    private titleService: Title, private metaService: Meta, private activatedRoute: ActivatedRoute, private router:Router) {}
 
  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.titleService.setTitle('Ascyt • Contact');
      this.metaService.updateTag({property: 'og:title', content: 'Ascyt • Contact'});
      this.metaService.updateTag({property: 'og:url', content: 'https://ascyt.com' + this.router.url});
      this.metaService.updateTag({property: 'og:description', content: 'Contact information about Ascyt (Filip Schauer), including Email, Discord, GitHub and more.'});
    });
  }
}
