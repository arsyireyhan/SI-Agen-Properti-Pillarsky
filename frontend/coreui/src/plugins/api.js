import axios from "axios";

export const BACKEND_URL = 'http://127.0.0.1:8000'

// export const HOST_URL = "https://pillarsky.biz.id"
// export const BACKEND_URL = "https://api.pillarsky.biz.id"
// export const HOST_PORT = "8000"


export const api = axios.create({
    baseURL: `${BACKEND_URL}/api`,
})

//halaman yang perlu diubah juga:
//1 propertiSingle
//2 halamanfavorit
//3 propertiSingleAdmin
//4 dashboard user
//5 halaman properti
//6 cek pembayaran