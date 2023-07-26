import React from 'react';
import UiNavbar from '../uiNavbar/UiNavbar';
import "../ui/ui.css"
import UploadFile from '../functionality/UploadFile';
import ShowFile from '../functionality/ShowFile';
export default function Folder(){
    return(
        <>
            <div>
        <UiNavbar/>
      </div>
      <div className="ui-body-container">
        <div className="ui-body-side-bar">
      <div>
        <UploadFile/>
      </div>
        </div>
        <div className="ui-body-main-wrapper" id="display">
            <ShowFile/>
        </div>
      </div>
        </>
    )
}