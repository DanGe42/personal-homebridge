#!/usr/bin/env node

var ejs = require('ejs');
var fs = require('fs');

var templateFile = fs.readFileSync('config.json.ejs', {encoding: 'utf-8'});
var secretsFile = fs.readFileSync('secrets.json', {encoding: 'utf-8'});

var secrets = JSON.parse(secretsFile);
var output = ejs.render(templateFile, secrets);

fs.writeFileSync('_homebridge/config.json', output, {encoding: 'utf-8'});
