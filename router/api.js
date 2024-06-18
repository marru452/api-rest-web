__path = process.cwd()
const express = require('express');
var db = require(__path + '/src/db');

try {
var kuhong = db.get('ojan'); 
} catch (e) {
	console.log('WELCOME TO MY API!') 
}


var creator = "@Marru";
var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var Bochi = require('@bochilteam/scraper')

var fetch = require('node-fetch');
var cheerio = require('cheerio');
var axios = require('axios');
var request = require('request');
var router  = express.Router();


var { 
    color, 
    bgcolor 
} = require(__path + '/lib/color.js');
var { getBuffer } = require(__path + '/lib/functions.js');
var options = require(__path + '/lib/options.js');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter apikeys',
        getApikey: 'Apikey??? Contact Me On WhatsApp'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter text2'
    },
    notnabi: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter nabi'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
    },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'Apikey??? Contact Me On WhatsApp'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        msg: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        msg: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        msg: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        msg: '${e}'
    }
}

const listkey = ["Marru", "Hideki", "Kasumi", "Limoncio"];


var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------MHAPI'+'MH--APIREST';

        router.get('/cekapikey', async (req, res, next) => {
            var apikeyInput = req.query.apikey
            if(!apikeyInput) return res.json(loghandler.notparam)
            a = await cekApiKey(apikeyInput)
            if (a) {
            json = JSON.stringify({
                status: true,
                creator: creator,
                result: {
                    status:a.status,
                    id: a._id,
                    apikey: a.apikey,
                    more_info: {
                        email: a.email,
                        nomor_hp: a.nomor_hp,
                        name: a.name,
                        age: a.age,
                        country: a.country,
                        exp:a.exp,
                    },
                },
                smg: `jangan lupa follow ${creator}`
            })
        } else {
            json = JSON.stringify({
                status: false
            })
        }
        res.send(JSON.parse(json))
        })
        
        router.get('/addapikey', (req, res, next) => {
            var apikey = req.query.apikey,
                status = req.query.status,
                apikeyInput  = req.query.apikeyInput,
                email = req.query.email,
                nomorhp = req.query.nomorhp
                name = req.query.name,
                age = req.query.age,
                country = req.query.country;
                exp = req.query.exp;
        
            if (!apikey) return res.json(loghandler.notparam)
            if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
            if (apikey != 'Limoncio') return res.json(loghandler.invalidKey)
        
            try {
                zahirr.insert({
                    status: status,
                    apikey: apikeyInput,
                    email: email,
                    nomor_hp: nomorhp,
                    name: name,
                    age: age,
                    country: country,
                    exp: exp
                })
                .then(() => {
                      res.json({
                          status: true,
                          creator: `${creator}`,
                          result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
                      })
                })
            } catch (e) {
                console.log(e)
                res.json(loghandler.error)
            }
        })
        
        router.get('/remove', (req, res, next) => {
            var apikey = req.query.apikey,
                status = req.query.status,
                apikeyInput  = req.query.apikeyInput,
                email = req.query.email,
                nomorhp = req.query.nomorhp
                name = req.query.name,
                age = req.query.age,
                country = req.query.country;
                exp = req.query.exp;
        
            if (!apikey) return res.json(loghandler.notparam)
            if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
            if (apikey != 'Limoncio') return res.json(loghandler.invalidKey)
        
            try {
                zahirr.remove({
                    status: status,
                    apikey: apikeyInput,
                    email: email,
                    nomor_hp: nomorhp,
                    name: name,
                    age: age,
                    country: country,
                    exp: exp
                })
                .then(() => {
                     res.json({
                          status: true,
                          creator: `${creator}`,
                          result: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
                      })
                })
            } catch (e) {
                console.log(e)
                res.json(loghandler.error)
            }
        })

        
        //NSFW
        router.get('/nsfw/neko', async (req, res) => {
            const apikeyInput = req.query.apikey;
          
            if (!apikeyInput) return res.json(loghandler.notparam);
            if (apikeyInput !== 'Limoncio') return res.json(loghandler.invalidKey);
          
            try {
              const response = await axios.get('https://api.waifu.pics/nsfw/neko');
              const data = response.data;
          
              if (data.url) {
                const imageUrl = data.url;
                const buffer = await getBuffer(imageUrl);
          
                res.writeHead(200, {
                  'Content-Type': 'image/jpeg', // You might need to change this to 'image/png' depending on the image type
                  'Content-Length': buffer.length
                });
                res.end(buffer);
              } else {
                res.json(loghandler.maintenance);
              }
            } catch (e) {
              console.error(`Error: ${e.smg}`);
              res.json(loghandler.error + e);
            }
          });
        ///NSFW END

        // ANIME //
        router.get('/anime/waifu', async (req, res) => {
            const apikeyInput = req.query.apikey;
          
            try {
            if (!apikeyInput) return res.json(loghandler.notparam);
            if (apikeyInput !== 'Limoncio') return res.json(loghandler.invalidKey);

              const response = await axios.get('https://api.waifu.pics/sfw/waifu');
              const data = response.data;
          
              if (data.url) {
                const imageUrl = data.url;
          
                // Respondemos con un objeto JSON con las propiedades solicitadas
                res.json({ status: true, owners: `${creator}`, url: imageUrl });
              }
            } catch  (e) {
                res.json({ status: true, owners: `${creator}`, smg: `Error: ${e}` });
            }
          });
          
          router.get('/anime/loli', async (req, res) => {
            const apikeyInput = req.query.apikey;
          
            try {
            if (!apikeyInput) return res.json(loghandler.notparam);
            if (apikeyInput !== 'Limoncio') return res.json(loghandler.invalidKey);

              const response = await axios.get('https://api.waifu.pics/sfw/loli');
              const data = response.data;
          
              if (data.url) {
                const imageUrl = data.url;
          
                // Respondemos con un objeto JSON con las propiedades solicitadas
                res.json({ status: true, owners: `${creator}`, url: imageUrl });
              }
            } catch  (e) {
                res.json({ status: true, owners: `${creator}`, smg: `Error: ${e}` });
            }
          });

          router.get('/anime/neko', async (req, res) => {
            const apikeyInput = req.query.apikey;
          
            try {
            if (!apikeyInput) return res.json(loghandler.notparam);
            if (apikeyInput !== 'Limoncio') return res.json(loghandler.invalidKey);

              const response = await axios.get('https://api.waifu.pics/sfw/neko');
              const data = response.data;
          
              if (data.url) {
                const imageUrl = data.url;
          
                // Respondemos con un objeto JSON con las propiedades solicitadas
                res.json({ status: true, owners: `${creator}`, url: imageUrl });
              }
            } catch  (e) {
                res.json({ status: true, owners: `${creator}`, smg: `Error: ${e}` });
            }
          });

          router.get('/anime/megumin', async (req, res) => {
            const apikeyInput = req.query.apikey;
          
            try {
            if (!apikeyInput) return res.json(loghandler.notparam);
            if (apikeyInput !== 'Limoncio') return res.json(loghandler.invalidKey);

              const response = await axios.get('https://api.waifu.pics/sfw/megumin');
              const data = response.data;
          
              if (data.url) {
                const imageUrl = data.url;
          
                // Respondemos con un objeto JSON con las propiedades solicitadas
                res.json({ status: true, owners: `${creator}`, url: imageUrl });
              }
            } catch  (e) {
                res.json({ status: true, owners: `${creator}`, smg: `Error: ${e}` });
            }
          }); 
          
          
          router.get('/anime/shinobu', async (req, res) => {
            const apikeyInput = req.query.apikey;
          
            try {
            if (!apikeyInput) return res.json(loghandler.notparam);
            if (apikeyInput !== 'Limoncio') return res.json(loghandler.invalidKey);

              const response = await axios.get('https://api.waifu.pics/sfw/megumin');
              const data = response.data;
          
              if (data.url) {
                const imageUrl = data.url;
          
                // Respondemos con un objeto JSON con las propiedades solicitadas
                res.json({ status: true, owners: `${creator}`, url: imageUrl });
              }
            } catch  (e) {
                res.json({ status: true, owners: `${creator}`, smg: `Error: ${e}` });
            }
          }); 
        // ANIME END //

        // DESCARGAS //
        router.get('/yutub/video', async (req, res, next) => {
            var apikeyInput = req.query.apikey,
                url = req.query.url
                
        if(!apikeyInput) return res.json(loghandler.notparam)
        if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
        if (!url) return res.json({ status : false, creator : `${creator}`, smg : "masukan parameter url"})
    
           fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/ytv?url=${url}`))
            .then(response => response.json())
            .then(data => {
            var result = data;
                 res.json({
                     author: 'Zeeone',
                     result
                 })
             })
             .catch(e => {
                 res.json(loghandler.error)
    })
    })
    
    
    router.get('/yutub/audio', async (req, res, next) => {
            var apikeyInput = req.query.apikey,
                url = req.query.url
                
        if(!apikeyInput) return res.json(loghandler.notparam)
        if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
        if (!url) return res.json({ status : false, creator : `${creator}`, smg : "masukan parameter url"})
    
           fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/yta?url=${url}`))
            .then(response => response.json())
            .then(data => {
            var result = data;
                 res.json({
                     author: 'Zeeone',
                     result
                 })
             })
             .catch(e => {
                 res.json(loghandler.error)
    })
    })
    
    
    router.get('/ig/stalk', async (req, res, next) => {
            var apikeyInput = req.query.apikey,
                username = req.query.username
                
        if(!apikeyInput) return res.json(loghandler.notparam)
        if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
        if (!username) return res.json({ status : false, creator : `${creator}`, smg : "masukan parameter username"})
    
           fetch(encodeURI(`https://python-api-zhirrr.herokuapp.com/api/stalk?username=${username}`))
            .then(response => response.json())
            .then(data => {
            var result = data;
                 res.json({
                     author: 'Zeeone',
                     result
                 })
             })
             .catch(e => {
                 res.json(loghandler.error)
    })
    })
    
    router.get('/github/stalk', async (req, res, next) => {
            var apikeyInput = req.query.apikey,
                username = req.query.username
                
        if(!apikeyInput) return res.json(loghandler.notparam)
        if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
        if (!username) return res.json({ status : false, creator : `${creator}`, smg : "masukan parameter username"})
    
           fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/detailuser?q=${username}`))
            .then(response => response.json())
            .then(data => {
            var result = data;
                 res.json({
                     author: 'Zeeone',
                     result
                 })
             })
             .catch(e => {
                 res.json(loghandler.error)
    })
    })
    router.get('/repository/stalk', async (req, res, next) => {
            var apikeyInput = req.query.apikey,
                username = req.query.username
                
        if(!apikeyInput) return res.json(loghandler.notparam)
        if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
        if (!username) return res.json({ status : false, creator : `${creator}`, smg : "masukan nama repository yang ingin kamu cari"})
    
           fetch(encodeURI(`https://github-api-zhirrr.vercel.app/api/searchrepo?q=${username}`))
            .then(response => response.json())
            .then(data => {
            var result = data;
                 res.json({
                     author: 'Zeeone',
                     result
                 })
             })
             .catch(e => {
                 res.json(loghandler.error)
    })
    })
        // FIN DESCARGAS //

        // BUSQUEDA //
          router.get('/search/youTube', async (req, res, next) => {
            var apikeyInput = req.query.apikey,
                video = req.query.video
                
        if(!apikeyInput) return res.json(loghandler.notparam)
        if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
        if (!video) return res.json({ status : false, creator : `${creator}`, smg : "masukan parameter video"})
    
           fetch(encodeURI(`https://yutub-api-zaahirr.herokuapp.com/search?q=${video}`))
            .then(response => response.json())
            .then(data => {
            var result = data;
                 res.json({
                     author: 'Zeeone',
                     result
                 })
             })
             .catch(e => {
                 res.json(loghandler.error)
    })
    })
        
        router.get('/search/wallpaper', async (req, res, next) => {
                var apikeyInput = req.query.apikey
                    
            if(!apikeyInput) return res.json(loghandler.notparam)
            if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
        
               fetch(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/random/wallpaper?genre=acak`))
                .then(response => response.json())
                .then(data => {
                var result = data;
                     res.json({
                         result
                     })
                 })
                 .catch(e => {
                     res.json(loghandler.error)
        })
        })
         // BUSQUEDA //

        router.get('/maker3d/no2', async (req, res, next) => {
                var apikeyInput = req.query.apikey,
                    text = req.query.text
                    
            if(!apikeyInput) return res.json(loghandler.notparam)
            if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
            if (!text) return res.json({ status : false, creator : `${creator}`, smg : "masukan parameter text"})
        
               fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-2?text=${text}`))
                .then(response => response.json())
                .then(data => {
                var result = data;
                     res.json({
                         author: 'Zeeone',
                         result
                     })
                 })
                 .catch(e => {
                     res.json(loghandler.error)
        })
        })
        
        
        router.get('/maker3d/no3', async (req, res, next) => {
                var apikeyInput = req.query.apikey,
                    text = req.query.text
                    
            if(!apikeyInput) return res.json(loghandler.notparam)
            if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
            if (!text) return res.json({ status : false, creator : `${creator}`, smg : "masukan parameter text"})
        
               fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-3?text=${text}`))
                .then(response => response.json())
                .then(data => {
                var result = data;
                     res.json({
                         author: 'Zeeone',
                         result
                     })
                 })
                 .catch(e => {
                     res.json(loghandler.error)
        })
        })
        
        
        router.get('/maker3d/no4', async (req, res, next) => {
                var apikeyInput = req.query.apikey,
                    text = req.query.text
                    
            if(!apikeyInput) return res.json(loghandler.notparam)
            if(apikeyInput != 'Limoncio') return res.json(loghandler.invalidKey)
            if (!text) return res.json({ status : false, creator : `${creator}`, smg : "masukan parameter text"})
        
               fetch(encodeURI(`https://textmaker-api-zahirr.herokuapp.com/api/text3d-4?text=${text}`))
                .then(response => response.json())
                .then(data => {
                var result = data;
                     res.json({
                         author: 'Zeeone',
                         result
                     })
                 })
                 .catch(e => {
                     res.json(loghandler.error)
        })
        })

module.exports = router