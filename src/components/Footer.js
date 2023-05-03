import styled from 'styled-components';
import { BsInstagram, BsMedium, BsDiscord, BsTelegram } from 'react-icons/bs';
import { GrTwitter } from 'react-icons/gr';
import {Colors, Devices} from './Theme';

const FooterEl = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    color: ${Colors.White};
    padding: 1rem 2rem;
`;

const Socials = styled.div`
    display: flex;
    font-size: 1.5rem;
    gap: 1.5rem;
`;
const Copyright = styled.small`
    font-size: 0.9rem;
`;
const Links = styled.div`
    color: lightgray;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    @media ${Devices.Tablet} {
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }
`;

export default function Footer() {
    return <FooterEl>
        <Socials>
            <a href="#">
                <BsInstagram />
            </a>
            <a href="#">
                <GrTwitter />
            </a>
            <a href="#">
                <BsMedium />
            </a>
            <a href="#">
                <BsDiscord />
            </a>
            <a href="#">
                <BsTelegram/>
            </a>
        </Socials>
        <Copyright>
            Copyright &copy; 2022 Eco.com. All rights reserved.
        </Copyright>
        <Links>
            <a href="#">Help Center</a>
            <a href="#">T&C</a>
            <a href="#">Privacy Notice</a>
        </Links>
    </FooterEl>;
}