import { Component, NgZone, OnInit } from "@angular/core";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  constructor(pageTitle: Title) {
    pageTitle.setTitle('Resume | Swapnil Lokhande')
  }

  ngOnInit() {
    window.location.hash = "";
    console.log(window.location.href)
  }

  public description =
    "A graduate student from Northeastern University, Boston, accomplished by Masters in Analytics. Looking for opportunities to apply my skills of analytics and computer science in delivering business solutions and simultaneously apply my knowledge in research projects. I hold an extensive educational background and multi-dimensional industrial experience which makes me a passionate learner and a problem solver. In the last 5 years of my career, I have learned and developed expertise in delivering data-driven solutions to analyze business trends through statistical and predictive models and effectively communicate the findings and statistical results to technical and non-technical teams using interactive dashboards.Outside of work, I am passionate about mentoring and teaching emerging engineering students. I have also worked as Assistant Professor in a public university in India and always try to connect with my students to help them learn programming languages using real-world problems, mentor them in their academic projects, and help them make informed decisions in their career path.";
}
