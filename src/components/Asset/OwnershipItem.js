import styled from 'styled-components';
import { MdOutlineContentCopy } from 'react-icons/md';
import Image from "next/image";
import { Colors } from "../Theme";

const OwnershipItemEl = styled.article`
    display: flex;
    gap: 0.5rem;
    align-items: center;
`;
const AvatarEl = styled.span`
    width: 45px;
    height: 45px;
    border-radius: 50%;
    overflow: hidden;
`;
const Info = styled.div`
    display: flex;
    flex: 1;
    gap: 0.25rem;
    flex-direction: column;
`;
const OwnerEl = styled.span`
    font-size: 0.9rem;
    color: ${Colors.Gray};
`;
const UsernameEl = styled.span`
    font-weight: 500;
`;
const AddressEl = styled.div`
    color: ${Colors.Gray};
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

export default function OwnershipItem() {
    return <OwnershipItemEl>
        <AvatarEl>
            <Image src="/images/tennis1.jpg" width="45px" height="45px"/>
        </AvatarEl>
        <Info>
            <OwnerEl>Owner</OwnerEl>
            <UsernameEl>Federer67</UsernameEl>
        </Info>
        <AddressEl>
            jshhstu6bs7wg...
            <MdOutlineContentCopy />
        </AddressEl>
    </OwnershipItemEl>;
}