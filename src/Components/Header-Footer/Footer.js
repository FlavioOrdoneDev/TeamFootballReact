import React from 'react';
import { CityLogo } from '../Ui/icons';

const Footer = () => {
    return (
        <footer className="bck_blue">
            <div className="footer_logo">
                <CityLogo
                    Link={true}
                    linkTo="/"
                    width="70px"
                    height="70px"
                />
            </div>
            <div className="footer_disc">
                Manchester City 2019. All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;