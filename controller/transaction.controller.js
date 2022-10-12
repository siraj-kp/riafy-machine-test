const fs = require("fs");
const db = require("../db/db");
const helper = require("../utils/helper");
const config = require("../db/config");

async function getSearchData(query) {
  const rows = await db.query(`SELECT * FROM stocks`);
  const data = helper.emptyOrRows(rows);
  const newData = data.filter((stock) => {
    return stock.name.toLowerCase().includes(query.toLowerCase());
  });
  return {
    data: newData,
  };
}

async function getData(id) {
  const rows = await db.query(`SELECT * FROM stocks WHERE s_no='${id}'`);
  const data = helper.emptyOrRows(rows);

  return {
    data,
  };
}

const getStock = async function (req, res) {
  var id = req.params.id;
  try {
    res.json(await getData(id));
  } catch (err) {
    console.error(`Error while getting stock`, err.message);
    // next(err);
  }
};

const search = async function (req, res) {
  var query = req.params.query;
  try {
    res.json(await getSearchData(query));
  } catch (err) {
    console.error(`Error while getting stocks `, err.message);
    // next(err);
  }
};

module.exports = {
  search,
  getStock,
};
