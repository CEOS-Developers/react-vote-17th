export const getPollTypes = async () => {
  try {
    const response = await fetch(process.env.API_URL + '/api/polls/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    // 에러 처리
    console.error(error);
    throw error;
  }
};

export const registerUser = async (
  name: string,
  id: string,
  email: string,
  password: string,
  team: string,
  part: string
) => {
  const data = {
    username: name,
    userid: id,
    email: email,
    password: password,
    team: team,
    part: part,
  };

  const response = await fetch(
    process.env.API_URL + '/api/accounts/register/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }
  );
  if (response.ok) {
    const responseData = await response;
    // console.log(responseData);
    return { success: true, data: responseData }; // 데이터 반환
  } else {
    const responseData = await response.json();
    return { success: false, data: responseData }; // 데이터 반환
  }
};

export const loginUser = async (id: string, password: string) => {
  const data = {
    userid: id,
    password: password,
  };

  try {
    const response = await fetch(process.env.API_URL + '/api/accounts/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const responseData = await response.json();
      return { success: true, data: responseData };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
};

export const logoutUser = async (refresh: any) => {
  const response = await fetch(process.env.API_URL + '/api/accounts/logout/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${refresh}`,
    },
  });
  console.log(response);
  if (response.ok) {
    const responseData = await response.json();
    return { success: true, data: responseData };
  } else {
    return { success: false };
  }
};

export const refreshAccessToken = async (refresh: any) => {
  const data = {
    refresh: refresh,
  };
  const response = await fetch(process.env.API_URL + '/api/accounts/refresh/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const data = await response.json();
    return data;
  }
};

export const getFrontList = async (access: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + '/api/polls/vote/part-leader/front-end/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    // 에러 처리
    console.error(error);
    throw error;
  }
};

export const pollFrontLeader = async (pollData: any, access: string) => {
  const data = pollData;
  const response = await fetch(
    process.env.API_URL + '/api/polls/vote/part-leader/front-end/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
      body: JSON.stringify(data),
    }
  );
  if (response.ok) {
    const data = await response.json();
    return { success: true, data: data };
  } else {
    return { success: false };
  }
};

export const getBackList = async (access: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + '/api/polls/vote/part-leader/back-end/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    // 에러 처리
    console.error(error);
    throw error;
  }
};

export const pollBackLeader = async (pollData: any, access: string) => {
  const data = pollData;
  const response = await fetch(
    process.env.API_URL + '/api/polls/vote/part-leader/back-end/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${access}`,
      },
      body: JSON.stringify(data),
    }
  );
  if (response.ok) {
    const data = await response.json();
    return { success: true, data: data };
  } else {
    return { success: false };
  }
};

export const getDemoList = async (access: any) => {
  try {
    const response = await fetch(
      process.env.API_URL + '/api/polls/vote/demo/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    // 에러 처리
    console.error(error);
    throw error;
  }
};

export const pollDemo = async (pollData: any, access: string) => {
  const data = pollData;
  const response = await fetch(process.env.API_URL + '/api/polls/vote/demo/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access}`,
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    const data = await response.json();
    return { success: true, data: data };
  } else {
    return { success: false };
  }
};

export const showFrontResult = async () => {
  try {
    const response = await fetch(
      process.env.API_URL + '/api/polls/part-leader/front-end/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    // 에러 처리
    console.error(error);
    throw error;
  }
};

export const showBackResult = async () => {
  try {
    const response = await fetch(
      process.env.API_URL + '/api/polls/part-leader/back-end/',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    // 에러 처리
    console.error(error);
    throw error;
  }
};

export const showDemoResult = async () => {
  try {
    const response = await fetch(process.env.API_URL + '/api/polls/demo/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Error fetching poll types');
    }
  } catch (error) {
    // 에러 처리
    console.error(error);
    throw error;
  }
};
