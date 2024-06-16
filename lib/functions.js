const getBuffer = async(url)=>{
  return new Promise(async(resolve, reject) => {
      await fetch(url, { headers: { 'User-Agent': 'okhttp/4.5.0' }, method: 'GET' })
      .then((response) => response.arrayBuffer())
      .then((data) => resolve(Buffer.from(data)))
      .catch(reject)
  })
}

module.exports = {
	getBuffer 
}