function getUUD(resolve) {
  fetch('http://localhost:5984/_uuids')
    .then((response) => response.json())
    .then(responseJson => {
      console.log(responseJson.uuids[0])
      resolve(responseJson.uuids[0])
    });
}

function putData(data, uuids) {
  return fetch(`http://localhost:5984/invites/${uuids}`, {
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
    fetch('http://localhost:5984/invites/_all_docs?include_docs=true')
      .then((response) => response.json())
      .then(data => {
        resolve(data)
      })
  }
}
