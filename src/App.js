import React from 'react';
import { RegistrationPage } from './components/RegistrationPage';
import { LoginPage } from './components/LoginPage';
import { RestaurentList } from './components/RestaurentList';
import { RestaurentImage } from './components/RestaurentImage';
import './App.css';
import { Route } from 'react-router-dom';
import axios from "axios";
import qs from 'qs';
import { useHistory } from 'react-router-dom';
import * as Variable from './Variables';

const App = () => {
  const [mobile, setMobile] = React.useState("");
  const [image, setImage] = React.useState('');
  const [otp, setOtp] = React.useState('');
  const [token, setToken] = React.useState('');
  const [data, setData] = React.useState([]);
  const [graphData, setGraphData] = React.useState([]);
  const history = useHistory();
  const handleMobile = (e) => {
    setMobile(e.target.value);
  }

  // here , this function is used to fetch data from graphql api.
  const fetchGraphData = () => {
    axios.post(Variable.GRAPHQL_ENDPOINT, { query: Variable.QUERY }).then(
      (res) => {
        setGraphData(res.data.data.launchesPast);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  }
  const handleOTP = (e) => {
    setOtp(e.target.value);
  }
  const handleRegistration = () => {
    var data = qs.stringify({
      'phone': mobile,
      'dial_code': '+91'
    });
    var config = {
      method: 'post',
      url: 'https://staging.fastor.in:8090/v1/pwa/user/register',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        history.push('/login');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const handleLogin = () => {
    var data = qs.stringify({
      'phone': mobile,
      'otp': otp,
      'dial_code': '+91',
      '': ''
    });
    var config = {
      method: 'post',
      url: 'https://staging.fastor.in:8090/v1/pwa/user/login',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };
    axios(config)
      .then(function async(response) {
        setToken(response.data.data.token);
        fetchList(response.data.data.token);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const fetchList = (tok) => {
    var data = qs.stringify({
    });
    var config = {
      method: 'get',
      url: 'https://staging.fastor.in:8090/v1/m/restaurant?city_id=118&&',
      headers: {
        'Authorization': `Bearer ${tok}`
      },
      data: data
    };

    axios(config)
      .then((response) => {
        setData(response.data);
        history.push('/list')
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const getImage = (link) => {
    setImage(link);
    history.push('/image');
  }
  React.useEffect(() => {
    setMobile('');
    setOtp('');
    history.push('/');
    fetchGraphData();
  }, [])
  return (
    <div>
      <Route exact path="/">
        <RegistrationPage mobile={mobile} handleMobile={handleMobile} handleRegistration={handleRegistration} graphData={graphData} />
      </Route>
      <Route path="/login">
        <LoginPage otp={otp} handleLogin={handleLogin} handleOTP={handleOTP} />
      </Route>
      <Route path="/list">
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <RestaurentList data={data} getImage={getImage} />
        </div>
      </Route>
      <Route path="/image">
        <RestaurentImage image={image} />
      </Route>
    </div>
  );
}

export default App;
