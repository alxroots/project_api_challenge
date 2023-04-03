🚀 Bliss Applications Recruitment Challenge - Frontend 🚀

This repository contains the solution to the Bliss Applications Recruitment Challenge for the Frontend position. The application was developed using React and implements the functional and non-functional requirements specified in the challenge.

🎨 UI Requirements 🎨

The application has a simple user interface that allows users to browse and search through a list of questions. The list is fetched from the API and displayed in the application. The user can filter the results using a search box, which triggers a call to the appropriate endpoint on the API.

When the user selects a question from the list, the application displays the details of the question on a separate screen. The user can also vote on a particular answer using a button provided on the detail screen.

💻 Functional Requirements 💻

🔹 Loading Screen:
The application shows a loading screen while the server health is checked. If the server health is OK, then the application should proceed to the "List Screen." If the server health is NOT OK, then the application should display a "Retry Action" widget.

🔹 Questions List Screen:
The frontend application must show the List Screen in two cases: the loading screen managed to contact and check the server health or the app was opened with an URL with the format. The app should fetch 10 records at a time. The list will follow the order returned from the API. The app should start loading 10 additional records if the user shows intent to browse additional records. The app should present a search box at the top of the list that allows the user to filter the results. Results should be shown on the same screen as a list. Searching implies hitting the appropriate endpoint and this variation must comply with the 2 requirements defined above. If a search result is being shown (empty or not), the user must be allowed to share this with other users via the "Share Screen". The app must send an appropriate URL that, when opened, drives the user to the appropriate screen. The app must present a dismiss button to get out of the Search variant. Each list element is selectable, and whenever the user selects one record, the app must show the "Detail Screen."

🔹 Detail Screen:
The frontend application must show the detail screen in two cases: a row was selected in "List Screen" or the application was opened with the detail screen URL from outside the app. The "Detail Screen" must allow the user to navigate back to the listing. The "Detail Screen" must convey all the information of the object using appropriate visualization widgets. The "Detail Screen" must allow the user to share this content with other users via the "Share Screen". The app must send an appropriate URL that, when opened, drives the user to the appropriate screen. The "Detail Screen" must allow the user to vote on a particular answer via the use of a button. This should trigger an appropriate call to the API endpoint devoted to updating Questions.

🔹 Share Screen:
This screen must allow the users to share this content with others via email. The sharing mechanism should invoke the appropriate service on the back-end.

🔹 No Connectivity Screen:
The app must monitor connectivity with the Internet and show an appropriate screen whenever the connection is lost. This screen should remain visible as long as the device has no connection to the Internet. When a connection is regained, then the user should be at the state where it was before.

🚧 Non-Functional Requirements 🚧

🔸 Languages, Platform Targets, IDEs, Dependency Managers:
The frontend application must be developed using Javascript/CSS/HTML and node LTS. The application uses React and implements ES6+. The application is compatible with the latest version of Chrome and uses npm/yarn
