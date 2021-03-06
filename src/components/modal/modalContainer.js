import styled, { keyframes } from 'styled-components'

const popUp = keyframes`
  from {
    transform: translateY(20%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const ModalContainer = styled.div`
  width: 90%;
  max-width: 760px;
  min-height: 200px;
  padding: 0 1em 1em 1em;

  background: ${props => props.theme.background};
  border: 1px solid ${props => props.theme.border};
  border-radius: .1em;

  animation: ${popUp} .3s ease-in-out;
`

export default ModalContainer
