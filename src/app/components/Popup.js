import Draggable from 'react-draggable';
import React from 'react'
import './Popup.css'

function Popup(props) {
    return (props.trigger) ? ( 
        <Draggable> 
            <div className='container'>
            <div class="col-12 col-lg-6 mb-4 mb-lg-0">
                <div class="card card-tertiary">
                    <div class="card-header">
                        {props.title}
                    </div>
                    <div class="card-body bg-white">
                        <p class="card-text">{props.text}</p>
                    </div>
                    <div class="card-footer">
                        <div class="d-flex">
                            <button class="btn btn-sm mr-2 btn-primary border-dark"
                                type="button" onClick={() => props.setTrigger(false)}><span class="btn-text">OK</span></button>
                            <button class="btn btn-sm btn-primary" type="button"  onClick={() => props.setTrigger(false)}><span
                                    class="btn-text">Cancel</span></button>
                        </div>
                    </div>
                </div>
            </div>
            </div>

        </Draggable>

    ) : "";
}

export default Popup