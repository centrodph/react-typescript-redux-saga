export const apiBaseRoute = process.env.REACT_APP_API_BASE_URL;

export enum MethodType {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export const loginRoute = `/api/login`


export const createApiCall = async ({ method = 'GET', url = '', data = {}, auth = false }) => {
  return fetch(`${apiBaseRoute}${url}`, {
    body: method === 'GET' ? undefined : JSON.stringify(data),
    cache: "no-cache",
    headers: {
        "Content-Type": "application/json",
    },
    method,
  })
  .then(response => response.json())
  .then(result => result);
}

