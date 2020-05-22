import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-nodes',
  templateUrl: './timeline-nodes.component.html',
  styleUrls: ['./timeline-nodes.component.css']
})
export class TimelineNodesComponent implements OnInit {

  constructor() { }

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
      duration: 'Jul 2019 - Sep 2020'
    },
    {
      month: 'May',
      year: '2019',
      position: 'Graduate Teaching Assistant - Data Management & Big Data',
      institute: 'Northeastern University College of Professional Studies',
      duration: 'May 2019 - Jul 2020'
    },
    {
      month: 'Aug',
      year: '2018',
      position: 'Master of Professional Studies, Analytics',
      institute: 'Northeastern University',
      duration: 'Aug 2018 - Apr 2020'
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
      institute: 'Indian Institute of Technology Bhubaneswar',
      duration: 'Aug 2014 - Apr 2016'
    },
    {
      month: 'Aug',
      year: '2010',
      position: 'Bachelor of Engineering, Computer Science',
      institute: 'LNCT - Rajiv Gandhi Proudyogiki Vishwavidyalaya',
      duration: 'Aug 2010 - Apr 2014'
    }
  ]

  ngOnInit() {
  }

}
