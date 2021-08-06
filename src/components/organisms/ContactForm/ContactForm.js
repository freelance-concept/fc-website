import React, { useState } from 'react';
import styled from 'styled-components';
import { Formik, Field, Form } from 'formik';
import Text from '../../atoms/Text';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const FormWrapper = styled.div`
  input,
  select,
  textarea {
    border: none;
    border-bottom: 3px solid ${({ theme }) => theme.black};
    background: transparent;
    outline: none;
    padding: 10px 10px;
    font-family: ${({ theme }) => theme.fontFamilyText};
    font-size: ${({ theme }) => theme.headingS};
    margin-bottom: 50px;
  }
  input::placeholder,
  textarea::placeholder {
    color: ${({ theme }) => theme.black};
  }

  input[type='checkbox'] {
    margin: 0;
  }

  form {
    display: flex;
    flex-direction: column;

    textarea {
      width: 100%;
    }

    button {
      outline: none;
      border: 2px solid ${({ theme }) => theme.black};
      font-family: ${({ theme }) => theme.fontFamilyHeading};
      font-size: ${({ theme }) => theme.headingS};
      border-radius: 50px;
      background: transparent;
      width: 250px;
      height: 69px;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
      cursor: pointer;
      svg path {
        fill: ${({ theme }) => theme.black};
      }
      &:hover {
        background-color: ${({ theme }) => theme.black};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        color: ${({ theme }) => theme.white};

        svg path {
          fill: ${({ theme }) => theme.white};
        }
      }
    }
  }
`;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  input {
    width: 100%;
    @media (min-width: 768px) {
      width: 45%;
    }
  }
`;

const LastLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (min-width: 768px) {
    flex-direction: row;
  }
  label,
  button {
    width: 100%;
    @media (min-width: 768px) {
      width: 45%;
    }
  }
  button {
    margin-top: 30px;
    @media (min-width: 768px) {
      margin-right: 10%;
    }
  }
  label {
    position: relative;
    padding-left: 30px;
    margin-bottom: 50px;

    @media (min-width: 768px) {
      margin-bottom: 0;
    }

    input {
      position: absolute;
      top: 2%;
      left: 0;
    }
  }
`;

const RequiredInfo = styled.div`
  position: absolute;
  top: -10%;
  right: 0;

  @media (min-width: 1200px) {
    top: -20%;
  }
`;

const RequiredText = styled(Text)`
  font-size: ${({ theme }) => theme.bodyXS};
  margin: 0;
`;
const FormSubmitedInfo = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  bottom: 50px;
  left: 50%;
  width: 80%;
  max-width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, 20%);
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  z-index: 1080;

  &.formSubmitedInfo--open {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0%);
  }
`;

const FormSubmitedInfoReCaptcha = styled.div`
  visibility: hidden;
  opacity: 0;
  position: fixed;
  bottom: 50px;
  left: 50%;
  width: 80%;
  max-width: 500px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, 20%);
  background: ${({ theme }) => theme.white};
  box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.12);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.5, 1, 0.89, 1);
  z-index: 1080;

  &.formSubmitedInfo--open {
    visibility: visible;
    opacity: 1;
    transform: translate(-50%, 0%);
  }
`;

const FormSubmitedInfoButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.white};
  border: 2px solid ${({ theme }) => theme.yellow};
  border-radius: 50px;
  color: ${({ theme }) => theme.yellow};
  cursor: pointer;
  font-family: ${({ theme }) => theme.fontFamilyHeading};
`;

const LastLineReCaptcha = styled.div``;

