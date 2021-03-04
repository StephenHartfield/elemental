//icons
import activeWaterIcon from './IMG-0163.PNG';
import activeEarthIcon from './IMG-0161.PNG';
import activeFireIcon from './IMG-0162.PNG';
import activeAirIcon from './IMG-0164.PNG';
import inactiveWaterIcon from './IMG-0166.PNG';
import inactiveEarthIcon from './IMG-0168.PNG';
import inactiveFireIcon from './IMG-0167.PNG';
import inactiveAirIcon from './IMG-0165.PNG';

//elements
import earthElementCard from './IMG-0141.PNG';
import waterElementCard from './IMG-0142.PNG';
import airElementCard from './IMG-0143.PNG';
import fireElementCard from './IMG-0144.PNG';
import elementBackCard from './IMG-0153.PNG';

//items
import earthShieldCard from './IMG-0146.PNG';
import fireSwordCard from './IMG-0147.PNG';
import earthStaffCard from './IMG-0148.PNG';
import windFanCard from './IMG-0149.PNG';
import waterGogglesCard from './IMG-0150.PNG';
import royalFlute from './IMG-0169.PNG';
import campFire from './IMG-0170.PNG';
import windFlask from './IMG-0171.PNG';
import earthPot from './IMG-0172.PNG';
import windWand from './IMG-0173.PNG';
import waterPearl from './IMG-0174.PNG';
import waterLens from './IMG-0175.PNG';

//reveal
import foreknowledge from './actions/reveal/foreknowledge.jpeg';
import vision from './actions/reveal/vision.jpeg';
import fourCorners from './actions/reveal/fourcorners.jpeg';
import sight from './actions/reveal/sight.jpeg';

//arrange
import privateInfo from './actions/arrange/privateinfo.PNG';
import destinyChange from './actions/arrange/destinychange.PNG';
import switcharoo from './actions/arrange/switcheroo.PNG';
import rearrange from './actions/arrange/rearrange.PNG';
import restart from './actions/arrange/restart.PNG';

//chain
import fiftyfifty from './actions/chain/5050.PNG';
import absorbAir from './actions/chain/absorbair.PNG';
import absorbEarth from './actions/chain/absorbearth.PNG';
import absorbFire from './actions/chain/absorbfire.PNG';
import absorbWater from './actions/chain/absorbwater.PNG';
import confuse from './actions/chain/confuse.PNG';
import poisonedWell from './actions/chain/poisonedwell.PNG';
import secretWeapon from './actions/chain/secretweapon.PNG';
import sharingIsCaring from './actions/chain/sharing.PNG';

//destroy
import destroyAir from './actions/destroy/destroyair.PNG';
import destroyEarth from './actions/destroy/destroyearth.PNG';
import destroyFire from './actions/destroy/destroyfire.PNG';
import destroyWater from './actions/destroy/destroywater.PNG';
import duel from './actions/destroy/duel.PNG';
import eyeForAnEye from './actions/destroy/eyeforeye.PNG';
import interrogate from './actions/destroy/interrogate.PNG';
import roulette from './actions/destroy/roulette.PNG';

//draw
import absorb from './actions/draw/absorb.PNG';
import drawAir from './actions/draw/drawair.PNG';
import drawEarth from './actions/draw/drawearth.PNG';
import drawFire from './actions/draw/drawfire.PNG';
import drawWater from './actions/draw/drawwater.PNG';
import madman from './actions/draw/madman.PNG';
import sacrificialDraw from './actions/draw/sacrificialdraw.PNG';
import shotInTheDark from './actions/draw/shotdark.PNG';

//special
import abundance from './actions/special/abundance.jpeg';
import chance from './actions/special/chance.PNG';
import elementalSpring from './actions/special/elementalspring.PNG';
import getReady from './actions/special/getready.PNG';
import judgement from './actions/special/judgement.PNG';
import oneAndOnly from './actions/special/oneandonly.PNG';
import storm from './actions/special/storm.PNG';
import tamper from './actions/special/tamper.PNG';
import wealth from './actions/special/wealth.PNG';

import title from './IMG_0126.jpg';

const assets = {
    title,
    icons: {
        water: { active: activeWaterIcon, inactive: inactiveWaterIcon },
        earth: { active: activeEarthIcon, inactive: inactiveEarthIcon },
        fire: { active: activeFireIcon, inactive: inactiveFireIcon },
        air: { active: activeAirIcon, inactive: inactiveAirIcon }
    },
    cards: {
        elements: {
            fire: fireElementCard,
            water: waterElementCard,
            earth: earthElementCard,
            air: airElementCard,
            back: elementBackCard
        },
        items: {
            royalFlute: royalFlute,
            campFire: campFire,
            windFlask: windFlask,
            earthPot: earthPot,
            windWand: windWand,
            waterPearl: waterPearl,
            waterLens: waterLens,
            earthShield: earthShieldCard,
            fireSword: fireSwordCard,
            windFan: windFanCard,
            waterGoggles: waterGogglesCard,
            earthStaff: earthStaffCard
        }
    }
};

export default assets;

export const actions = {
    sight,
    privateInfo,
    fourCorners,
    vision,
    foreknowledge,
    destinyChange,
    switcharoo,
    rearrange,
    restart,
    fiftyfifty,
    absorbAir,
    absorbEarth,
    absorbFire,
    absorbWater,
    confuse,
    poisonedWell,
    secretWeapon,
    sharingIsCaring,
    abundance,
    chance,
    elementalSpring,
    getReady,
    judgement,
    oneAndOnly,
    storm,
    tamper,
    wealth,
    absorb,
    drawAir,
    drawEarth,
    drawFire,
    drawWater,
    madman,
    sacrificialDraw,
    shotInTheDark,
    destroyAir,
    destroyEarth,
    destroyFire,
    destroyWater,
    duel,
    eyeForAnEye,
    interrogate,
    roulette
}