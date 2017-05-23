import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './login';
import { loginClick } from './actions';

const mapStateToProps = (state) => {
  console.log(state);
  return {
    loginIsClicked: state.loginIsClicked
  };
};

const mapDispatchToProps = (dispatch) => (
  {
    actions: bindActionCreators({ loginClick }, dispatch)
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
