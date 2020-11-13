import React, {useRef, useEffect } from 'react';
import styles from './TutorCertTypeform.css';
const typeformEmbed = require('@typeform/embed')

const TutorCertTypeform = () => {
    const typeformRef = useRef(null)

    useEffect(() => {
        typeformEmbed.makeWidget(typeformRef.current, 'https://form.typeform.com/to/zWeySP', {
            hideFooter: false,
            hideHeaders: true,
            opacity: 100
        });
    }, [typeformRef]);

    return (
        <div className="TutorCertTypeform">
            <div ref={typeformRef} style={{ height: '64vh', width: '100%'}} />
        </div>
    );
}


export default TutorCertTypeform;