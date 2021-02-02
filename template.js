  // This is a good README template
  function generateMarkdown(data) {
      return `
# ${data.Title}
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/${data.UserName}/${data.Title})

# Description

${data.Description}

# Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

# Installation

These need to be installed to run the application properly: ${data.Installation}

# Usage

​This program is used for ${data.Usage}

# License

${data.License} license

# Contributing

​Contributors: ${data.Contributor}

# Tests

Command line: ${data.Test}

# Questions

Questions or issues, contact ${data.UserName} at ${data.Email}.
`
  };

  module.exports = generateMarkdown;