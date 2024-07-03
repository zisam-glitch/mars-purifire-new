import Modal from 'react-modal';

Modal.setAppElement('#root');


const FormModal = (props) => {
    const send_email_endpoint = 'http://localhost:3000/send-email';
    return (
        <div>
            <Modal
                isOpen={props.modalIsOpen}
                onRequestClose={props.closeModal}
                contentLabel="Example Modal"
                style={{
                    overlay: {
                        zIndex: 1000,
                    },
                    content: {
                        margin: "auto",
                        width: "700px",
                        height: "570px",
                    }
                }}
            >
                    <div className="contact-3_main-comment-box-wrapper bg-light-2">
                        <form className="contact-3_main-comment-box" method="POST" action={send_email_endpoint}>
                            <input type='hidden' name="product" value={props.product}/>
                            <input type='hidden' name="redirect_url" value={props.redirect_url}/>
                            <div className="contact-3_main-comment-box__form-inner">
                                <h2 className="contact-title">Send us a message</h2>
                                <div className="contact-3_main-comment-box__form-input">
                                    <input
                                        className="form-control "
                                        type="text"
                                        placeholder="Enter your full name*"
                                        name='name'
                                        required
                                    />
                                </div>
                                <div className="contact-3_main-comment-box__form-input">
                                    <input
                                        className="form-control "
                                        type="text"
                                        placeholder="Enter your phone number*"
                                        name='phone'
                                        required
                                    />
                                </div>
                                <div className="contact-3_main-comment-box__form-input">
                                    <input
                                        className="form-control "
                                        type="text"
                                        placeholder="Enter your email*"
                                        name='email'
                                        required
                                    />
                                </div>
                                <div className="contact-3_main-comment-box__form-input">
                                    <input
                                        className="form-control "
                                        type="text"
                                        placeholder="Enter quantity*"
                                        name='quantity'
                                        required
                                    />
                                </div>
                                <div className="contact-3_main-comment-box__form-input">
                      {/*<textarea*/}
                      {/*    className="form-control  textarea"*/}
                      {/*    placeholder="Write us your message here..."*/}
                      {/*    defaultValue={""}*/}
                      {/*/>*/}
                                </div>
                            </div>
                            <div className="contact-3_main-comment-box__form-input-button">
                                <button
                                    type="submit"
                                    className="btn-masco rounded-pill w-100"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
            </Modal>
        </div>
    );
}


export default FormModal;