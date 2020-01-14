const os = require('os')

const arch = os.arch()
const platform = os.platform() + (arch === 'arm' ? '-arm' : '')

switch (platform) {
  case 'linux':
    require('fuse-shared-library-linux/include')
    break
  case 'darwin':
    require('fuse-shared-library-darwin/include')
    break
  case 'linux-arm':
    require('fuse-shared-library-linux-arm/include')
    break
  default:
    throw new Error(`fuse-shared-library is not currently supported on: ${platform}`)
}
