import React, { Component } from "react";
import Layout from "./layout/Layout";
import Alert from "react-bootstrap/Alert";

// This component is show when the negotiation is finished
export class Terminate extends Component {
  render() {
    return (
      <Layout>
        <div className="Tcontent text-center">
          <Alert variant="success">
            <Alert.Heading>
              {" "}
              <i className="fa fa-check"></i> The form is submitted successfully
            </Alert.Heading>
          </Alert>
          <button className="btn flex btnOne">
            <Link to="./App">Done</Link>
          </button>
        </div>
      </Layout>
    );
  }
}

export default Terminate;
