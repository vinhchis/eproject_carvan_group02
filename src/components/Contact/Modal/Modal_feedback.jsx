import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaRegAddressCard} from "react-icons/fa";
import './modal.css'

function Modalfeedback() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className="mapouter">
            <Button variant="secondary" onClick={handleShow}>
                <FaRegAddressCard/>
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <p>Hello</p>
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Modalfeedback;