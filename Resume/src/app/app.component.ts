import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  public mobileVersion = false;
  public videoUrl : any = 'https://www.youtube.com/embed/H1_EiYRJ0Ag'
  public description1 = "Swapnil is a graduate student from Northeastern University, Boston, with a Masters in Analytics. He is currently looking for opportunities to apply his skills of analytics and computer science in delivering business solutions and simultaneously apply his knowledge in research projects. He has an extensive educational background and multi-dimensional industrial experience which makes him a passionate learner and a problem solver. In the last 5 years of his career, he has learned and developed expertise in delivering data-driven solutions to analyze business trends through statistical and predictive models and effectively communicate the findings and statistical results to technical and non-technical teams using interactive dashboards."
  public description2 = "Outside of work, he is passionate about mentoring and teaching emerging engineering students. He has also worked as Assistant Professor in a public university in India and he always tries to connect with his students to help them learn programming languages using real-world problems, mentor them in their academic projects, and help them make informed decisions in their career path."
  
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit() {
    if(window.innerWidth < 1023) {
      this.mobileVersion = true;
    }
    window.location.hash = "";
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl);
  }
}
