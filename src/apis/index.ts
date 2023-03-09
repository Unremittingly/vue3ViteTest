import { TokenKey } from "./constant";

export function localGet(key: string) {
  const value = window.localStorage.getItem(key);
  try {
    return JSON.parse(window.localStorage.getItem(key) || "");
  } catch (error) {
    return value;
  }
}

export function localSet(key: string, value: unknown) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function localRemove(key: string) {
  window.localStorage.removeItem(key);
}
export function localClear() {
  window.localStorage.clear();
}
export function sessionClear() {
  window.sessionStorage.clear();
}

export function getToken() {
  return localGet(TokenKey);
}
export function setToken(token: string) {
  return localSet(TokenKey, token);
}
export function removeToken() {
  return localRemove(TokenKey);
}

export const sessionSetItem = (key: string, value: any) => {
  window.sessionStorage.setItem(key, value);
};

export const sessionRemoveItem = (key: string) => {
  window.sessionStorage.removeItem(key);
};

export const getSessionItem = (key: string) => {
  return window.sessionStorage.getItem(key);
};

export const clearSession = () => {
  window.sessionStorage.clear();
};
