import './styles/index.sass'
import 'font-awesome-webpack'

import React from 'react'
import {render} from 'react-dom'
import {Layout} from 'layouts/Layout'

setTimeout(() =>
  render(<Layout />, document.getElementById('root'))
, 0)
