import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type FetchBaseQueryError } from "@reduxjs/toolkit/query";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isServerErrorResponse(
  error: unknown,
): error is FetchBaseQueryError {
  return (
    typeof error === "object" &&
    error !== null &&
    "status" in error &&
    "data" in error &&
    !("error" in error)
  );
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
