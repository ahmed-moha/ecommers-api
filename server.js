require("dotenv").config();
const express = require("express");
const src = require("./src/index");

const Connection = require("./src/utils/db");

Connection();
