const os = require('os')

const platform = os.platform()
switch (platform) {
  case 'darwin':
    module.exports = require('fuse-shared-library-darwin')
    break
  case 'linux':
    module.exports = require('fuse-shared-library-linux')
    break
  default:
    throw new Error(`fuse-shared-library is not currently supported on: ${platform}`)
}
