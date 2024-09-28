import React from 'react';

const DownloadCV = () => {
    return (
        <div className='download-link'>
            <a href={`${process.env.PUBLIC_URL}/images/cvSatgeDWWM_2.pdf`} download="Mon_CV.pdf"
               className="download-cv-link">
                télécharger
            </a>
        </div>
    );
};

export default DownloadCV;