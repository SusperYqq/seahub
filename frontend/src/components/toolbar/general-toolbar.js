import React from 'react';
import PropTypes from 'prop-types';
import CommonToolbar from './common-toolbar';

const propTypes = {
  searchPlaceholder: PropTypes.string,
  onShowSidePanel: PropTypes.func.isRequired,
  onSearchedClick: PropTypes.func.isRequired,
};

class GeneralToolbar extends React.Component {

  render() {
    // todo get repoID?
    let { onShowSidePanel, onSearchedClick } = this.props;
    let placeHolder = this.props.searchPlaceholder || 'Search files in this library';
    return (
      <div className="main-panel-north">
        <div className="cur-view-toolbar">
          <span 
            className="sf2-icon-menu side-nav-toggle hidden-md-up d-md-none" 
            title="Side Nav Menu" 
            onClick={onShowSidePanel}>
          </span>
        </div>
        <CommonToolbar 
          repoID={'todo'}
          searchPlaceholder={placeHolder}
          onSearchedClick={onSearchedClick} 
        />
      </div>
    );
  }
}

GeneralToolbar.propTypes = propTypes;

export default GeneralToolbar;
