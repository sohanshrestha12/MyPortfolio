import styled from "styled-components";

const Wrapper = styled.section`
  padding: 0 14rem;
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
    flex-basis: 55%;
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
  .contact-container .contact-right-container form {
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
  .contact-container .contact-right-container button {
    align-self: flex-end;
    padding: 1rem 2rem;
    color: var(--secondary-bg-color);
    background-color: var(--header-color);
    border: 2px solid var(--header-color);
    border-radius: 20px;
    font-size: 1.6rem;
    font-weight: 500;
  }
  .contact-container .contact-right-container button:hover {
    background-color: #4232a5;
    border: 2px solid #4232a5;
    color: white;
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    padding-left: 2rem;
    padding-right: 2rem;
    .contact-container .contact-right-container .contact-form {
      grid-template-columns: 1fr;
    }
    .contact-container .contact-left-container {
      flex-basis: auto;
    }
  }
  .contact-success {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: #d4edda;
    margin-bottom: 2rem;
    border-radius: 5px;
    color: #155724;
    font-size: 1.4rem;
    gap:0.7rem;
    letter-spacing: 0.2rem;
    padding: 2rem;
  }
  .contact-success svg {
    font-size:1.8rem;
    font-weight:bold;   
  }
  @media only screen and (min-width: 800px) and (max-width: 1000px) {
    padding-left: 3rem;
    padding-right: 3rem;

    .contact-container .contact-left-container {
      flex-basis: auto;
    }
  }
`;

export default Wrapper;
