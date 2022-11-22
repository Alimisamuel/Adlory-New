import React from 'react'
import logo from '../../../assets/img/logo.png'
import img from '../../../assets/img/common/modal.png'
import Modal from 'react-bootstrap/Modal';
const NewsletterModal = (props) => {
    
    return (
        <>
            <Modal show={props.show}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Body className="newsleetre_modal">
                    <div className="modal-content">
                        <div className="modal-body modal1 modal-bg">
                            <div className="row">
                                <div className="col-12">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.start}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>

                                </div>
                                <div className="col-lg-12">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-6">
                                            <div className="offer_modal_left" style={{textAlign:'center'}}>
                                                <img src={logo} alt="logo" style={{width:'150px'}}/>
                                                <h3 className='newsletterHeading' >Welcome to Adlory</h3>
                                                <h3>Any Product Not On The Website Is Out Of Stock Or Unavailable.</h3>
                                                <h3 className='newsletterHeading'>New Delivery Timelines</h3>
                                                <h3>Lagos - (3-5 Working Days)</h3>
                                                <h3>Outside Lagos - (5-7 Working Days)</h3>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-6">
                                            <div className="offer_modal_img d-none d-md-block">
                                                <img src={img} alt="img" />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default NewsletterModal