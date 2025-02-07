"use client";
import { User } from "@/interfaces/auth";

export const setCurrentUser = (user: User | undefined) => {
    try {
        if (typeof window !== "undefined") {
            if (user) {
                window.localStorage?.setItem("currentUser", JSON.stringify(user));
            }
        }
    } catch (e) {
        // saving error
    }
};

export const getCurrentUser = (): User | undefined => {
    try {
        if (typeof window !== "undefined") {
            const value = localStorage?.getItem("currentUser");
            if (value !== null) {
                return JSON.parse(value);
            }
        }

        return undefined;
    } catch (e) {
        // error reading value
    }
};

export const removeCurrentUser = () => {
    try {
        if (typeof window !== "undefined") localStorage?.removeItem("currentUser");
    } catch (e) {
        // saving error
    }
};

export const setAccessToken = (token: string | undefined) => {
    try {
        if (typeof window !== "undefined") {
            if (token) window.localStorage?.setItem("accesstk", token);
        }
    } catch (e) {
        // saving error
    }
};

export const getAccessToken = () => {
    try {
        if (typeof window !== "undefined") {
            const value = window.localStorage?.getItem("accesstk");
            if (value !== null) {
                return value;
            }
        }

        return "";
    } catch (e) {
        // error reading value
    }
};

export const clearAccessToken = () => {
    if (typeof window !== "undefined")
        window.localStorage?.removeItem("accesstk");
};

export const setRefreshToken = (token: string | undefined) => {
    try {
        if (typeof window !== "undefined") {
            if (token) window.localStorage?.setItem("refreshtk", token);
        }
    } catch (e) {
        // saving error
    }
};
export const getRefreshToken = () => {
    try {
        if (typeof window !== "undefined") {
            const value = window.localStorage?.getItem("refreshtk");
            if (value !== null) {
                return value;
            }
        }

        return "";
    } catch (e) {
        // error reading value
    }
};
export const clearRefreshToken = async () => {
    if (typeof window !== "undefined")
        window.localStorage?.removeItem("refreshtk");
};

export const clearLocalStorage = async () => {
    if (typeof window !== "undefined")
        window.localStorage?.clear();
};