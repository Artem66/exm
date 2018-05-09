import React, { Component } from 'react'
import { Tabs, Tab, Glyphicon, ButtonToolbar, Button } from 'react-bootstrap'
import LineCharts from './LineChart'

export default class TabMenu extends Component {

  render() {
    return <Tabs defaultActiveKey={1} id='uncontrolled-tab-example'>
      <Tab eventKey={1} title='Overview'>
      <div className='row'>
        <div className='panel panel-default'>
          <div className='panel-heading'>
            <h3 className='panel-title'>Name project</h3>
          </div>
        </div>
        <div className='container'>
          <div className='col-md-8' >
          <LineCharts  />
          </div>
        </div>
        <div className='col-md-6'>
          <ButtonToolbar>
            <Button>
              <Glyphicon glyph='plus-sign' /> Add Project
            </Button>
          </ButtonToolbar>
        </div>
      </div>
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
