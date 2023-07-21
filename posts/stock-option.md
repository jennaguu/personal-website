---
title: 'Stock options project'
date: '2021-10-11'
image: stock-option.png
excerpt: Web application that creates pricing models to help users find trading opportunities

isFeatured: true
---

# General Info
[This application](https://github.com/skatergu/stock-option) provides a user-friendly interface to find trade opportunities based on the difference between real price and model price. It also provides multiple models, so users can find solid trade opportunities by observing different model prices.

# Price Modeling
It provides four models:
- SplineInterpolator
- AkimaSplineInterpolator
- Fit one dimension
- Fit two dimension


### Data
[Yahoo finance](https://query2.finance.yahoo.com/v7/finance/options/qqq) - options


### Technologies
- **Backend:**
  - [JDK 14](https://docs.oracle.com/en/java/javase/14/) - Java™ Platform, Standard Edition Development Kit
  - [Spring Boot 2.3.3](https://spring.io/projects/spring-boot) - Framework to create stand-alone Spring based application.
  - [Maven](https://maven.apache.org/) - Build and manage Java-based project.
- **Frontend:**
  - [Angular 10](https://angular.io/) A platform and framework for building single-page client application using HTML and TypeScript.
- **Libraries and Plugins**
  - [Apache common math](http://commons.apache.org/proper/commons-math/index.html) - Provides math utilities to solve common math problem
  - [Json Java](https://www.oracle.com/technical-resources/articles/java/json.html) - Parse JSON messages from yahoo finance
  - [lombok](https://projectlombok.org/features/all) - Reduce boilerplate code

### Application screenshots
![Application screenshot1](stock-option.png)
![Application screenshot2](quote-lookup.png)

Visit [my project](https://github.com/skatergu/stock-option) for details on how to run the application!
