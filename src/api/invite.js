const url = 'http://192.168.111.170:5984'

function getUUD(resolve) {
  fetch(`${url}/_uuids`)
    .then((response) => response.json())
    .then(responseJson => {
      console.log(responseJson.uuids[0])
      resolve(responseJson.uuids[0])
    });
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
    });
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
  }
}
