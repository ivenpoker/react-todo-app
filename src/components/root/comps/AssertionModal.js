import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {Modal} from "react-bootstrap";

class AssertionModal extends Component {

    componentDidMount() {

    }

    render() {
        const {showModal, closeModal, databaseType} = this.props;
        return (
            <Fragment>
                <Modal show={showModal} backdrop={"static"} keyboard={false} onHide={closeModal}>
                    <Modal.Header className="bg-dark text-white-50">
                        <Modal.Title as="h5">
                            Storage Type Confirmation
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Do you want to proceed with <span className="font-weight-bold font-italic">{databaseType}</span> means of storage ?
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="btn btn-outline-dark btn-sm">
                            Accept
                        </button>
                        <button className="btn btn-danger btn-sm" onClick={closeModal}>
                            Decline
                        </button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

AssertionModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    databaseType: PropTypes.string.isRequired,
}

export default AssertionModal