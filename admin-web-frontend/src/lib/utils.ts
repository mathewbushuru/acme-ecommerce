import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const localStorageHelpers = {
  getToken: function (): string | null {
    const token = window.localStorage.getItem("acme_admin_token");
    if (token) {
      return JSON.parse(token);
    } else {
      return null;
    }
  },
  setToken: function (token: string) {
    window.localStorage.setItem("acme_admin_token", JSON.stringify(token));
  },
  removeToken: function () {
    window.localStorage.removeItem("acme_admin_token");
  },
};
