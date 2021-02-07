import React from 'react';
import './Main.css';
// import './ImageLinkForm.css'

const ImageLinkForm = ({onRouteChange, routeState, onFileChange,onFileUpload}) => {
    return (
        <div>
            <h1>Welcome to GenePhase</h1>
            <p className='f3'>{'Upload a PDF or an Image of your Phase Diagram'}</p>
            <div className='centerflexx'>
                <div className= 'form centerflexx pa4 br3 shadow-5'>
                {routeState === 'home'
                ?<button className="w-40 h-30 f2 link dim br3 ph3 pv2 mb2 dib black bg-white pointer"
                onClick={() => onRouteChange('register')}>Upload</button>
                : <div><input type="file" onChange={onFileChange} />
                       <button onClick={onFileUpload}>
                  Upload!
                </button></div>
                }
                <br />
                <div className='mw6 flex justify-between'>
                    <button className='w-30 grow f3 link br3 ph3 pv2 dib white bg-blue pointer' 
                    // onClick={}
                    >Generate </button>
                    <button className='w-30 grow f3 link br3 ph3 pv2 dib pointer' 
                    // onClick={}
                    >Cancel </button></div>
                </div>
            </div>
        </div>
    )
}
export default ImageLinkForm;