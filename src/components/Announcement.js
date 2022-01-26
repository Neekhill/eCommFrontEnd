import styled from 'styled-components';

const Container = styled.div`
    height: 25px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight:500;

`
function Announcement() {
    return (
        <>
            <Container>Super Deal!! free shipping on orders above Rs.2000</Container>
        </>
    )
}

export default Announcement