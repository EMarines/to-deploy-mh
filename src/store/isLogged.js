import { writable  } from "svelte/store";

export const isLogged = writable(false);

export const isAuth = writable(false);

// export const  credentials = writable({
//    email: "",
//    password: "",
//  });