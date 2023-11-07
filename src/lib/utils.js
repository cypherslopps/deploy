import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function getCurrentParams(paramsTitle) {
    const currentPath = window.location.href;
    const urlParams = new URLSearchParams(`?${paramsTitle}=${currentPath}`);
    const getURL = urlParams.get(paramsTitle);
    const lastParams = getURL.slice(getURL.lastIndexOf("/"), getURL.length);

    return lastParams;
}