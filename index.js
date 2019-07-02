var inquirer = require("inquirer");
var chalk = require('chalk');
var Word = require("./word.js");

//Global Variables
var losses = 0;
var wins = 0;
const wordsArr = ["aragorn", "necromancer", "gollum", "bilbo", "treebeard", "pipeweed", "eowyn", "galadriel", "tom bombidil", "orthanc"];
var word = "";

var randomWord = Math.floor(Math.random() * wordsArr.length)