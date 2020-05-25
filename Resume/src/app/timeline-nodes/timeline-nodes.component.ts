import { Component } from '@angular/core';

@Component({
  selector: 'app-timeline-nodes',
  templateUrl: './timeline-nodes.component.html',
  styleUrls: ['./timeline-nodes.component.css']
})
export class TimelineNodesComponent {

  public timeLineDataArray = [
    {
      month: 'Sep',
      year: '2019',
      position: 'Data Analysis Research Assistant',
      institute: 'D’Amore-McKim School of Business at Northeastern University',
      duration: 'Sep 2019 - Mar 2020'
    },
    {
      month: 'Jul',
      year: '2019',
      position: 'Data Science Engineer Intern',
      institute: 'Mactores Information Technology & Services',
      duration: 'Jul 2019 - Sep 2019'
    },
    {
      month: 'May',
      year: '2019',
      position: 'Graduate Teaching Assistant',
      institute: 'Northeastern University College of Professional Studies',
      duration: 'Jan 2020 - Mar 2020'
    },
    {
      month: 'Sep',
      year: '2018',
      position: 'Master of Professional Studies, Analytics',
      institute: 'Northeastern University',
      duration: 'Sep 2018 - Mar 2020'
    },
    {
      month: 'Dec',
      year: '2017',
      position: 'Assistant Professor',
      institute: 'Maulana Azad National Institute of Technology',
      duration: 'Dec 2017 - May 2018'
    },
    {
      month: 'Jul',
      year: '2016',
      position: 'Associate System Engineer',
      institute: 'IBM India Private Limited',
      duration: 'Jul 2016 - May 2017'
    },
    {
      month: 'Aug',
      year: '2014',
      position: 'Master of Technology, Computer Science',
      institute: 'International Institute of Information Technology, Bhubaneswar',
      duration: 'Aug 2014 - Jun 2016'
    },
    {
      month: 'Aug',
      year: '2010',
      position: 'Bachelor of Engineering, Computer Science',
      institute: 'Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      duration: 'Aug 2010 - Jun 2014'
    }
  ]
}
