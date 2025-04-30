export const api = async (endpoint: string, options: RequestInit = {}) => {
  try {
    const response = await fetch(`http://localhost:3001/${endpoint}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

