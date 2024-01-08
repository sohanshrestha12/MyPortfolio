import styled from "styled-components";
const Wrapper = styled.section`
  height: 80vh;
  padding: 0 9rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  color: var(--text-color);
  gap: 2rem;

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
    background-image: url(https://res.cloudinary.com/dinnovag9/image/upload/v1703604603/me_ggzl8s.jpg);
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
    flex-wrap: wrap;
    gap: 2rem;
  }
  .hero-logo img {
    width: 2.2rem;
    margin-right: 1rem;
    height: 2.2rem;
  }
  .hero-button .download_cv a {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 700;
    color: var(--header-color);
    padding: 1rem 1.8rem;
  }
  .hero-logo .hero-button button:nth-child(1):hover a {
    color: white;
  }
  .hero-button {
    display: flex;
    gap: 1.6rem;
  }
  .hero-logo .hero-button button:nth-child(1) {
    font-size: 1.6rem;

    background-color: transparent;
    font-weight: 700;
    border: 2px solid var(--header-color);
    border-radius: 20px;
    color: var(--header-color);
    letter-spacing: 0.1rem;
  }
  .hero-logo .hero-button a button:nth-child(1) {
    font-size: 1.6rem;
    padding: 1rem 1.8rem;
    background-color: transparent;
    font-weight: 700;
    border: 2px solid var(--header-color);
    border-radius: 20px;
    color: white;
    background-color: var(--header-color);
    letter-spacing: 0.1rem;
  }
  .hero-logo .hero-button button:nth-child(1):hover {
    cursor: pointer;
    background-color: var(--header-color);
    color: white;
  }
  .hero-logo .hero-button a button:nth-child(1):hover {
    cursor: pointer;
    border-color: #4232a5;
    background-color: #4232a5;
    color: white;
  }
  @media only screen and (max-width: 768px) {
    gap: 2rem;
    margin-top: 3rem;
    grid-template-columns: 1fr;
    padding-left: 5rem;
    padding-right: 5rem;
    .hero-content {
      order: 2;
    }
    .blob {
      order: 1;
      height: 28rem;
      width: 28rem;
    }
    .hero-logo {
      justify-content: center;
    }
  }
`;

export default Wrapper;