const ContactForm = () => {
  const [openErrorMsg, setOpenErrorMsg] = useState(false);
  const [isFormSubmited, setFormSubmited] = useState(false);
  const [isRecaptchaTrue, setRecaptchaTrue] = useState(false);

  const isReCAPTCHAVerifed = () => {
    setRecaptchaTrue(true);
  };

  const isReCAPTCHAExpired = () => {
    setRecaptchaTrue(false);
  };

  return (
    <FormWrapper>
      <FormSubmitedInfo
        className={
          isFormSubmited ? 'formSubmitedInfo--open' : 'formSubmitedInfo'
        }
      >
        <Text>Pomyślnie wysłano wiadomość</Text>
        <FormSubmitedInfoButton onClick={() => setFormSubmited(false)}>
          Zamknij
        </FormSubmitedInfoButton>
      </FormSubmitedInfo>
      <FormSubmitedInfoReCaptcha
        className={openErrorMsg ? 'formSubmitedInfo--open' : 'formSubmitedInfo'}
      >
        <Text>Wypełnij pole ReCAPTCHA!</Text>
        <FormSubmitedInfoButton onClick={() => setOpenErrorMsg(false)}>
          Rozumiem
        </FormSubmitedInfoButton>
      </FormSubmitedInfoReCaptcha>
      <Formik
        initialValues={{
          firstName: '',
          email: '',
          phone: '',
          needs: '',
          message: '',
        }}
        onSubmit={(values, actions) => {
          if (!isRecaptchaTrue) {
            setOpenErrorMsg(true);
          } else {
            axios.defaults.headers.post['Content-Type'] = 'application/json';
            axios
              .all([
                axios.post(
                  'https://formsubmit.co/ajax/5fbd87b9094f144a04faa702eb1e1518',
                  {
                    name: values.firstName,
                    email: values.email,
                    phone: values.phone ? values.phone : 'Nie podano',
                    needs: values.needs,
                    message: values.message,
                  }
                ),

                axios.post(
                  'https://formsubmit.co/ajax/m.gorska@freelanceconcept.pl',
                  {
                    name: values.firstName,
                    email: values.email,
                    phone: values.phone ? values.phone : 'Nie podano',
                    needs: values.needs,
                    message: values.message,
                  }
                ),
              ])
              .then((response) => console.log('Wysłano email'))
              .catch((error) => {
                alert(
                  'Wystąpił błąd. Wyślij wiadomość ręcznie za pomocą podanego emaila'
                );
                setFormSubmited(false);
              });
            actions.setSubmitting(false);
            setFormSubmited(true);
            setOpenErrorMsg(false);
          }
        }}
      >
        <Form>
          <Line>
            <Field
              id="firstName"
              name="firstName"
              placeholder="Imię*"
              required
            />
            <Field
              id="lastName"
              name="lastName"
              placeholder="Nazwisko*"
              required
            />
          </Line>
          <Line>
            <Field
              id="email"
              name="email"
              placeholder="E-mail*"
              type="email"
              required
            />
            <Field id="phone" name="phone" placeholder="Telefon" />
          </Line>
          <Field
            component="select"
            id="needs"
            name="needs"
            placeholder="Czego potrzebujesz?*"
            required
          >
            <option>Czego potrzebujesz?*</option>
            <option>Chcę zbudować markę</option>
            <option>Chcę więcej sprzedawać</option>
            <option>Zadbajcie o moj wizerunek</option>
          </Field>
          <Field
            as="textarea"
            id="message"
            name="message"
            placeholder="Twoja wiadomość*"
            required
          ></Field>

          <LastLine>
            <label htmlFor="agreement">
              <Field
                type="checkbox"
                as="input"
                id="agreement"
                name="agreement"
                required
              />
              Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z
              ustawą o ochronie danych osobowych w związku z wysłaniem zapytania
              przez formularz kontaktowy. Podanie danych jest dobrowolne, ale
              niezbędne do przetworzenia zapytania
            </label>
            <LastLineReCaptcha>
              <ReCAPTCHA
                sitekey="6Lek2OIbAAAAAMrhaauHps7dhu_6CCOSz6HkD0hz"
                onChange={isReCAPTCHAVerifed}
                onExpired={isReCAPTCHAExpired}
                render="onload"
              />
              <button type="submit">
                Wyślij{' '}
                <svg
                  width="33"
                  height="21"
                  viewBox="0 0 33 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.5919 2.90812L25.1006 8.4375H0V12.5625H25.1006L19.6838 18L22.5919 20.9081L33 10.5L22.5 0L19.5919 2.90812Z"
                    fill="#FEDD5A"
                  />
                </svg>
              </button>
            </LastLineReCaptcha>
            <RequiredInfo>
              <RequiredText>Pola oznaczone * są obowiązkowe</RequiredText>
            </RequiredInfo>
          </LastLine>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default ContactForm;
