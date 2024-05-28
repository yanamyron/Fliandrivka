import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SectionRev = styled.div`
  width: 100%;
  height: 60vh;
  background-color: #f3eeea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;

const TitleRev = styled.h1`
  font-size: 2rem;
  color: #002155;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #002155;
  width: fit-content;
  font-family:'play',sans-serif;
  margin-bottom: 3rem;
`;

const RevContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  border-radius:10px;
`;

const ReviewCard = styled.div`
  background-color: #002155;
  color: #f3eeea;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 0px;
  margin: 0 10px;
  overflow: hidden;
`;

const ReviewContent = styled.div`
  max-width: 100%;
  overflow: auto;
  margin-top: 50px;
`;

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    сolor:'#002155',
  };

  return (
    <SectionRev id="reviews">
      <TitleRev>Ваші відгуки</TitleRev>
      <RevContainer>
        <Slider {...settings}>
          {data.map((d, index) => (
            <ReviewCard key={index}>
              <div>
                <p>{d.name}</p>
                <ReviewContent>
                  <p>{d.review}</p>
                </ReviewContent>
              </div>
            </ReviewCard>
          ))}
        </Slider>
      </RevContainer>
    </SectionRev>
  );
}

const data = [
  {
    name: `Вікторія`,
    review: `Чудова студія.
         Проводять майстер класи для дітей від 9 років. Відвідали один з таких 
         й малеча була в захваті!`,
  },
  {
    name: `Олег`,
    review: `Спробувши себе в студії гончарства, я відкрив для себе цілковито новий світ творчості та майстерності. 
    Процес роботи з глиною виявився неймовірно захоплюючим та релаксуючим одночасно.
    Кожен повинен спробувати хоч раз в житті `,
  },
  {
    name: `Максим`,
    review: `Спочатку було дуже незвично формувати виріб на гончарому станку, але 
         неймовірні майстри пояснили як це краще робити й накидали лайфкаків по ліпці .
         Безсумніву відвідаю студію знову й не один раз )`,
  },
  {
    name: `Юрій`,
    review: ` Робота з глиною виявилася захоплюючою та релаксуючою одночасно. 
    Майстри допомогли швидко вникнути в процес та зробити багато самотужки.На майстер-класі
    була неймовірна атмосфера. Настільки неймовірна що я вже записася на наступне заняття`,
  },
  {
    name: `Артем`,
    review: `  Я відвідав студію гончарства і зробив кілька надзвичайних виробів. 
    Спочатку було незвично, але тепер відчуваю себе як риба в воді з допомогою 
    та підтримною майстрів `,
  },
  {
    name: `Анонім`,
    review: ` Чудова річ аби скрасити будні й вихідні.Роботи майстрів
    вражаючі.`,
  },
  {
    name: `Людмила`,
    review: ` Радіє можливість організувати майстер-клас для дітей 
    старше 9-ти років. Діти в захваті,але шкода,що студія не може на 
    раз прийняти цілий клас дітей за раз.`,
  },
  {
    name: `Оля`,
    review: `Це вперше бачу аби творчі студії були пет-френдлі й дуже 
    приємно здивована. Щаслива, що змогла відвідти ваші заняття.`,
  },
  
];

export default Reviews;
