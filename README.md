# achievement-collector-via-Line-s-LIFF
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

---
![image](https://github.com/absins/achievement-collector-using-Google-Appscript-with-Line-s-LIFF/assets/53501806/442e2ccd-c5ed-4c09-9cc7-425627032a32)

---

![image](https://github.com/absins/achievement-collector-using-Google-Appscript-with-Line-s-LIFF/assets/53501806/ad140361-bcce-48d0-b88f-6eba3d5754de)

---

When students complete any assignment, they can get achievement by generate QR code via link we gave which will be scanned by our staff and get their Line token id. Our staffs will submit their ID with achievement they completed through a google form which will update said achievement for those students in the database.

---
![image](https://github.com/absins/achievement-collector-using-Google-Appscript-with-Line-s-LIFF/assets/53501806/3b0981bd-7e71-4ec6-82c8-a80211c08970)


---
![image](https://github.com/absins/achievement-collector-using-Google-Appscript-with-Line-s-LIFF/assets/53501806/2fd84571-8a98-4757-bd85-4ed657ef9791)


## Prerequisite
- Google workspace which can send emails enough to serve users.
- Webserver which can host 3 pages of html file.
- Line developer account.

## How to use this repo
- Create a google app script project.
- Replicate all files in Main folder except file named gateway.html to the project with exactly same name of all files and case sensitive.
- Create 2 blank google sheet files to use as login database with first sheet named IdSheet and achievement database with first sheet named individual.
- In Code.gs file, fill ID of IdSheet in variable ID and ID of achievement sheet in variable Ach.
- Create a LIFF project in line developer account and set endpoint URL to our server directory targeted to gateway.html e.g. https://yourhostname/gateway.html.
- Copy LIFF Id of the project we just created and paste in liffId section of gateway.html file.
- Bring that gateway.html file we edited to the host directory we put in previous step.
- Create a google form with 2 question, first question is Line token with short answer text response and second question is Achievement number with integer response.
  - Get a pre-filled link to this form with first option answered as "hello".
  - Store the link without word "hello" somewhere, we need to use it later.
  - Open script editor via this form and replicate code in QR-scanner&generator/Code.gs into this project and fill ID of achievement sheet in variable Ach.
- Create another LIFF projects set its name QR-generator and endpoint URL to our server directory targeted to QR-generator.html.
- Create another LIFF projects set its name QR-scanner and endpoint URL to our server directory targeted to QR-scanner.html.
- In QR-scanner&generator folder, replicate two files named QR-generator.html and QR-scanner.html.
- Edit file named QR-generator and replace liffId with previously created QR-generator project's LIFF ID.
- Edit file named QR-scanner and replace liffId with previously created QR-scanner project's LIFF ID, and replace URL in submit() function with the pre-filled google form link we got previously.
- Upload QR-generator.html and QR-scanner.html to our server in the same directory we submit in LIFF project.
