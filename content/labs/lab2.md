---
title: "Lab 2"
weight: 2
date: 2018-02-07T15:16:36+02:00
draft: false
---

#### 1 RWD

- What is the purpose of the RWD? Why it is used? How things are done
before RWD? What is the difference?

	Responsive web design (RWD) is the way of writing web application with the help of mostly css technology to make the web page responsive to different windows size and show properly in for example big screen, normal desktop screen, tablet and mobile phone, with responsive design element position changes on different screen size so navigating the web page is easier and usage of space on the page is more efficient. before RWD pages were build with one set of specification and on different screen size user had to zoom in and out or scroll horizontally to see other parts of the page.
	
- How css media queries can help you building responsive web sites?

	the @media makes the css under it works on a certain condition that is for example a maximum width of screen. with  the help of media query we can define different sizes for same element that applies only on their own screen size this way we can design responsive web pages.
	
- Why to use em (font) based sizing for example margins?

	If we don't use em for fonts and use pixels we need to defines different size for every screen size but of we design the web page all with em for fonts and margins and paddings it automatically changes modify them for bigger and smaller screen size so it looks good.
	
- Article is already 7 years old, do we have any new technology which can be used to achieve same type of UI responsiveness as described in the article. Buzz words: (CSS Grid, Flexbox)

	There are technologies that we can use to make responsive web design easier and faster and more efficient like CSS Grid and Flexbox but understanding the place to use them is important too.
	
	CSS Grid is a grid based layout system that element of the page goes inside pre defined grids that split page to column and rows in different sections and all these are responsive big frameworks like bootstrap use grid system.
	
	Before Flexbox developers had to use blocks and inlines and tables and different kind of possitioning that making them responsible was not fast and easy but with Flexbox layout making a responsive container is very easy and fast without float and different positioning elements we just need to use a main flex container and define display to flex in css. and put our element inside flex container.
	
#### 2 RWD examples

![screenshot1](/im/lab2/pics/1.png "screenshot1")

![screenshot2](/im/lab2/pics/2.png "screenshot2")

![screenshot3](/im/lab2/pics/3.png "screenshot3")

![screenshot4](/im/lab2/pics/4.png "screenshot4")

![screenshot5](/im/lab2/pics/5.png "screenshot5")

![screenshot6](/im/lab2/pics/6.png "screenshot6")

#### 3 RWD in practice

A responsive static web page with text that uses reset for responsiveness.

[Link](/im/lab2/lab2.html)

- how could you prevent user zooming the site on mobile?

	with adding the following meta tag 
	`<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />`
	
#### 4 Adding stuff

Same page but added a picture with html figure tag that makes it relative to other elements.

[Link](/im/lab2/lab2-4.html)

- Reason of Figure tag:

	It holds a self contained content like a picture that is related to the main flow of the website.
	
#### 5 Responsive person list

The person list from first lab that now is responsive. using "em" and also the placement of javascript import at the end of the file for better speed of loading page, it will get better for next labs.

[Link](/im/lab2/person.html)










	


	
	
