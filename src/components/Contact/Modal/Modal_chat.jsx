import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPhoneAlt } from "react-icons/fa";
import "./modal.css"

function Modalchat() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className="mapouter">
            <Button variant="secondary" onClick={handleShow}>
                <FaPhoneAlt />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                <p>Hello</p>

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Modalchat;