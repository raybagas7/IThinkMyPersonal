const BASE_URL = 'http://localhost:5000';

const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};

const getRefreshToken = () => {
  return localStorage.getItem('refreshToken');
};

const getCreditId = () => {
  return localStorage.getItem('creditId');
};

const putAccessToken = (accessToken) => {
  return localStorage.setItem('accessToken', accessToken);
};

const putRefreshToken = (refreshToken) => {
  return localStorage.setItem('refreshToken', refreshToken);
};

const putCreditId = (creditId) => {
  return localStorage.setItem('creditId', creditId);
};

const fetchWithToken = async (url, option = {}) => {
  return fetch(url, {
    ...option,
    headers: {
      ...option.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

const login = async ({ username, password }) => {
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

const logout = async () => {
  const refreshToken = getRefreshToken();
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
};

const register = async ({ username, password, trainer_name, email }) => {
  const response = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password, trainer_name, email }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true };
  }

  return { error: false };
};

const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  const response = await fetch(`${BASE_URL}/authentications`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ refreshToken }),
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

const getUserLogged = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data };
};

const addFirstTimeCredit = async () => {
  const response = await fetchWithToken(`${BASE_URL}/credits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    alert(responseJson.message);
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data.creditId };
};

const getCreditUser = async () => {
  const response = await fetchWithToken(`${BASE_URL}/credits`);

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null };
  }

  return { error: false, data: responseJson.data.credit };
};

const shuffleWithCoin = async () => {
  const creditId = getCreditId();
  const response = await fetchWithToken(
    `${BASE_URL}/credits/coin/pokemon/shuffle`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ creditId }),
    }
  );

  const responseJson = await response.json();

  if (responseJson.status !== 'success') {
    return { error: true, data: null, message: responseJson.message };
  }

  return { error: false, data: responseJson.data.coinAmount.coin };
};

export {
  getAccessToken,
  getRefreshToken,
  getCreditId,
  putAccessToken,
  putRefreshToken,
  putCreditId,
  login,
  logout,
  register,
  refreshAccessToken,
  getUserLogged,
  addFirstTimeCredit,
  getCreditUser,
  shuffleWithCoin,
};