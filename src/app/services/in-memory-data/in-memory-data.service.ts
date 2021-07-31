import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { IMyInfo } from 'src/app/about-me/components/my-info';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    const data: IMyInfo = {
      name: 'Uday Kumar Mydam',
      professionalExperience: 6,
      email: 'uday.mydam@gmail.com',
      mobile: '+91-9849845634',
      hobbies: ['Coding', 'Watching Movies', 'Running', 'Outdoor Activities'],
      description: `A Result-oriented Software professional with over 6+ of experience in software development and leading teams in different domains majorly Web applications, actively seeking Job Opportunities.`,
      skills: ['TypeSrcipt', 'JavaScript',  'Node JS', 'HTML/HTML5', 'CSS/CSS3', 'Python',
      'Angular10+', 'MEAN Stack', 'VueJS', 'React', 'Bootstrap', 'GraphQL',
      'Docker', 'Kubernetes', 'Jenkins', 'Popular JavaSript-based Libraries',
      'AWS', 'AKS', 'CosmosDB', 'MongoDB', 'Redis', 'MicroServices', 'Serverless',
      '.NET(Beginner)', 'GitHub', 'Babel', 'TDD - Testing Frameworks(karma, Mocha)']
    };
    return { myInfo: {success: true, data} };
  }
}
