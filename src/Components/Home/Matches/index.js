import React from 'react';
import { Tag } from '../../Ui/misc';
import Blocks from './Blocks';

const MatchesHome = () => {
    return (
        <div className="home_matches_wrapper">
            <div className="container">
                <Tag
                    bck="#0e1731"
                    size="50px"
                    color="#ffffff"
                >
                    Partidas
                </Tag>

                <Blocks/>

                <Tag
                    bck="#ffffff"
                    size="22px"
                    color="#0e1731"
                    link={true}
                    linkto="/the_team"
                >
                    Veja mais partidas
                </Tag>

            </div>
        </div>
    );
};

export default MatchesHome;