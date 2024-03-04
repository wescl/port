import { Component, OnInit } from '@angular/core';

interface Projects {
  imageUrl: string;
  title: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  modalOpen = false;
  current = 1;
  total = 0;
  perPage = 4;
  projectsToDisplay: Projects[] = [];
  projects: Projects[] = [
    { imageUrl: 'https://www.rhuanbello.com/assets/projects/calculadora.jpg', title: 'GGrzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzd' },
    { imageUrl: 'https://www.rhuanbello.com/assets/projects/deathcat.jpg', title: 'Gereto' },
    { imageUrl: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Projeto' },
    { imageUrl: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=400', title: 'Projeto' },
    { imageUrl: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Projeto' },
    { imageUrl: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=400', title: 'Projeto' },
    { imageUrl: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Projeto' },
    { imageUrl: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=400', title: 'Projeto' },
    { imageUrl: 'https://images.pexels.com/photos/1612351/pexels-photo-1612351.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Projeto' },
    { imageUrl: 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=400', title: 'Projeto' },
    { imageUrl: 'https://images.unsplash.com/photo-1431440869543-efaf3388c585?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D', title: 'Projeto' },

  ];
  title = "";

  openModal(project: Projects) {
    this.modalOpen = !this.modalOpen;
  }

  closeModal() {
    this.modalOpen = !this.modalOpen;
  }

  ngOnInit(): void {
    this.total = Math.ceil(this.projects.length / this.perPage);
    this.updateProjectsToDisplay();
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
