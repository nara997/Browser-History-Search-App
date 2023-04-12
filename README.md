# Browser-History-Search-App(Static List)
a brief overview of the application and its features.

The application is a browser history tracker that displays a list of websites visited along with their logos, titles, domain URLs, and timestamps. 
The user can add new entries to the list, filter the list by website name, and sort the list based on the user search.

The application is built using ReactJS, a popular front-end JavaScript library. The data is stored in an array of objects that is initialized with some sample data. 
When the user adds a new entry, a new object is added to the array.

The user interface consists of two main components: the BrowserHistoryList and the BrowserHistoryItem. 
The BrowserHistoryList component is responsible for rendering the list of entries and providing filtering and sorting functionality. 
The BrowserHistoryItem component is responsible for rendering each individual entry in the list.

The application uses CSS for styling and has a responsive design that works on desktop and mobile devices. 
The logos for the websites are fetched from the internet using their URLs and displayed in the list. 
When the user clicks on a website entry, the website is opened in a new tab.
