import { request } from "../utils";
export const apiGetKey = () => request.get("/login/qr/key",{
    params:{
        timestamp: new Date(),
    }
});
export const apiGetQR = (key)=> request.get("/login/qr/create",{params:{
    key,
    qrimg:true,
    timestamp: new Date(),
}});
export const apiCheckLoginStatus = (key)=>request.get("/login/qr/check",{
    params:{
        key,
        timestamp: new Date(),
    }
})