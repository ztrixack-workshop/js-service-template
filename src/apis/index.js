const get = (req, res) => {
  res.status(200).send('Service is fine!')
}

export default {
  get,
}