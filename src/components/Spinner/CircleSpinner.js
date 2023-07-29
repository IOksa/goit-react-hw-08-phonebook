import { Circles } from 'react-loader-spinner';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 160px;
`;

export const CircleSpinner =()=>{

    return (
        <Container>
        <Circles
            height="80"
            width="80"
            color="#0b5394"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </Container>
        );
}
