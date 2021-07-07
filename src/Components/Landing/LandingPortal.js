import React from 'react';
import '../../css/landing.css'

//Components
import DefaultLanding from './DefaultLanding';
import AuthPortal from '../Auth/AuthPortal';
import Footer from '../Footer/Footer';

function LandingPortal() {
    return (
        <div className="landingPortal">
            <DefaultLanding AuthPortal={AuthPortal}/>
            <Footer />
        </div>
    )
}

export default LandingPortal
