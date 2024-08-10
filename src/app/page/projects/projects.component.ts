import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import projectsData from './projects.json';

interface Projects {
  status?: boolean;
  title: string;
  description: string;
  tech: string[];
  linkVideo: string;
  imageUrl: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Projects[] = projectsData as Projects[];
  modalOpen = false;
  current = 1;
  total = 0;
  perPage = 4;
  projectsToDisplay: Projects[] = [];
  selectedProject: Projects | null = null;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  openModal(project: Projects) {
    this.selectedProject = project;
    console.log('Link do vídeo do projeto selecionado:', this.selectedProject.linkVideo);
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedProject.linkVideo);
    console.log('videoUrl:', this.videoUrl);
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  ngOnInit(): void {
    this.total = Math.ceil(this.projects.length / this.perPage);
    this.updateProjectsToDisplay();

    console.log('Projects:', this.projects);

    if (this.selectedProject) {
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedProject.linkVideo);
      console.log('videoUrl:', this.videoUrl);
    }
  }

  onGoTo(page: number): void {
    this.current = page;
    this.updateProjectsToDisplay();
  }

  onNext(): void {
    if (this.current < this.total) {
      this.current++;
      this.updateProjectsToDisplay();
    }
  }

  onPrevious(): void {
    if (this.current > 1) {
      this.current--;
      this.updateProjectsToDisplay();
    }
  }

  private updateProjectsToDisplay(): void {
    const startIndex = (this.current - 1) * this.perPage;
    this.projectsToDisplay = this.projects.slice(startIndex, startIndex + this.perPage);
  }
}
