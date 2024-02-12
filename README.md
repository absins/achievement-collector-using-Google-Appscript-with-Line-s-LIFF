# achevement-collector-via-Line-s-LIFF
A google app script using Line's LIFF as token authorization, to collect and display procedural experience of medical students through gamification.

This project can be divided into two parts which are stored in different folders.

In main folder is application conntaining board for showing students' achievement by reading what stored in a sheet. 

And another folder containing qr code generator and scanner for student and grader to interact with database(sheet)

For example: please open these links via Line application.

Required procedures for medical students
https://liff.line.me/1657295672-boyXZez1

Qr code scanner
https://liff.line.me/1657295672-VnGYvq6J

Qr code generator
https://liff.line.me/1657295672-obKrY8Z0

*Can only be used by those in organization only.
## How this project work.
When we reach this project through gateway page, we will be redireced to Line login page which will get our line token and search through database then show all achievement recorded in database through main page. If users did not register yet, they will be redirected to register page which will send authentication code to their E-mail which required to be filled and they will be redirected back to our main board if registration successfully.

When students complete any assignment, they can get achievement by generate QR code via link we gave which will be scanned by our staff and get their Line token id. Our staffs will submit their ID with achievement they completed through a google form which will update said achievement for those students in the database.
## Prerequisite
- Google workspace which can send emails enough to serve users.
- Webserver which can host 3 pages of html file.
- Line developer account.

## How to use this repo
- Create a google app script project.
- Replicate all files in Main folder except file named gateway.html to the project with exactly same name of all files and case sensitive.
- Create 2 blank google sheet files to use as login database with first sheet named IdSheet and achievement database with first sheet named individual.
- In Code.gs file, fill ID of IdSheet in variable ID and ID of achievement sheet in variable Ach.
- Create a LIFF project in line developer account and set endpoint URL to our server directory targeted to gateway.html e.g. https://yourhostname/gateway.html
- Copy LIFF Id of the project we just created and paste in liffId section of gateway.html file.
- Bring that gateway.html file we edited to the host directory we put in previous step.
