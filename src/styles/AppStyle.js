import styled from 'styled-components';

const AppStyle = styled.div`
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
  position: relative;
  .container {
    display: flex;
    flex-flow: column;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 400px;
    border-radius: 10px;
    padding: 2em;
    color: white;
    font-family: var(--normal-font);
    min-height: 500px;
    @media (max-width: 450px) {
      width: 100%;
      height: 100%;
      border-radius: 0;
    }
    &:before {
      content: '';
      background: inherit;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      box-shadow: inset 0 0 0 3000px rgba(255, 255, 255, 0.3);
      filter: blur(10px);
    }
    p {
      display: flex;
      align-items: center;
    }
    .location {
      padding: 1em;
    }
    .info {
      background: rgba(255, 255, 255, 0.7);
      padding: 1em;
      margin: 2em 0;
      color: black;
      border-radius: 10px;
      width: 90%;
      display: grid;
      grid-template-rows: repeat(2, 2em);
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      .temperature {
        grid-column: 1 / 2;
        grid-row: 1 / -1;
        font-size: 3.5rem;
        font-family: var(--display-font);
      }
    }
    .icon {
      font-size: 15rem;
      margin: auto;
    }
    .details {
      position: absolute;
      background: white;
      bottom: 0;
      width: 100%;
      height: 8px;
      transition: height 0.5s linear;
      &.active {
        height: 70s%;
      }
      .button {
        font-size: 2rem;
        display: block;
        color: black;
        margin: auto;
        transform: translateY(-1rem);
        background: white;
        border-radius: 50% 50% 0 0;
        cursor: pointer;
        z-index: 1;
      }
    }
  }
`;

export default AppStyle;
