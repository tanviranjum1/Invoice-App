import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteInvoice({ show, handleClose, confirmDeleteHandler, id }) {
  return (
    <Modal
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={handleClose}
    >
      <Modal.Body>
        <h3 id="contained-modal-title-vcenter">Confirm Deletion</h3>
        <p>
          Are you sure you want to delete invoice {id}? This action cannot be
          undone.
        </p>
        <div className="text-right">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDeleteHandler}>
            Delete
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default DeleteInvoice;
