import styled from 'styled-components';
import {Colors, Devices} from '../Theme';
import Button from '../styled/Button.styled';

const NewsLetterEl = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    padding: 6rem 1rem;
    gap: 1rem;

    @media ${Devices.MobileL} {
        padding: 6rem 4rem;
    }

    @media ${Devices.Tablet} {
        padding: 6rem;
    }

    @media ${Devices.Laptop} {
        padding: 6rem 30%;
    }
`;
const Title = styled.h2`
    font-weight: 500;
    font-size: 5vw;
    
    @media ${Devices.Laptop} {
        font-size: 4vw;
    }
`;
const Sub = styled.span`
    font-size: 1.12rem;

`;
const Input = styled.div`
    display: flex;
    width: 100%;
    height: 3rem;

    > input {
        border: none;
        border-radius: 5px 0 0 5px;
        padding: 0.5rem 1rem;
        font-size: 1.05rem;
        flex: 1;
    }
`;
const Btn = styled(Button)`
    border-radius: 0 5px 5px 0;
    font-weight: 600;
    font-size: 1.01rem;
`;
const Text = styled.p`
    font-size: 0.85rem;
`;
const Pl = styled.a`
    color: ${Colors.Primary};
`;
const ChBox = styled.div`
    font-size: 0.85rem;

    input {
        margin-right: 1rem;
    }
`;

export default function NewsLetter() {
    return <NewsLetterEl>
        <Title>Never miss an oppurtinity to donate</Title>
        <Sub>Subsrcibe to learn more about the tennis world</Sub>
        <Input>
            <input type="email" placeholder="Email"/>
            <Btn>Subscribe</Btn>
        </Input>
        <Text>
            After reading the <Pl href="#">Privacy Notice</Pl>, you may subscribe
            for our newsletter to get special offers and occasional surveys
            delivered to your inbox. Unsubscribe at any time by clicking on the link
            in the email.
        </Text>
        <ChBox>
            <input type="checkbox" id="NewsSub" />
            <label htmlFor="NewsSub">
                By entering my email and subscribing I confirm and agree to the above.
            </label>
        </ChBox>
    </NewsLetterEl>
}