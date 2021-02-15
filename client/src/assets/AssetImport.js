import activeWaterIcon from './IMG-0163.PNG';
import activeEarthIcon from './IMG-0161.PNG';
import activeFireIcon from './IMG-0162.PNG';
import activeAirIcon from './IMG-0164.PNG';
import inactiveWaterIcon from './IMG-0166.PNG';
import inactiveEarthIcon from './IMG-0168.PNG';
import inactiveFireIcon from './IMG-0167.PNG';
import inactiveAirIcon from './IMG-0165.PNG';
import earthElementCard from './IMG-0141.PNG';
import waterElementCard from './IMG-0142.PNG';
import airElementCard from './IMG-0143.PNG';
import fireElementCard from './IMG-0144.PNG';
import earthShieldCard from './IMG-0146.PNG';
import fireSwordCard from './IMG-0147.PNG';
import earthStaffCard from './IMG-0148.PNG';
import windFanCard from './IMG-0149.PNG';
import waterGogglesCard from './IMG-0150.PNG';
import sightActionCard from './IMG-0151.PNG';
import privateInfoActionCard from './IMG-0152.PNG';
import elementBackCard from './IMG-0153.PNG';
import fourCornersActionCard from './IMG-0154.PNG';
import visionActionCard from './IMG-0155.PNG';
import foreknowledgeActionCard from './IMG-0156.PNG';
import destinyChangeActionCard from './IMG-0158.PNG';
import switcharooActionCard from './IMG-0159.PNG';
import rearrangeActionCard from './IMG-0160.PNG';
import title from './IMG_0126.jpg';
import royalFlute from './IMG-0169.PNG';
import campFire from './IMG-0170.PNG';
import windFlask from './IMG-0171.PNG';
import earthPot from './IMG-0172.PNG';
import windWand from './IMG-0173.PNG';
import waterPearl from './IMG-0174.PNG';
import waterLens from './IMG-0175.PNG';


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
        },
        actions: {
            sight: sightActionCard,
            privateInfo: privateInfoActionCard,
            fourCorners: fourCornersActionCard,
            vision: visionActionCard,
            foreKnowledge: foreknowledgeActionCard,
            destinyChange: destinyChangeActionCard,
            switcheroo: switcharooActionCard,
            rearrange: rearrangeActionCard
        }
    }
};

export default assets;