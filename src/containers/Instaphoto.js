import React, { Component } from 'react'
import { Instafeed } from 'react-instafeed'

export default class Instaphoto extends Component {
  render() {
    const instafeedTarget = 'instafeed';
    return (
      <div id={instafeedTarget}>
      <Instafeed
        limit='5'
        ref='instafeed'
        resolution='standard_resolution'
        sortBy='most-recent'
        target={instafeedTarget}
        template=''
      />
    </div>
    )
  }
}
