import React from 'react';
import Button from 'react-bootstrap/Button';
import Create from '../createReport/Create';
import Router from '../router/Routes';
import { Link } from 'react-router-dom';



function buttons() {
    return (
        <>
          <div style={{ padding: '5px', textAlign: 'right' }}>
            <Button>
              Edit
            </Button>{' '}
            <Button href='/CreateNew'>
              Create New Report
            </Button>
          </div>
        </>
      );
};

export default buttons;