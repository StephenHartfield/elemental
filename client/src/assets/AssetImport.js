import activeWaterIcon from './IMG-0136.PNG';
import activeEarthIcon from './IMG-0135.PNG';
import activeFireIcon from './IMG-0134.PNG';
import activeAirIcon from './IMG-0133.PNG';
import inactiveWaterIcon from './IMG-0140.PNG';
import inactiveEarthIcon from './IMG-0139.PNG';
import inactiveFireIcon from './IMG-0138.PNG';
import inactiveAirIcon from './IMG-0137.PNG';
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
            earthShield: earthShieldCard,
            fireSword: fireSwordCard,
            windFan: windFanCard,
            waterGoggles: waterGogglesCard,
            earthStaff: earthStaffCard
        },
        actions: {
            sight: sightActionCard,
            privateInfo: privateInfoActionCard
        }
    }
};

export default assets;