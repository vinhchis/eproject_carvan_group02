import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaSearchLocation } from "react-icons/fa";
import './modal.css'

function Modallocation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className="mapouter">
            <Button variant="secondary" onClick={handleShow}>
                <FaSearchLocation />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className="gmap_canvas">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7837.17054996869!2d106.710377!3d10.843016000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175275a17921385%3A0x611c4f631f47c4d0!2zS2h1IMSRw7QgdGjhu4sgVuG6oW4gUGjDumMgQ2l0eQ!5e0!3m2!1svi!2sus!4v1695736455698!5m2!1svi!2sus" height={500} width="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>

                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Modallocation;