import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchIndex from './index';

class SearchContainer extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return <SearchIndex />;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
