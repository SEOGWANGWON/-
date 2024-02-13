// read-only
const service = require("./Reservation.service");

async function confirmPayment(req, res, next) {
  const confirmResponse = await service.confirmPayment(req.query);

  return res.json({ data: confirmResponse });
}

module.exports = {
  confirmPayment,
};
