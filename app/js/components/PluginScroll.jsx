import React from 'react';
import scrollToComponent from 'react-scroll-to-component';


class PluginScroll extends React.Component {
  scrollBtn() {
    scrollToComponent(this.scrollBtnEl, {
      offset: 0,
      align: 'middle',
      duration: 500,
      ease: 'inCirc',
    });
  }

  render() {
    return (
      <div className="scroll-demo">
        <button onClick={this.scrollBtn.bind(this)}>Go To Orange</button>
        <section
          className="scroll-btn-elemenet"
          ref={(section) => { this.scrollBtnEl = section; }}
        >
          Orange
        </section>
      </div>
    );
  }
}

export default PluginScroll;
