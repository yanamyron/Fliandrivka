import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './FStyle.css';

const FormBlock = styled.div`
  width: 100%;
  background-color: #f3eeea;
`;

const BackSec = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f3eeea;
  color: #002155;
  padding: 1rem;
`;

const Form = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f3eeea;
  margin-left: 30px;
`;

const LabelForItem = styled.h2`
  font-size: 1.5em;
  font-family: 'play', sans-serif;
  width: 100%;
  color: #002155;
  align-self: flex-start;
  max-width: 100%;
`;

const TitleForm = styled.h1`
  font-family: 'play', sans-serif;
  font-size: 1.5rem;
`;

const Masterclass2 = () => {
  const [formData, setFormData] = useState({
    visitorname: '',
    phonenumberv: '',
    emailvisitor: '', 
    tgvisitor: '',
    activity: '',
    formofactivity: 'individual', // Значення за замовчуванням "individual"
    howcontact: '',
    date: '',
  });

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log('Submitted');
  };

  return (
    <>
      <FormBlock>
        <BackSec>
          <Link to="/">Назад</Link>
        </BackSec>
        <Form onSubmit={onSubmitHandler}>
          <TitleForm>Форма для запису на заняття: Майстер-клас</TitleForm>
          <TitleForm>Тип: Ліпка ваз нестандартної форми</TitleForm>
          <TitleForm>Дата: 31 травня</TitleForm>

          <div className="from-group">
            <LabelForItem>Ім'я</LabelForItem>
            <input className="from-control" name="visitorname" onChange={onChangeHandler} />
          </div>

          <div className="from-group">
            <LabelForItem>Номер телефону</LabelForItem>
            <input className="from-control" name="phonenumberv" onChange={onChangeHandler} />
          </div>

          <div className="from-group">
            <LabelForItem>Email</LabelForItem>
            <input className="from-control" name="emailvisitor" onChange={onChangeHandler} />
          </div>

          <div className="from-group">
            <LabelForItem>Нік в телеграмі(* якщо є)</LabelForItem>
            <input className="from-control" name="tgvisitor" onChange={onChangeHandler} />
          </div>

          <div className="from-group">
            <LabelForItem>Тип заняття</LabelForItem>
            <div>
              <div>
                <input type="radio" name="formofactivity" value="group" onChange={onChangeHandler} />
                <label htmlFor="group">Ліпка ваз нестандартної форми</label>
              </div>
            </div>
          </div>

          <div className="from-group">
            <LabelForItem>Як з вами зв'язатися?</LabelForItem>
            <div>
              <div>
                <input type="radio" name="howcontact" value="call" onChange={onChangeHandler} />
                <label htmlFor="call">Дзвінок</label>
              </div>
              <div>
                <input type="radio" name="howcontact" value="emailmassage" onChange={onChangeHandler} />
                <label htmlFor="emailmassag">Лист на електронну почту</label>
              </div>
              <div>
                <input type="radio" name="howcontact" value="tgmassage" onChange={onChangeHandler} />
                <label htmlFor="tgmassage">Повідомлення в телеграм</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button className="btn" type="submit">Записатися</button>
          </div>
        </Form>
      </FormBlock>
    </>
  );
};

export default Masterclass2;
