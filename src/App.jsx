import { useState } from 'react'
import reactLogo from './assets/react.svg'
import BrowserHistory from "./components/BrowserHistory/index"
import './App.css'

const initialHistoryList = [
    {
      id: 0,
      timeAccessed: '07:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
      title: 'Instagram',
      domainUrl: 'https://instagram.com/',
    },
    {
      id: 1,
      timeAccessed: '05:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
      title: 'Twitter. It’s what’s happening / Twitter',
      domainUrl: 'https://www.twitter.com/',
    
    },
    {
      id: 2,
      timeAccessed: '04:35 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
      title: 'Facebook – log in or sign up',
      domainUrl: 'https://www.facebook.com/',
    },
    {
      id: 3,
      timeAccessed: '04:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
      title: 'LinkedIn: Log In or Sign Up',
      domainUrl: 'https://www.linkedin.com/',
    },
    {
      id: 4,
      timeAccessed: '04:00 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
      title: 'Hashnode: Everything you need to start blogging as a developer!',
      domainUrl: 'https://hashnode.com/',
    },
    {
      id: 5,
      timeAccessed: '03:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
      title: 'GitHub: Where the world builds software · GitHub',
      domainUrl: 'https://github.com/',
    },
  
    {
      id: 6,
      timeAccessed: '02:45 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
      title: 'React – A JavaScript library for building user interfaces',
      domainUrl: 'https://react.dev/',
    },
    {
      id: 7,
      timeAccessed: '01:25 PM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
      title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
      domainUrl: 'https://stackoverflow.com/',
    },
  
    {
      id: 8,
      timeAccessed: '09:25 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
      title: 'Gmail',
      domainUrl: 'https://mail.google.com/',
    },
    {
      id: 9,
      timeAccessed: '09:00 AM',
      logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
      title: 'Google',
      domainUrl: 'https://www.google.com/',
    },
    {
      id:10,
      timeAccessed: "12:00 PM",
      logoUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png",
      title:"GraphQL",
      domainUrl:"https://graphql.org/"
    },
    {
      id:11,
      timeAccessed: "02:00 PM",
      logoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFpCUs6PD5RsO4WAq3bKf9XfDbpVL1vj1pCg&usqp=CAU",
      title:"Artificial Intellegence",
      domainUrl: "https://openai.com/"
    },
    {
      id: 12,
      timeAccessed: "01:00 PM",
      logoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxMIFijUYhe_p2_4H0UhSmn3lF4b7yk7M1DA&usqp=CAU",
      title:"HTML5",
      domainUrl:"https://www.w3schools.com/html/"
    }
    
  ]
  

const App = () => <BrowserHistory initialHistoryList={initialHistoryList}/>;
 


export default App
