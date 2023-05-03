import styled from 'styled-components';
import Image from 'next/image';
import {Colors, Devices} from './Theme';
import {BsInstagram, BsFillPatchCheckFill} from 'react-icons/bs';
import {GrTwitter} from 'react-icons/gr';
import CharityCard from './styled/CharityCard.styled';
import Grid from './styled/Grid.styled';
import Head from 'next/head';
import Tabs from './styled/Tabs.styled';
import Tab from './styled/Tab.styled';
import { TennisCharities } from '../Info';

const ProfileEl = styled.article`
    background-color: ${Colors.White};
    color: ${Colors.Black};
    display: flex;
    flex-direction: column;
`;
const Cover = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 200px;

    @media ${Devices.Laptop} {
        height: 300px;
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    gap: 2rem;

    @media ${Devices.Laptop} {
        flex-direction: row;
    }
`;
const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    @media ${Devices.Laptop} {
        max-width: 25vw;
        align-items: flex-start;
    }
`;
const Avatar = styled.span`
    transform: translateY(-50%);
    border: 5px solid ${Colors.White};
    border-radius: 50%;
    overflow: hidden;
    width: 150px;
    height: 150px;
    background: ${Colors.White};
`;
const Name = styled.h1`
    margin-top: -50px;
    margin-bottom: 0.5rem;
`;
const Username = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 1.1.rem;
    margin-bottom: 2rem;

    > svg {
        font-size: 1.5rem;
        color: ${Colors.Primary};
        margin-right: 0.5rem;
    }
`;
const Bio = styled.p`
    white-space: pre-wrap;
    font-size: 0.95rem;
    margin-bottom: 1rem;
`;
const Socials = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media ${Devices.Laptop} {
        justify-content: flex-start;
    }
`;
const Stats = styled.div`
    width: 100%;
    border-top: 1px solid ${Colors.Border};
    border-bottom: 1px solid ${Colors.Border};
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-content: center;
`;
const StatItem = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
`;
const StatTitle = styled.span`
    color: ${Colors.Gray};
`;
const StatValue = styled.span`
    font-weight: 500;
`;

const AllTabs = [
    { Id: 1, Title: `Collectibles`, Content: <Grid>{TennisCharities.map((ch) => {
        return <CharityCard key={ch.Id} item={ch}/>
    })}
    </Grid>},
    { Id: 2, Title: 'Selling', Content: <Tab />},
    { Id: 3, Title: 'Created', Content: <Tab />},
    { Id: 4, Title: 'Liked', Content: <Tab />},
]

export default function Profile({ username="tennisguy145"}) {
    return <ProfileEl>
        <Head>
            <title>Tennis Marketplace - {username}</title>
        </Head>
        <Cover>
            <Image src="/images/tennis2.jpg" layout="fill"/>
        </Cover>
        <Content>
            <Info>
                <Avatar>
                    <Image src="/images/tennis3.jpg" layout="fill" />
                </Avatar>
                <Name>Tennisguy145</Name>
                <Username>
                    <BsFillPatchCheckFill/>
                    Tennisguy145
                </Username>
                <Bio>
                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    `}
                </Bio>
                <Socials>
                    <a href="#">
                        <GrTwitter/>
                    </a>
                    <a href="#">
                        <BsInstagram/>
                    </a>
                </Socials>
                <Stats>
                    <StatItem>
                        <StatTitle>Likes</StatTitle>
                        <StatValue>3.8k</StatValue>
                    </StatItem>
                    <StatItem>
                        <StatTitle>Views</StatTitle>
                        <StatValue>84K</StatValue>
                    </StatItem>
                    <StatItem>
                        <StatTitle>Created</StatTitle>
                        <StatValue>12</StatValue>
                    </StatItem>
                    <StatItem>
                        <StatTitle>Minted</StatTitle>
                        <StatValue>1.2k</StatValue>
                    </StatItem>
                </Stats>
            </Info>
            {/* Tabs */}
            <Tabs data={AllTabs} mt="2rem"/>
        </Content>
    </ProfileEl>
}