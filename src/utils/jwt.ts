import jwt from 'jsonwebtoken'

const sign = (payload: any) => {
  return jwt.sign(payload, 'apple')
}

const verify = (token: string) => {
  return jwt.verify(token, 'apple')
}

export default { sign, verify }
