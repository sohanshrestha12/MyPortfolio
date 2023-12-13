import styled from "styled-components";
const Wrapper = styled.section`
  height: 80vh;
  width: 100vw;
  padding: 0 9rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  color: var(--text-color);

  .hero-content p:nth-child(1) span {
    letter-spacing: 1px;
    font-size: 1.6rem;
    font-weight: 500;
    color: grey;
  }
  .hero-content p:nth-child(2) {
    word-spacing: 0.5rem;
    letter-spacing: 0.3rem;
    font-size: 3.5rem;
  }
  .hero-content p:nth-child(2) span {
    word-spacing: 0.5rem;
    letter-spacing: 0.3rem;
    font-weight: 700;
    font-size: 3.8rem;
  }
  .hero-content p:nth-child(3) {
    margin-top: 1.5rem;
    word-spacing: 0.2rem;
    letter-spacing: 0.1rem;
    font-size: 1.8rem;
  }
  .blob {
    background-image: url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 38rem;
    height: 38rem;
    box-shadow: 0 2px 5px 5px var(--header-color);
    animation: animate 5s ease-in-out infinite;
    transition: all 1s ease-in-out;
  }
  @keyframes animate {
    0%,
    100% {
      border-radius: 60% 40% 30% 70% /60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40% /50% 60% 30% 60%;
    }
  }
  .hero-logo {
    display: flex;
    margin-top: 1.8rem;
    justify-content: space-between;
    align-items: center;
  }
  .hero-logo img {
    width: 2.2rem;
    margin-right: 1rem;
    height: 2.2rem;
  }
  .hero-button{
    display:flex;
    gap: 1.6rem;
  } 
  .hero-logo .hero-button button:nth-child(1) {
    font-size: 1.6rem;
    padding: 1rem 1.8rem;
    background-color: transparent;
    font-weight: 700;
    border: 2px solid var(--header-color);
    border-radius: 20px;
    color: var(--header-color);
    letter-spacing: 0.1rem;
  }
  .hero-logo .hero-button button:nth-child(2) {
    font-size: 1.6rem;
    padding: 1rem 1.8rem;
    background-color: transparent;
    font-weight: 700;
    border: 2px solid var(--header-color);
    border-radius: 20px;
    color:white;
    background-color: var(--header-color);
    letter-spacing: 0.1rem;
  }
  .hero-logo .hero-button button:nth-child(1):hover{
    cursor: pointer;
    background-color:var(--header-color);
    color:white;
  }
  .hero-logo .hero-button button:nth-child(2):hover{
    cursor: pointer;
    background-color:white;
    color:var(--header-color);
  }
`;

export default Wrapper;
