const https = require("https")

const url = 'https://api.darksky.net/forecast/76733e9c3ca293ed6de639d3d5bf874f/22.967,76.067'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const parsedData = JSON.parse(data)
        console.log(parsedData)
    })
})

request.end()