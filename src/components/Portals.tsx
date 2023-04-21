import { useEffect } from "react";
import ReactDOM from "react-dom";

type portalType = {
    closeModal: () => void,
    handleCloseButton: React.ReactNode
    children: React.ReactNode
}

const Styles = {
    modalWrapper: {
        height: '100vh',
        width: '100vw',
        opacity: '0.9',
        backgroundColor: 'white',
        position: 'absolute' as const,
        left: '0',
        top: '0'
    },
    modalContainer: {
        position: 'fixed' as const,
        padding: '20px',
        backgroundColor: 'bisque',
        left:'50%',
        top: '50%',
        transform: 'translate(-50%,-50%',
        maxWidth: '30rem'

    }
}

export const Portals = ({closeModal, handleCloseButton, children} : portalType) => {


    useEffect( () => {
        document.body.style.overflowY = 'hidden';

        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [])

    return ReactDOM.createPortal( 
            <>
                <div style={Styles.modalWrapper} onClick={closeModal}> </div>
                    <div style={Styles.modalContainer}>
                        {children}
                        {handleCloseButton}
                    
                    </div>
            </>

        , document.getElementById('portal') as Element );
}