// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onClickDenominations = () => {
    updateBalance(value)
  }

  return (
    <li className="list-container">
      <button
        className="button"
        type="button"
        onClick={onClickDenominations}
      >
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
