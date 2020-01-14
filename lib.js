const os = require('os')

const arch = os.arch()
const platform = os.platform() + (arch === 'arm' ? '-arm' : '')

switch (platform) {
  case 'linux':
    require('fuse-shared-library-linux/lib')
    break
  case 'darwin':
    require('fuse-shared-library-darwin/lib')
    break
  case 'linux-arm':
    require('fuse-shared-library-linux-arm/lib')
    break
  default:
    throw new Error(`fuse-shared-library is not currently supported on: ${platform}`)
}
