import React, { useContext } from "react";
import AlertContext from "context/alert/alertContext";
import { Alert } from "context/types";
const Alerts = () => {
  const alertContext = useContext(AlertContext);
  const { alerts } = alertContext;

  return (
    <div>
      {alerts
        ? alerts.map((alert: Alert) => <div key={alert.id}>{alert.alert}</div>)
        : ""}
    </div>
  );
};

export default Alerts;
