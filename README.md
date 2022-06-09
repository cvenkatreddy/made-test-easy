# AUTOMATION FRAMEWORK WITH CYPRESS

A sample framework created using cypress, javascript and docker, reports are generated using various report styles like mochawesome and allure-report.

## Pre-requisite Tools

1. Node version 12 or above
2. Visual Studio Code

## Quickstart

You know setting up framework is very quick!

1. clone the project and open with Visual Studio Code
2. Open Terminal
3. `npm install`

## set host/ baseurl

1. go to cypress.json file
2. set baseurl

## Execution via Cypress Runner

1. Go to project root,
2. `npm run cy:open`
3. click specific feature or run all features

## Execution via CLI

1. `npm run e2e_mochawesome` # for a full run with mochawesome reports
2. `npm run e2e_allure` # for a full run with allure-reports
3. `npm run cy:run:record` # for a full run and to upload results to cypress dashboard(https://dashboard.cypress.io/projects/ytqaz3/)

for more npm scripts, refer to scripts in `package.json`

## Reports

1. Mochawesome reports:
   After execution of command `npm run e2e_mochawesome`, reports will be generated in `mochawesome-report` folder and open `output.html` for html reports

2. Allure reports:
   After execution of command `npm run e2e_allure`, allure reports will be shown via web-server

## Docker Execution

1. Download and install Docker

   - For Mac: https://www.docker.com/products/docker-desktop

   - For Windows: https://docs.docker.com/desktop/windows/

2. Go to project root and run command `docker build -t cypress .`
