## Description

The Automated E-Commerce Platform Validation project is designed to streamline and enhance the quality assurance process for an e-commerce platform. This project addresses critical functionalities of the platform, including product management and user account interactions. By automating key validation scenarios such as adding a product to the cart, registering a new user, and logging into the application, this project aims to:

IMPROVE_TESTING_EFFICIENCY: Automation reduces manual testing efforts, allowing testers and developers to focus on more complex and exploratory testing.
ENSURE_CONSISTENCY : Automated tests ensure that the same test cases are executed consistently with every code change, minimizing the risk of regressions.
ENHANCE_RELIABILITY: Automated tests are repeatable and less error-prone compared to manual testing, leading to more reliable validation.

## Requirements

- Node version 14 or higher
- Visual Studio Code

## Quick start

Choose one of the following options:

1. Download the latest stable release [here](https://github.com/VasanthPranav/Cap-Asses-Updated) or clone the git repo — `git clone https://github.com/VasanthPranav/Cap-Asses-Updated.git`

2. Then:

- Copy the files to your project into a directory like `/Automationtest` (note the hidden files!)

3. Clean the project (Optional):
   -- Run `npm run clean`

- _On Windows:_
  -- Remove the directories `/.git`& `/.github`

4. Install the dependencies (`npm install`)

Now you are ready to execute the test.

# How to run the test

```sh
$ npm run wdio
```

_please note_ The WDIO runner uses the configuration file `wdio.conf.js` by default.

# To access the report after executing

Cucumber Reporter has been utilized for report generation.After executing the test scripts, reports will get created and stored within the project folder as shown below

Path : `projectdirectory`/Reports/report_date_time

The index.html present the folder is the report generated
