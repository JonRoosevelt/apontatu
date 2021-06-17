const https = require('https')

const options = {
    hostname: 'https://app.apontatu.com.br',
    port: 443,
    path: '/ponto/gestao-apontamento/?gp=2',
    method: 'GET'
}

const getData = () => {
    let data;
    let error;

    const req = https.request(options, res => {
        console.log('status code', res.statusCode)
        res.on('data', d => data = d)
    })

    req.on('error', err => {
        error = err
    })

    req.end()

    if (data) {
        return data
    }
    return error
}

module.exports = { getData }