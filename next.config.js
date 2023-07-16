const { withContentlayer } = require("next-contentlayer");
const path = require('node:path');


/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  output: "export",
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  // basePath: '/blog',
  trailingSlash: true,

  // don't optimize images
  images: {
    unoptimized: true,
  }
};


module.exports = withContentlayer(module.exports);
