import React from 'react';
import {
    CoalitionFlag,
    GaennanFlag,
    IntersystemFlag,
    IsharaFlag,
    EmpyreanFlag,
    ThresholdFlag,
    WelcomeHome,
    Informational,
    SpDivLeft, SpDivRight, SpH1Right, SpH1Left, SpSubtextR, SpSubtextL, SpText,
} from '../styles/WelcomeStyling';

export default class UniverseGuest extends React.Component {
    render() {
        return (
            <WelcomeHome>
                <SpDivLeft>
                    <IntersystemFlag />
                    <Informational>
                        <SpH1Right>Intersystem Alliance</SpH1Right>
                        <SpSubtextR>
                            "Generigood is Generic."
                        </SpSubtextR>
                        <SpText>
                            The oldest and third-largest star-nation in the human sphere.
                        </SpText>
                    </Informational>
                </SpDivLeft>
                <SpDivRight>
                    <CoalitionFlag />
                    <Informational>
                        <SpH1Left>People's Coalition</SpH1Left>
                        <SpSubtextL>
                            "Gerpano Soviets in spaaaaace."
                        </SpSubtextL>
                        <SpText>
                            The largest star-nation, the Coalition is a nationalist socialist-democracy juggernaut
                            growing in both power and ambition.
                        </SpText>
                    </Informational>
                </SpDivRight>
                <SpDivLeft>
                    <ThresholdFlag />
                    <Informational>
                        <SpH1Right>Meritocracy of the Threshold</SpH1Right>
                        <SpSubtextR>
                            "Your actions are all that matter. And the bleepboop."
                        </SpSubtextR>
                        <SpText>
                            A meritocratic government with close ties to the Intersystem Alliance, the Threshold is
                            a nation unto its own. Prising scientific advancement and public service, Thresholders
                            provide a strong Galactic-Western presence to their interstellar neighbors: the Gaennid
                            Empire to their Galactic-North, and the People's Coalition to their Galactic-East.
                        </SpText>
                    </Informational>
                </SpDivLeft>
                <SpDivRight>
                    <EmpyreanFlag />
                    <Informational>
                        <SpH1Left>Holy Dominion of the Empyrean See</SpH1Left>
                        <SpSubtextL>
                            "The Space Catholics will crusade again."
                        </SpSubtextL>
                        <SpText>
                            The second-largest star-nation and dogmatic dictatorship of the Holy Empyrean Church.
                        </SpText>
                    </Informational>
                </SpDivRight>
                <SpDivLeft>
                    <IsharaFlag />
                    <Informational>
                        <SpH1Right>Kingdom of Ishara</SpH1Right>
                        <SpSubtextR>
                            "Check out our fancy boats."
                        </SpSubtextR>
                        <SpText>
                            The nomadic family-centric tribes at the heart of the galactic north.
                        </SpText>
                    </Informational>
                </SpDivLeft>
                <SpDivRight>
                    <GaennanFlag />
                    <Informational>
                        <SpH1Left>Empire of Gaennan</SpH1Left>
                        <SpSubtextL>
                            Gaennan: im gonna nuke the planet / Everyone: dont nuke the planet / Gaennan: toO LaTE
                        </SpSubtextL>
                        <SpText>
                            An honor-based monarchy with a violent past.
                        </SpText>
                    </Informational>
                </SpDivRight>
            </WelcomeHome>
        );
    };
};