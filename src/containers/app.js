/* @flow */
/*eslint-disable prefer-const */

import React from "react-native";
import { connect } from "react-redux/native";
import { fetchData } from "../actions";

let {
  Text,
  ScrollView
} = React;

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchData("shoes"));
  }
  render() {
    return (
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.props.isFetching ?
          <Text>Loading</Text> :
          <Text>{this.props.products.length}</Text>}
      </ScrollView>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func,
  products: React.PropTypes.array,
  isFetching: React.PropTypes.bool
};

App.defaultProps = {
  dispatch: () => {},
  isFetching: false,
  products: []
};

export default connect((state) => ({
  isFetching: state.data.isFetching,
  products: state.data.products
}))(App);
