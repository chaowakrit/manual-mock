let mockDirList = {}

const setMockDirs = (dirList) => { // eslint-disable-line
  mockDirList = dirList
}

const readdir = (path, callback) => {
  callback(null, mockDirList[path])
}

export default {
  setMockDirs,
  readdir,
}
