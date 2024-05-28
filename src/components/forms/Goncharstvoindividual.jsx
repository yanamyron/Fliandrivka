import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormBlock = styled.div`
  width: 100%;
  background-color: #f3eeea;
  align-items: center;
  justify-content: center;
`;

const BackSec = styled.div`
  width: 100%;
  height: 50px;
  background-color: #f3eeea;
  color: #002155;
  padding: 1rem;
`;

const Form = styled.form`
  width: 80%;
  background-color: #f3eeea;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const RadioWrapper = styled.div`
  input[type="radio"][disabled] + label {
    color: #002155;
  }
`;

const Goncharstvoindividual = () => {
  const [formData, setFormData] = useState({
    visitorname: '',
    phonenumberv: '',
    emailvisitor: '', 
    tgvisitor: '',
    activity: 'gonchsrstvo', // Set the default value
    formofactivity: 'individual', // Set the default value to 'split' for "Парне"
    howcontact: '',
    date: '',
  });

  const onChangeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
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
          <TitleForm>Форма для запису на заняття</TitleForm>

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
            <LabelForItem>Дата</LabelForItem>
            <input type="date" className="from-control" name="date" onChange={onChangeHandler} />
          </div>

          <div className="from-group">
            <LabelForItem>Вид діяльності</LabelForItem>
            <RadioWrapper>
              <div>
                <input
                  type="radio"
                  name="activity"
                  value="gonchsrstvo"
                  onChange={onChangeHandler}
                  checked={formData.activity === 'gonchsrstvo'}
                  id="gonchsrstvo"
                  readOnly
                />
                <label htmlFor="gonchsrstvo">Гончарство</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="activity"
                  value="lipka"
                  onChange={onChangeHandler}
                  checked={formData.activity === 'lipka'}
                  id="lipka"
                  disabled
                />
                <label htmlFor="lipka">Ліпка</label>
              </div>
            </RadioWrapper>
          </div>

          <div className="from-group">
            <LabelForItem>Тип заняття</LabelForItem>
            <RadioWrapper>
              <div>
                <input
                  type="radio"
                  name="formofactivity"
                  value="group"
                  onChange={onChangeHandler}
                  checked={formData.formofactivity === 'group'}
                  id="group"
                  disabled
                />
                <label htmlFor="group">Групове</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="formofactivity"
                  value="split"
                  onChange={onChangeHandler}
                  checked={formData.formofactivity === 'split'}
                  id="split"
                  disabled
                />
                <label htmlFor="split">Парне</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="formofactivity"
                  value="individual"
                  onChange={onChangeHandler}
                  checked={formData.formofactivity === 'individual'}
                  id="individual"
                  readOnly
                />
                <label htmlFor="individual">Індивідуальне</label>
              </div>
            </RadioWrapper>
          </div>

          <div className="from-group">
            <LabelForItem>Як з вами зв'язатися?</LabelForItem>
            <div>
              <div>
                <input
                  type="radio"
                  name="howcontact"
                  value="call"
                  onChange={onChangeHandler}
                  checked={formData.howcontact === 'call'}
                />
                <label htmlFor="call">Дзвінок</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="howcontact"
                  value="emailmassage"
                  onChange={onChangeHandler}
                  checked={formData.howcontact === 'emailmassage'}
                />
                <label htmlFor="emailmassage">Лист на електронну пошту</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="howcontact"
                  value="tgmassage"
                  onChange={onChangeHandler}
                  checked={formData.howcontact === 'tgmassage'}
                />
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

export default Goncharstvoindividual;
