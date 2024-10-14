import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { ThemeSwitcherService } from '../theme-switcher/theme-switcher.service';
import { MoreProjectsViewComponent } from './more-projects-view/more-projects-view.component';

export enum Type {
  Normal,
  MoreView
}
interface Project {
  name: string;
  description: string|null;

  url: string|null;
  onClick?: () => void;

  image: string|null;
  type: Type;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, NgbModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  Type = Type;

  public constructor(public themeSwitcher:ThemeSwitcherService, public modalService:NgbModal) {}

  projects: Project[] = [
    {name: 'Tiersorter', description: 'An item ranker (soon also tierlist maker) that ranks items on simple "Which of the two is better?" decisions.', url:'https://tiersorter.ascyt.com/', image: 'assets/images/projects/tiersorter.png', type: Type.Normal},
    {name: 'WisdomKeys', description: 'Simple vocabulary learning website that lets you practice your typing speed.', url:'https://wisdomkeys.ascyt.com/', image: 'assets/images/projects/wisdomkeys.png', type: Type.Normal},
    {name: 'OpenQOTD', description: 'Open-source Discord bot that handles Question Of The Days with custom questions and more.', url: 'https://open-qotd.ascyt.com/', image: 'assets/images/projects/open-qotd.png', type: Type.Normal},
    {name: 'ezgpt', description: 'Intuitive and easy-to-use Python library for usage of OpenAI\'s API.', url:'https://pypi.org/project/ezgpt', image: 'assets/images/projects/ezgpt.png', type: Type.Normal},
    {name: 'SMSH', description: 'Simple but powerful markup language that compiles to HTML.', url:'https://smsh.ascyt.com/', image: 'assets/images/projects/smsh.png', type: Type.Normal},

    // Special project to open the more projects view
    {name: 'View more', description: null, url:null, image: null, type: Type.MoreView, 
      onClick: () => this.openMoreView() /* the arrow function is needed, otherwise the `this` context gets lost */ },
  ];

  public openMoreView() {
    this.modalService.open(MoreProjectsViewComponent, { centered: true, size: 'lg', scrollable: true });
  }

  public onProjectClick(project: Project, event: MouseEvent) {
    if (project.onClick) {
      event.preventDefault();
      project.onClick();
    }
  }
}