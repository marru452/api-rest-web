const __path = process.cwd();
const { performance } = require('perf_hooks');
const fetch = require('node-fetch');
const express = require('express');
const os = require('os');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/view/home.html');
});

router.get('/api/', (req, res) => {
    res.sendFile(__path + '/view/index.html');
});

router.get('/api/news', (req, res) => {
    res.redirect('https://raw.githubusercontent.com/Zhirrr/My-SQL-Results/main/Berita.json');
});

router.get('/api/estado', async (req, res) => {
    const startTime = performance.now();

    const date = new Date();
    const jam = date.getHours();
    const menit = date.getMinutes();
    const detik = date.getSeconds();

    const ramUsage = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(os.totalmem() / 1024 / 1024)}MB`;
    const cpuModel = os.cpus()[0].model;

    const ipResponse = await fetch('https://api.ipify.org/?format=json');
    const ipData = await ipResponse.json();

    const port = process.env.PORT || 8080 || 5000 || 3000;
    const uptime = process.uptime();
    const activeTime = muptime(uptime);

    const endTime = performance.now();
    const responseTime = `${(endTime - startTime).toFixed(2)}ms`;

    const status = {
        estado: 'online',
        memoria: ramUsage,
        cpu: cpuModel,
        puerto: port,
        ip: ipData.ip,
        fecha: `${jam} : ${menit} : ${detik}`,
        activo: activeTime,
        velocidad: responseTime,
        info: {
            owner: '@Marru',
            apikey: 'Chat: '
        }
    };

    res.json(status);
});

module.exports = router;

function muptime(seconds) {
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }

    const hours = Math.floor(seconds / (60 * 60));
    const minutes = Math.floor((seconds % (60 * 60)) / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return pad(hours) + ' : ' + pad(minutes) + ' : ' + pad(remainingSeconds);
}
