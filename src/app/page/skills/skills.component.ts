import { Component } from '@angular/core';

interface Skill {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  modalOpen = false;
  current = 1;
  total = 0;
  perPage = 19;
  skillsToDisplay: Skill[] = [];
  skills: Skill[] = [
    { icon: 'fa-brands fa-html5', name: 'HTML5' },
    { icon: 'fa-brands fa-css3', name: 'CSS3' },
    { icon: 'fa-brands fa-js', name: 'JavaScript' },
    { icon: 'fa-brands fa-angular', name: 'Angular' },
    { icon: 'fa-brands fa-react', name: 'React' },
    { icon: 'fa-brands fa-node-js', name: 'Node.js' },
    { icon: 'fa-brands fa-python', name: 'Python' },
    { icon: 'fa-brands fa-java', name: 'Java' },
    { icon: 'fa-brands fa-vuejs', name: 'Vue.js' },
    { icon: 'devicon-typescript-plain', name: 'TypeScript' },
    { icon: 'fa-brands fa-angular', name: 'Angular' },
    { icon: 'fa-brands fa-vuejs', name: 'Vue.js' },
    { icon: 'fa-brands fa-npm', name: 'npm' },
    { icon: 'devicon-webpack-plain', name: 'Webpack' },
    { icon: 'devicon-mongodb-plain', name: 'MongoDB' },
    { icon: 'devicon-express-original', name: 'Express.js' },
    { icon: 'devicon-flask-original', name: 'Flask' },
    { icon: 'devicon-django-plain', name: 'Django' },
    { icon: 'devicon-ruby-plain', name: 'Ruby' },
    { icon: 'devicon-rails-plain', name: 'Rails' },
    { icon: 'devicon-csharp-plain', name: 'C#' },
    { icon: 'devicon-dot-net-plain-wordmark', name: '.NET' },
    { icon: 'fa-brands fa-swift', name: 'Swift' },
    { icon: 'devicon-kotlin-plain', name: 'Kotlin' },
    { icon: 'fa-brands fa-aws', name: 'Amazon Web Services (AWS)' },
    { icon: 'devicon-azure-plain', name: 'Microsoft Azure' },
    { icon: 'fa-brands fa-figma', name: 'Figma' },
    { icon: 'fa-brands fa-sketch', name: 'Sketch' },
    { icon: 'devicon-nuxtjs-plain', name: 'Nuxt.js' },
    { icon: 'fa-brands fa-ember', name: 'Ember.js' },
    { icon: 'devicon-backbonejs-plain', name: 'Backbone.js' },
    { icon: 'devicon-redux-original', name: 'Redux' },
    { icon: 'devicon-d3js-plain', name: 'D3.js' },
    { icon: 'devicon-jquery-plain', name: 'jQuery' },
    { icon: 'devicon-dart-plain', name: 'Dart' },
    { icon: 'devicon-go-original-wordmark', name: 'Go' },
    { icon: 'fa-brands fa-rust', name: 'Rust' },
    { icon: 'devicon-scala-plain', name: 'Scala' },
    { icon: 'devicon-coffeescript-original', name: 'CoffeeScript' },
    { icon: 'fa-brands fa-meteor', name: 'Meteor' },
    { icon: 'fa-brands fa-laravel', name: 'Laravel' },
    { icon: 'fa-brands fa-yarn', name: 'Yarn' },
    { icon: 'devicon-graphql-plain', name: 'GraphQL' },
    { icon: 'fa-brands fa-jenkins', name: 'Jenkins' },
    { icon: 'fa-brands fa-circle', name: 'CircleCI' },
    { icon: 'devicon-travis-plain', name: 'Travis CI' },
    { icon: 'devicon-heroku-original', name: 'Heroku' },
    { icon: 'devicon-netlify-plain', name: 'Netlify' },
    { icon: 'devicon-redis-plain', name: 'Redis' },
    { icon: 'devicon-mysql-original', name: 'MySQL' },
    { icon: 'devicon-postgresql-plain', name: 'PostgreSQL' },
    { icon: 'devicon-sqlite-plain', name: 'SQLite' },
    { icon: 'fa-brands fa-microsoft', name: 'Microsoft' },
    { icon: 'fa-brands fa-unity', name: 'Unity' },
    { icon: 'devicon-unrealengine-original', name: 'Unreal Engine' },
  ];

  ngOnInit(): void {
    this.total = Math.ceil(this.skills.length / this.perPage);
    this.updateSkillsToDisplay();
  }

  onGoTo(page: number): void {
    this.current = page;
    this.updateSkillsToDisplay();
  }

  onNext(): void {
    if (this.current < this.total) {
      this.current++;
      this.updateSkillsToDisplay();
    }
  }

  onPrevious(): void {
    if (this.current > 1) {
      this.current--;
      this.updateSkillsToDisplay();
    }
  }

  private updateSkillsToDisplay(): void {
    const startIndex = (this.current - 1) * this.perPage;
    this.skillsToDisplay = this.skills.slice(startIndex, startIndex + this.perPage);
  }
}

