import axios from "axios";
import "regenerator-runtime/runtime";

const params = {
    headers: {
        Authorization: "bearer " + "00ff5c331694ad7c0c9d220b7a6e95ec3d7616eac839bd59a5572c863b7378346bc7e3212cc6fb3bde0a06dacf8f6043b34cfe2decdf0d3dcd6aefaf793a1bb5f4a8a435962e7f7d53d5d8f39532054534df617de78732cc0699545ecbd91c5cb34bb934fbc7ca377b46aee8cad58b9e6db2cb62b5dc1ed252e5c4abf2c38167"
    },
};

export const fetchData = async (url) => {
    let URI = 'http://localhost:1337'
    try {
        const { data } = await axios.get(URI + url,params);
        return data
    } catch (err) {
        console.log(err);
        return err;
    }
};
