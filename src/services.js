import axios from "axios";
import { API_ROOT } from "./config";

const requestMethod = {
    GET: "get",
    POST: "post",
    DELETE: "delete",
    UPDATE: "put"
};

export let token = window.localStorage.getItem('jwt') || '';

const request = (method=requestMethod.GET, link, headers=null, data=null, params=null, key=null) => {
    return axios({
        url: API_ROOT+link,
        method: method,
        mode: 'cors',
        headers: {...headers},
        params: {
            key,
            ...params
        },
        data: {...data}
    })
}

const Auth = {
    login: (data) =>                    request(requestMethod.POST, "/auth/login", null, data),
    register: (data) =>                 request(requestMethod.POST, "/auth/register", null, data),
    verify: (token) =>                    request(requestMethod.GET, `/auth/verify/${token}`),
    resend: (data) =>                 request(requestMethod.POST, "/auth/resend", null, data),
    forgot: (data) =>                 request(requestMethod.POST, "/auth/forgot", null, data),
};

// const limit = (count, p) => `limit=${count}&offset=${p ? p * count : 0}`;

const Profile = {
    getUser: (token) => request(requestMethod.GET, "/api/user/me", {'Authorization': `Bearer ${token}`}),
    getMycart: (token) => request(requestMethod.GET, "/api/user/me/raffle/list", {'Authorization': `Bearer ${token}`}),
    getActiveRaffles: (token) => request(requestMethod.GET, "/api/user/me/active/raffle/list", {'Authorization': `Bearer ${token}`}),
    getClosedRaffles: (token) => request(requestMethod.GET, "/api/user/me/closed/raffle/list", {'Authorization': `Bearer ${token}`}),
    addMycart: (token, data) => request(requestMethod.POST, `/api/user/me/cart`, {'Authorization': `Bearer ${token}`}, data),
    deleteMycart: (token, id) => request(requestMethod.DELETE, `/api/user/me/cart/${id}`, {'Authorization': `Bearer ${token}`}),
    updateProfile: (token, data) => request(requestMethod.UPDATE, `/api/user/me`, {'Authorization': `Bearer ${token}`}, data),
};

const Raffle = {
    getOneRaffle: (id) => request(requestMethod.GET, `/api/raffle/active/${id}`),
    getAllActiveRaffles: () => request(requestMethod.GET, `/api/raffle/all/active/list`),
    getAllRaffles: () => request(requestMethod.GET, `/api/raffle/list`),
};

const Winner = {
    getWinners: () => request(requestMethod.GET, "/api/raffle/winners/list"),
};

const Ticket = {
    getTicketsForRaffle: (token, id) => request(requestMethod.GET, `/api/ticket/list/raffle/${id}`, {'Authorization': `Bearer ${token}`}),
    buyTickets: (data) => request(requestMethod.POST, "/auth/register", null, data),
    deleteTickets: (token) => request(requestMethod.DELETE, `/auth/verify/${token}`),
};

const Item = {
    getItem: (data) => request(requestMethod.GET, "/auth/login", null, data),
    buyItem: (data) => request(requestMethod.POST, "/auth/register", null, data),
    removeItem: (token) => request(requestMethod.DELETE, `/auth/verify/${token}`),
};

const Payment = {
    getPayment: (token) => request(requestMethod.GET, "/api/payment/history", {'Authorization': `Bearer ${token}`}),
    confirmPayment: (token, data) => request(requestMethod.POST, "/api/payment", {'Authorization': `Bearer ${token}`}, data),
    updatePayment: (token) => request(requestMethod.UPDATE, `/auth/verify/${token}`),
    removePayment: (data) => request(requestMethod.DELETE, "/auth/resend", null, data),
};

export default {
    Auth,
    Profile,
    Raffle,
    Winner,
    Ticket,
    Item,
    Payment,
    setToken: _token => {
        if (!_token) {
            window.localStorage.setItem('jwt', '');
            token = '';
        } else {
            window.localStorage.setItem('jwt', _token);
            token = _token;
            console.log("_token====>", _token)
        }
    }
};
