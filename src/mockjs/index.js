import Mock from 'mockjs'
import msgData from './getmsg'

Mock.mock('http://www.testapi.com/getmsg','get',msgData)