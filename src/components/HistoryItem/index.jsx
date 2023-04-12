import "./index.css"

const HistoryItem = (props) => {
    const {listItemDetails, onDeleteHistoryItem } = props
    const {id, timeAccessed, logoUrl, title,domainUrl} = listItemDetails

    const onDelete = () =>{
        onDeleteHistoryItem(id)
    }
    return(
        <li className="history-list-container">
            <div className="time-conatiner">
             <p className="history-time">{timeAccessed}</p>
            </div>
            <div className="history-destails-container">
                <div className="history-name-image-container">
                <img src={logoUrl} className="history-item-image"/>
                <div className="history-name-container">
                  <h1 className="history-title">{title}</h1>
                  <a href={domainUrl} target="_blank" className="history-domain">{domainUrl}</a>
                </div>
                </div>
                <div className="delete-button-container">
                 <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" onClick={onDelete} />
                </div>
            </div>

        </li>
    )
}

export default HistoryItem