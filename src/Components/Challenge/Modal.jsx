// Implement a modal popup component that can be triggered to open or close. Customize the content of the modal and add a button to open and close it.

import React, {useState} from 'react';
import '../../modal.css'
const Modal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = ()=>{
        setIsModalOpen(true);
    }
    const closeModal  =()=>{
        setIsModalOpen(false);
    }
    return (  
        <section className='landing-section'>
            <div className="row container">
                <h1 className='landing-heading'>React Modal</h1>
                <div className='d-flex justify-content-center'>
                    <button className='btn btn-primary' onClick={openModal}>
                        Click me to see the modal!
                    </button>
                </div>
                <div className='modal-div'>
                {
                    isModalOpen && <div className="custom-modal">
                        <h2 className='modal-heading'>
                            Custom Modal Content
                        </h2>
                        <p className='modal-para'>
                            This is a simple modal example.
                        </p>
                        <button className='btn btn-danger' onClick={closeModal}>
                            Close Modal
                        </button>
                    </div>
                }
                </div>
            </div>
        </section>
    );
};

export default Modal;
