import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Dashboard = () => (
  <div className="Dashboard">
    <div className="Dashboard-container">
      <div className="Dashboard-form">
        <h2>Insert points</h2>
        <form>
          <Input
            name="description"
            label="Description"
            type="text"
            placeholder="Description"
          />
          <Input
            name="origin"
            label="Origin"
            type="text"
            placeholder="Origin"
          />
          <Input
            name="destination"
            label="Destination"
            type="text"
            placeholder="Destination"
          />
          <Button>
            Search
          </Button>
        </form>
      </div>
      <div className="Dashboard-map">
      </div>
    </div>
  </div>
)

export default Dashboard;