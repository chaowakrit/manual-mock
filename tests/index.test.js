import fs from 'fs'
import readDir from '../index'
import filterExtension from '../libs/filterExtension'

jest.mock('fs')
jest.mock('../libs/filterExtension')

describe('manual-mock', () => {
  fs.setMockDirs({ // eslint-disable-line
    './': ['test1', 'test2.js', 'test3.json'],
  })

  it('case 1', () => {
    readDir('./')
    expect(filterExtension).toBeCalled()
  })
})
