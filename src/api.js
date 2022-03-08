const url = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json()) //promises
    .then((res) => res.data); //devolvemos el objeto con la respuesta json
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((res) => res.json()) //promises
    .then((res) => res.data); //devolvemos el objeto con la respuesta json
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((res) => res.json()) //promises
    .then((res) => res.data); //devolvemos el objeto con la respuesta json
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((res) => res.json()) //promises
    .then((res) => res.data); //devolvemos el objeto con la respuesta json;
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then((res) => res.json()) //promises
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
