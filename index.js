const os = require('os')

const arch = os.arch()
const platform = os.platform() + (arch === 'arm' ? '-arm' : '')

switch (platform) {
  case 'darwin':
    module.exports = require('fuse-shared-library-darwin')
    break
  case 'linux':
    module.exports = require('fuse-shared-library-linux')
    break
  case 'linux-arm':
    module.exports = require('fuse-shared-library-linux-arm')
    break
   default:
    throw new Error(`fuse-shared-library is not currently supported on: ${platform}`)
}
