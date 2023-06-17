import React from 'react'
// First props.alert will be evaluated and since initially the alert is null there will be no alert shown on the webpage

function Alert(props) {
  return (
    <div style={{height: '35px'}}>
      {props.alert && <div> <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.typ === 'success' ? 'Success' : 'Danger'}: </strong>{props.alert.msg}
        </div></div>}
    </div>
  )
}

export default Alert
