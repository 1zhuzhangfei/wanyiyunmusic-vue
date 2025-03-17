import { request } from "../utils";

export const getHomeData = () => request.get("/homepage/block/page",{
    params:{
        noCookie: true,
    }
});