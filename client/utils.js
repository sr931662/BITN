const getImageUrl = (path) => {
    return new URL(`./assets/${path}`, 'http://192.168.29.166:8080/api/v1/').href;
}

export default getImageUrl