import React from 'react'
import EditEquipmentInfo from './editEquipmentInfo.jsx'

const EquipmentInfo = ( {equipment, currId, onEquipmentClick, worker} ) => {

  const listItems = Object.keys(equipment).map(function (key) {
    // console.log('asfasdf')
    return (
      <div
        className={equipment[key] ? "col-xs-6 col-sm-4 col-md-3 col-lg-2 checked no-padding" : "col-xs-6 col-sm-4 col-md-3 col-lg-2 no-padding"}
        key={key}
      >
      <div className={equipment[key] ? "service-entry checked" : "service-entry"}>
        {equipment[key]
          ? <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
          : <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> }
        {' ' + key}
      </div>
      </div>
    )
  })

  return (
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h4 className="panel-title">Available Equipment
          { currId === worker._id
            ? <EditEquipmentInfo onEquipmentClick={onEquipmentClick} />
            : console.log(`${currId} doesn't match ${worker._id}`)}
        </h4>
      </div>
      <div className="panel-body">
        <div className="container-fluid">
        {listItems}
        </div>
      </div>
    </div>
  )
}

export default EquipmentInfo
