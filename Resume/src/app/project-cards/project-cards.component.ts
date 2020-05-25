import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-cards',
  templateUrl: './project-cards.component.html',
  styleUrls: ['./project-cards.component.css']
})
export class ProjectCardsComponent {
  public projectDataArray = [
    {
      title: 'KNN on NYPD Crime Data',
      imageUrl : 'assets/images/nypd.jpg',
      introduction: 'This dataset includes all valid felony, misdemeanor, and violation crimes reported to the New York City Police Department (NYPD) from 2006 to October 25 2019.',
      description: ' The dataset is updated annually and is updated and maintained by Police Department (NYPD). The Goal of the project is to predict the level of offense (felony, misdemeanor, violation) depending on different factors associated with the registered complaint and analyze the factors in the dataset leading to the increase or decrease of crime rates in the dataset. The target variable (Level of offense) is categorical in nature and thus Generalized Logistic regression and K-Nearest Neighbor method can be implemented to predict the class of the target variable.',
      link: 'https://github.com/Swapnillokhande/KNN-on-NYPD-Crime-data',
      source : 'Github',
      sourceClass: 'fab fa-github'
    },
    {
      title: 'Multiclass Logistic Regression On Handwritten Image Dataset',
      imageUrl : 'assets/images/digit.png',
      introduction: 'An MNIST dataset is used and the goal of the analysis is to build a model which can accurately classify the images as one of the digits between 0 and 9.',
      description: 'Logistic Regression is a method for performing predictive analysis by determining the relation between the dependent variable which is categorical or binary in nature and one or more independent variables. This method of regression is used only when the dependent variable is categorical (Yes or No, or 0 or 1). For instance, to identify an email is a spam or not (Yes or no), a logistic regression can be used. The algorithm gives a probability which can be used to translate the output into one of the classes (Yes or No) (Swaminathan, 2018).',
      link: 'https://github.com/Swapnillokhande/Multiclass-Logistic-Regression-on-Handwritten-digits-image-dataset',
      source : 'Github',
      sourceClass: 'fab fa-github'
    },
    {
      title: 'Sales Prediction of a Supermarket Chain',
      imageUrl : 'assets/images/sales.jpeg',
      introduction: 'Big Mart is an e-commerce and a supermarket chain, wants to improve the sales of the company by deploying a predictive model.',
      description: 'The company collected sales data from the year 2013, for 1559 distinct products, and has 10 stores spread across different cities (Analytics Vidhya, 2016). The data is divided into two broad categories which are Product level and Outlet level properties. Based on these properties the predictive model would help the company determine the expected sales of each product at a particular store and would also help identify feature importance. Help the company determine properties of products as well as outlets that have a high or medium impact on the sales.',
      link: 'https://github.com/Swapnillokhande/Sales-Prediction-of-a-Supermarket-chain',
      source : 'Github',
      sourceClass: 'fab fa-github'
    },
    {
      title: 'Measuring Impact of Capstone Courses on Students’ Employability',
      imageUrl : 'assets/images/capstone.jpg',
      introduction: 'The research involves the analysis of the impact of the Capstone program on the employability of the students or job seekers.',
      description: 'The fundamental analysis in this research involves the identification of the keywords used by the people (authors) while discussing the benefits of capstone courses in the academic curriculum. The specified goal is to categorize the findings through the BE-EDGE concept and see how far the capstone project helps students in developing their Personal, Social, and Professional Capital.',
      link: 'https://www.be-edge.com/measuring-impact-of-capstone-courses-on-students-employability/',
      source: 'Be Edge',
      sourceClass: 'fas fa-link'
    },
    {
      title: 'Internship and Co-op as a Triple Capital Investment in Employability',
      imageUrl : 'assets/images/intern.jpg',
      introduction: 'The research involves the analysis of employers` perspective on the impact of the internship and coop program on the employability of the students or job seekers.',
      description: 'The fundamental analysis in this research involves the identification of the keywords used by the people (authors) while discussing the internship program in their articles published on business-related and business-targeting public platforms. The goal is to analyze the keywords based on the BE-EDGE methodology and see how far the internship program helps the students in developing their Personal Capital, Social Capital, and Professional Capital.',
      link: 'https://www.be-edge.com/for-educators-internship-and-co-op-as-a-triple-capital-investment-in-employability/',
      source: 'Be Edge',
      sourceClass: 'fas fa-link'
    },
    {
      title: 'Trusting Data for Better Decision Making after Pandemic',
      imageUrl : 'assets/images/medium.png',
      introduction: 'The decisions made today during the pandemic will re-shape the lifestyle and working culture for the people and may provide a better environment for the next generation.',
      description: 'After the Coronavirus (COVID-19) outbreak occurred in the United States and New York City, the financial capital of the world (According to the Financial Street, 2019), being the epicenter of this outbreak, the stock markets crashed, businesses and economies are seeing an unprecedented downturn, and unemployment is on the rise [1]. This led Economist, Business Planners, and Policymakers in a situation of great uncertainty and unbaling them to predict the damage to the economy caused by the unique situation.',
      link: 'https://medium.com/@swapnillokhande06/trusting-the-data-for-better-decision-making-and-a-better-life-for-the-next-generation-76172400c329',
      source : 'Medium',
      sourceClass: 'fab fa-medium'
    }
  ]
}
