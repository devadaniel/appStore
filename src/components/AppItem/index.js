// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {imageUrl, appName} = appDetails

  return (
    <li className="each-app-card">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="heading">{appName}</p>
    </li>
  )
}

export default AppItem
