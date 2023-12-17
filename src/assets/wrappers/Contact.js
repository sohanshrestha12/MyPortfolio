import styled from "styled-components";

const Wrapper = styled.section`
  padding: 10rem 14rem;
  color: var(--text-color);
  h3 {
    color: var(--header-color);
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }
  .contact-container {
    /* display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem; */
    display: flex;
    justify-content: center;
    gap: 7rem;
    flex-wrap: wrap;
  }
  .contact-container .contact-left-container {
    flex-basis: 30%;
  }
  .contact-container .contact-right-container {
    flex-basis: 60%;
  }
  .contact-container .contact-left-container h5 {
    font-size: 2.2rem;
    color: var(--header-color);
    letter-spacing: 0.1rem;
  }
  .contact-container .contact-left-container .contact-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 2.5rem;
  }
  .contact-container
    .contact-left-container
    .contact-details
    .contact-details-heading {
    display: flex;
    color: var(--header-color);
    gap: 0.8rem;
  }
  .contact-container
    .contact-left-container
    .contact-details
    .contact-details-heading
    svg,
  .contact-container
    .contact-left-container
    .contact-details
    .contact-details-heading
    h6 {
    font-size: 2rem;
  }
  .contact-container
    .contact-left-container
    .contact-details
    .contact-details-info {
    margin-top: 1rem;
  }
  .contact-container
    .contact-left-container
    .contact-details
    .contact-details-info
    p {
    font-size: 1.6rem;
  }
  .contact-container .contact-right-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .contact-container .contact-right-container .contact-form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  .contact-container .contact-right-container input {
    padding: 0.8rem 1rem;
    font-size: 1.6rem;
    border: 2px solid var(--header-color);
    outline: none;
    color: var(--header-color);
    border-radius: 20px;
  }
  .contact-container .contact-right-container input::placeholder,
  .contact-container .contact-right-container textarea::placeholder {
    color: grey;
    letter-spacing: 0.1rem;
  }
  .contact-container .contact-right-container textarea {
    font-size: 1.6rem;
    border: 2px solid var(--header-color);
    border-radius: 20px;
    resize: none;
    outline: none;
    padding: 0.8rem 1rem;
  }
`;

export default Wrapper;
