import styled from 'styled-components';
import Image from "next/image";
import { Colors, Devices } from "./Theme";
import {HiOutlineExternalLink} from 'react-icons/hi';
import {AiFillCaretLeft} from 'react-icons/ai';
import {IoMdShareAlt} from 'react-icons/io';
import { BsHeart, BsFillEyeFill, BsThreeDots } from 'react-icons/bs';
import Tab from './styled/Tab.styled';
import Tabs from './styled/Tabs.styled';
import Head from "next/head";

const AssetEl = styled.article`
    background-color: ${Colors.White};
    color: ${Colors.Black};
    padding: 1rem;
    display: flex;
    flex-direction: column;

    @media ${Devices.Laptop} {
        padding: 1rem 15%;
    }
`;
const SectionContainer = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;

    @media ${Devices.Laptop} {
        flex-direction: row;
    }
`;
const LeftSection = styled.div`
    display: flex;
    flex: 0.7rem;
    flex-direction: column;
    gap: 1rem;
`;
const ImageEl = styled.div`
    border-radius: 30px;
    overflow: hidden;
`;
const ChainLink = styled.a`
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    font-weight: 500;
    align-items: center;
    border: 1px solid ${Colors.Border};
    padding: 1.5rem 1rem;
`;
const RightSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
    flex: 0.95;
`;
const BackBtn = styled.span``;
const TopBtns = styled.div``;
const LikesBtn = styled.div``;
const ViewsEl = styled(LikesBtn)``;
const ShareBtn = styled(LikesBtn)``;
const MoreBtn = styled(LikesBtn)``;
const AuthorContainer = styled.div``;
const AvatarEl = styled.div``;
const CreatorLabel = styled.label``;
const UsernameEl = styled.span``;
const EditionEl = styled.span``;
const Title = styled.h1``;
const Marketplace = styled.span``;
const AcOfferLabel = styled.span``;
const Des = styled.p``;
const TagContainer = styled.div``;
const Tag = styled.span``;

const AllTabs = [
    {Id: 1, Title: "Ownership", Content: <div>1</div>},
    {Id: 2, Title: "History", Content: <div>1</div>},
    {Id: 3, Title: "Bids", Content: <div>1</div>},
    {Id: 4, Title: "Offers", Content: <div>1</div>}
]

export default function Asset() {
    return <AssetEl>
        <Head>TENNIS</Head>
        <SectionContainer>
            <LeftSection>
                <ImageEl>
                    <Image src="/images/tennis2.jpg" layout='responsive' width="1000px" height="1000px"/>
                </ImageEl>
                <ChainLink>View Tennis.com <HiOutlineExternalLink/></ChainLink>
            </LeftSection>
            <RightSection>
                <BackBtn>
                    <AiFillCaretLeft />
                    Bacl
                </BackBtn>
                <TopBtns>
                    <LikesBtn>
                        <BsHeart />
                        710
                    </LikesBtn>
                    <ViewsEl>
                        <BsFillEyeFill/>
                        16177
                    </ViewsEl>
                    <ShareBtn>
                        <IoMdShareAlt/>
                        Share
                    </ShareBtn>
                    <MoreBtn>
                        <BsThreeDots />
                    </MoreBtn>
                </TopBtns>
                <AuthorContainer>
                    <AvatarEl>
                        <Image src="/images/tennis1.jpg" width="50px" height="50"/>
                    </AvatarEl>
                    <span>
                        <CreatorLabel>Creator</CreatorLabel>
                        <UsernameEl>Tennisguy1123</UsernameEl>
                    </span>
                </AuthorContainer>
                <EditionEl>371 Editions Minted</EditionEl>
                <span>
                    <Title>KING FEDERER</Title>
                    <Marketplace>Marketplace</Marketplace>
                </span>
                <AcOfferLabel>Accepting Offers</AcOfferLabel>
                <Des>LOREM USUSUSUSUSUSUS</Des>
                <TagContainer>
                    <Tag>Tennis</Tag>
                </TagContainer>
                <Tabs mt="1rem" data={AllTabs} />
            </RightSection>
        </SectionContainer>
    </AssetEl>;
}