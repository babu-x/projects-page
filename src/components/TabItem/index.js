import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const displayProjects = () => {
    updateTabId(tabId)
  }
  const addClassToActiveButton = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${addClassToActiveButton}`}
        onClick={displayProjects}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
