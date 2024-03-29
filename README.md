# Medical Student Achievement Collector using Google App Script with Line's LIFF

This repository contains a Google Apps Script project utilizing Line's LIFF (Line Front-end Framework) for managing and gamifying the procedural experience of medical students. The project is divided into two parts: the main application, which displays students' achievements, and a folder containing QR code generator and scanner functionalities for student and grader interaction with the database (Google Sheets).

## Introduction

Medical students can track their procedural achievements via this system, which employs Line's LIFF for authentication and interaction. Graders can scan QR codes generated by students to update achievements in the database. 

## How it Works

Upon accessing the project through the gateway page, users are redirected to the Line login page to obtain their Line token. The system then searches the database for the user's achievements and displays them on the main page. If users are not registered, they are redirected to a registration page where an authentication code is sent to their email. After successful registration, users are redirected back to the main board.

![image](https://github.com/absins/achievement-collector-using-Google-Appscript-with-Line-s-LIFF/assets/53501806/ad140361-bcce-48d0-b88f-6eba3d5754de)

When students complete assignments, they generate a QR code via a provided link. Staff can then scan these QR codes to obtain the students' Line token IDs. Staff submit these IDs along with the completed achievements through a Google Form, which updates the achievements in the database.

![image](https://github.com/absins/achievement-collector-using-Google-Appscript-with-Line-s-LIFF/assets/53501806/3b0981bd-7e71-4ec6-82c8-a80211c08970)

## Prerequisites

- Google Workspace account with email sending capabilities.
- Web server capable of hosting three HTML pages.
- Line Developer account.

## How to Use this Repository

1. Create a Google Apps Script project.
2. Replicate all files in the Main folder (except gateway.html) to the project with the exact same names and cases.
3. Create two blank Google Sheets files: one for the login database (with sheet named IdSheet) and one for the achievement database (with sheet named individual).
4. In Code.gs file, fill in the ID of IdSheet in the variable `ID` and the ID of the achievement sheet in the variable `Ach`.
5. Create a LIFF project in the Line Developer account and set the endpoint URL to your server directory targeting gateway.html (e.g., https://yourhostname/gateway.html).
6. Copy the LIFF ID of the created project and paste it in the `liffId` section of the gateway.html file.
7. Place the edited gateway.html file in the host directory specified in the previous step.
8. Create a Google Form with two questions: one for Line token with short answer text response and one for Achievement number with integer response.
   - Get a pre-filled link to this form with the first option answered as "hello".
   - Store the link without "hello" somewhere as it will be used later.
   - Open the script editor via this form and replicate the code in QR-scanner&generator/Code.gs into this project, filling in the ID of the achievement sheet in the variable `Ach`.
9. Create another LIFF project named QR-generator with the endpoint URL targeting QR-generator.html.
10. Create another LIFF project named QR-scanner with the endpoint URL targeting QR-scanner.html.
11. In the QR-scanner&generator folder, replicate two files named QR-generator.html and QR-scanner.html.
12. Edit the QR-generator.html file, replacing `liffId` with the LIFF ID of the previously created QR-generator project.
13. Edit the QR-scanner.html file, replacing `liffId` with the LIFF ID of the previously created QR-scanner project, and replace the URL in the submit() function with the pre-filled Google Form link obtained earlier.
14. Upload QR-generator.html and QR-scanner.html to your server in the same directory submitted in the LIFF project.
