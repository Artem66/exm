import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

export default class TabMenu extends Component {

  render() {
    return <Tabs defaultActiveKey={2} id='uncontrolled-tab-example'>
      <Tab eventKey={1} title='Overview'>
        Tab Overview
      </Tab>
      <Tab eventKey={2} title='Todo'>
        Tab todo
      </Tab>
      <Tab eventKey={3} title='Milestons' >
        Tab milestons
      </Tab>
      <Tab eventKey={4} title='Test Runs & result' >
        Tab test runs results
      </Tab>
      <Tab eventKey={5} title='Test Cases' >
        Tab test cases
      </Tab>
    </Tabs>;
  }
}
