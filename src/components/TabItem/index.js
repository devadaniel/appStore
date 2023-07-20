// Write your code here

import './index.css'

const TabItem = props => {
  const {tabItemDetails, updateTabItem, isActive} = props
  const {displayText, tabId} = tabItemDetails
  const tabClassName = isActive ? 'active-tab-button' : ''

  const onClickTabItem = () => {
    updateTabItem(tabId)
  }

  return (
    <li className="tab-item-list">
      <button
        type="button"
        className={`tab-button ${tabClassName}`}
        onClick={onClickTabItem}
      >
        <p className="each-tab-item">{displayText}</p>
      </button>
    </li>
  )
}

export default TabItem
