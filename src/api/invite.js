const url = 'https://couchdb-1e730f.smileupps.com'

function getUUD(resolve) {
  fetch(`${url}/_uuids`)
    .then((response) => response.json())
    .then(responseJson => {
      resolve(responseJson.uuids[0])
    })
}

function putData(data, uuids) {
  return fetch(`${url}/invites/${uuids}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then(responseJson => {
      console.log(responseJson)
    })
}

export default {
  sendData (data) {
    getUUD(uuids => putData(data, uuids))
  },

  getData (resolve) {
    fetch(`${url}/invites/_all_docs?include_docs=true`)
      .then((response) => response.json())
      .then(data => {
        resolve(data)
      })
  },

  getPass (resolve) {
    fetch(`${url}/password/_all_docs?include_docs=true`)
      .then((response) => response.json())
      .then(data => {
        resolve(data)
      })
  },

  getUUD(resolve) {
    fetch(`${url}/_uuids`)
      .then((response) => response.json())
      .then(responseJson => {
        resolve(responseJson.uuids[0])
      })
      .catch( resolve('') );
  }
}
