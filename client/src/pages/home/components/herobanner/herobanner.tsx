import { Button } from '../../../../common/components/button/button';
import './herobanner.css';

export const Herobanner = () => {
    return (
        <div className="homeHerobanner">
            <h1 className="homeHerobannerTitle">Pole emploi</h1>
            <p className="homeHerobannerSubtitle">Blog - Rapport de stage</p>
            <a href="/#articles"><Button label="Voir les articles" color="transparent" /></a>
        </div>
    )
}