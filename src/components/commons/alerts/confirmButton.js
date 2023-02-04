import { Fragment, useState } from "react";
import "../alerts/alertPages.css";
import Button from "../button/Button";

const ConfirmButton = ({ message, doTask, ...props }) => {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const confirmationShow = () => setShowConfirmation(true);
  const confirmationHide = () => setShowConfirmation(false);
  const handleConfirm = () => {
    confirmationHide();
    doTask();
  };
  const handleClick = confirmationShow;
  const handleCancel = () => confirmationHide();

  return (
    <Fragment>
      <Button onClick={handleClick} {...props} />
      {showConfirmation ? (
        <div className="container">
          <div className="confirmation-box">
            <div className="confirmation-text">{message}</div>
            <div className="button-container">
              <Button className="cancel-button" onClick={handleCancel}>
                Cancelar
              </Button>
              <Button className="confirmation-button" onClick={handleConfirm}>
                Confirmar
              </Button>
            </div>
          </div>
          <div className="confirmation-overlay"></div>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};
export default ConfirmButton;
