import styled from "styled-components";
import {TennisCharities} from '../../Info';
import {Colors, Devices} from '../Theme';
import Grid from '../styled/Grid.styled';
import Link from "next/link";
import CharityCard from "../styled/CharityCard.styled";

const TopCollectiblesEl = styled.article`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    padding: 1rem;

    @media ${Devices.Tablet} {
       padding: 1rem 3rem; 
    }

    @media ${Devices.Laptop} {
       padding: 1rem 5%; 
    }

    @media ${Devices.LaptopL} {
       padding: 1rem 10%; 
    }
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 500;
`;

const TopSection = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`;

const Sort = styled.div`
    border-radius: 30px;
    border: 1px solid ${Colors.Primary};
    padding: 0.4rem 1rem;
    cursor: pointer;
`;

const Date = styled.div`
    background: linear-gradient(
    to right,
    ${Colors.Gradients.PrimaryToSec[0]},
    ${Colors.Gradients.PrimaryToSec[1]}
  );
    border-radius: 30px;
    padding: 0.4rem 2.5rem;
`;

const ShowMore = styled.button`
    margin-top: 1rem;
    cursor: pointer;
    border: 1px solid ${Colors.Primary};
    padding: 1rem 2rem;
    color: ${Colors.Primary};
    background-color: transparent;
    border-radius: 5px;
    font-size: 1rem;
`;

export default function TopCollectibles() {
    return (
    <TopCollectiblesEl>
            <Title>Top Charities</Title>
            <TopSection>
                <Sort>Sales Volume</Sort>
                <Date>Today</Date>
            </TopSection>
            <Grid>
                {TennisCharities.map(products => {
                    return (
                        <Link href="/asset" passHref>
                            <a>
                                <CharityCard item = {products} key={products.Id}/>
                            </a>
                        </Link>
                    );
                })}
            </Grid>
            <ShowMore>show more</ShowMore>
        </TopCollectiblesEl>
    )
}