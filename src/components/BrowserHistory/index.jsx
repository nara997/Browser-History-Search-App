import "./index.css"
import HistoryItem from "../HistoryItem"
import { useState } from "react"

const BrowserHistory = (props) =>{
    const {initialHistoryList} = props
  const [initialHistoryLists, setInitialHistoryLists]= useState(initialHistoryList)
  const [searchInput, setSearchInput] = useState("")

  const onChangeSearchInput = (e) => {
    setSearchInput(e.target.value)
  }

  const onDeleteHistoryItem = (id) => {

  const filteredList = initialHistoryLists.filter(eachLi => eachLi.id !== id)

  setInitialHistoryLists(filteredList)
  }
   const filteredHistoryList = initialHistoryLists.filter(eachList =>(
    eachList.title.toLowerCase().includes(searchInput.toLowerCase())
   ))
   

    return (
        <div className="app-container">
            <div className="history-header">
                <img src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png" alt="app logo" className="header-image"/>
                <div className="search-container">
                 
                  <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search" className="search-logo"/>                 
                  <hr/>
                  <input type="text" placeholder="Search History" className="search-input-ele" onChange={onChangeSearchInput}/>

                </div>
                </div>
                <div className="browser-history-list-container">
                    
                       {filteredHistoryList.length == "0"? 
                         (<div className="no-history-container"><p>There is no history to show</p></div>):
                          (<ul>
                            {
                            
                             filteredHistoryList.map(eachListItem =>
                                <HistoryItem key={eachListItem.id} listItemDetails={eachListItem} onDeleteHistoryItem={onDeleteHistoryItem}/>
                                )
                            }
                          </ul>)}
                    
                
                </div>
        </div>
    )
}

export default BrowserHistory