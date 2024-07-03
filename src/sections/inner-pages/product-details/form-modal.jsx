import Modal from 'react-modal';

Modal.setAppElement('#root');
// const FormModal = (props) => {
//
//     return (
//         <div>
//             <Modal
//                 isOpen={props.modalIsOpen}
//                 onRequestClose={props.closeModal}
//                 contentLabel="Example Modal"
//                 style={{
//                     overlay: {
//                         zIndex: 1000
//                     },
//                     content: {
//                         backgroundColor: '#fff',
//                         padding: '20px',
//                         borderRadius: '8px',
//                         boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//                         width: '100%',
//                         maxWidth: '500px',
//                         height: '600px',
//                         margin: 'auto',
//                     }
//                 }}
//             >
//                 <h2>Fill the form</h2>
//                 <form>
//                     <label style={{display:"flex",flexDirection:"column"}}>
//                         Name:
//                         <input type="text" name="name" style={{
//                             padding: '10px',
//                             border: '1px solid #ccc',
//                             borderRadius: '4px'
//                         }} />
//                     </label>
//                     <label style={{display:"flex",flexDirection:"column"}}>
//                         Quantity:
//                         <input type="number" name="quantity" style={{
//                             padding: '10px',
//                             border: '1px solid #ccc',
//                             borderRadius: '4px'
//                         }} />
//                     </label>
//                     <label style={{display:"flex",flexDirection:"column"}}>
//                         Email:
//                         <input type="email" name="email" style={{
//                             padding: '10px',
//                             border: '1px solid #ccc',
//                             borderRadius: '4px'
//                         }} />
//                     </label>
//                     <label style={{display:"flex",flexDirection:"column"}}>
//                         Phone Number:
//                         <input type="tel" name="phone" style={{
//                             padding: '10px',
//                             border: '1px solid #ccc',
//                             borderRadius: '4px'
//                         }} />
//                     </label>
//                     <label style={{display:"flex",flexDirection:"column"}}>
//                         Message:
//                         <textarea name="message" style={{
//                             padding: '10px',
//                             border: '1px solid #ccc',
//                             borderRadius: '4px'
//                         }}></textarea>
//                     </label>
//                     <button style={{
//                         width: '100%',
//                         padding: '10px',
//                         marginTop: '30px',
//                         backgroundColor: '#1b75bc',
//                         color: '#fff',
//                         border: 'none',
//                         borderRadius: '4px',
//                         cursor: 'pointer'
//                     }}>Submit</button>
//                 </form>
//             </Modal>
//         </div>
//     );
// }





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