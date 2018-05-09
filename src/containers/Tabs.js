import React, { Component } from 'react'
import { Tabs, Tab, Glyphicon, ButtonToolbar, Button, Alert } from 'react-bootstrap'
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
            <div className='col-md-8 col-md-offset-2' >
              <LineCharts  />
            </div>
            <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>Milstones</h3>
              </div>
            </div>
            <Alert bsStyle='warning'>
            <strong>This Name Project</strong> does not have any active milestones. You can add a new milestone.
            </Alert>
            <ButtonToolbar>
              <Button bsStyle='success'>
                <Glyphicon glyph='plus-sign' /> Add Mileston
              </Button>
            </ButtonToolbar>
            </div>
            <div className='col-md-6'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <h3 className='panel-title'>Test Runs</h3>
              </div>
            </div>
            <Alert bsStyle='warning'>
            <strong>This Name Project</strong> does not have any active test runs. You can add a new test runs.
            </Alert>
              <ButtonToolbar>
                <Button bsStyle='success'>
                  <Glyphicon glyph='plus-sign' /> Add Test Run
                </Button>
              </ButtonToolbar>
            </div>
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
