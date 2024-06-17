import React from "react";
import "./DownloadSection.css";
//import appStoreImage from '../assets/app-store.png'; // Ensure to have this image in the assets folder
//import playStoreImage from '../assets/play-store.png'; // Ensure to have this image in the assets folder
import qrcode from "./qrcode.jpg"; // Adjust path to your image accordingly

function DownloadSection() {
  //   const handleDownload = (store) => {
  //     if (store === 'appstore') {
  //       window.location.href = 'https://www.apple.com/app-store/';
  //     } else if (store === 'playstore') {
  //       window.location.href = 'https://play.google.com/store';
  //     }
  //   };

  return (
    <div>
      <div className="download-section">
        <div className="quarter-section">
          <img src={qrcode} alt="Promotional" /> {/* Replace with your image */}
        </div>
        <div className="three-quarters-section">
          <h1>Start your Kamai now</h1>
          <div className="button-container">
            <button
              id="appstore-button"
              className="download-button"
              /*  onClick={() => handleDownload('appstore')}  */
            >
              {/*  <img src={appStoreImage} alt="Download from Appstore" /> */}
              Download from playstore
            </button>
            <button
              id="playstore-button"
              className="download-button"
              //  onClick={() => handleDownload('playstore')}
            >
              {/*   <img src={playStoreImage} alt="Download from Playstore" /> */}
              Download from Appstore
            </button>
          </div>
        </div>
      </div>
      <div>
      </div>
    </div>
  );
}

export default DownloadSection;
