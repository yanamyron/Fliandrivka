/* дашборд де повинні бути виведені у відповідних таблицях  */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.h1`
font-family:'play',sans-serif;
font-size:1.5rem;
padding-top:3rem;
`
const Description = styled.p`
margin-bottom: 15px;
margin-top:15px;
`

const Dashboard = () => {
  const [name, setName] = useState('');
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    refreshToken();
    getUsers();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate("/");
      }
    }
  }

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
      const response = await axios.get('http://localhost:5000/token');
      config.headers.Authorization = `Bearer ${response.data.accessToken}`;
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setExpire(decoded.exp);
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  const getUsers = async () => {
    const response = await axiosJWT.get('http://localhost:5000/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    setUsers(response.data);
  }

  return (
    <div className="container mt-5">
      <Title>Welcome Back: {name}</Title>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>№</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Description>
      <Title>Гончарство</Title>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>№</th>
            <th>Дата</th>
            <th>І'мя</th>
            <th>Номер телефону</th>
            <th>Телеграм</th>
            <th>Тип заняття</th>
            <th>Як зв'язатися</th>
          </tr>
        </thead>
      </table>
        </Description>  

        <Description>
      <Title>Ліпка</Title>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
          <th>№</th>
            <th>Дата</th>
            <th>І'мя</th>
            <th>Номер телефону</th>
            <th>Телеграм</th>
            <th>Тип заняття</th>
            <th>Як зв'язатися</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
</Description>

<Description>
      <Title>Майстеркласи</Title>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>№</th>
            <th>Дата</th>
            <th>І'мя</th>
            <th>Номер телефону</th>
            <th>Телеграм</th>
            <th>Вид діяльності</th>
            <th>Як зв'язатися</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
</Description>

<Description>
      <Title>Сертифікати</Title>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>№</th>
            <th>Дата</th>
            <th>І'мя</th>
            <th>Номер телефону</th>
            <th>Телеграм</th>
            <th>Вид діяльності</th>
            <th>Тип заняття</th>
            <th>Як зв'язатися</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
</Description>      
    </div>
  )
}

export default Dashboard;
