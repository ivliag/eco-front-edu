import React, { Component } from 'react';
import AlfaBankIcon from 'arui-feather/icon/brand/bank-2449';
import Menu from 'arui-feather/menu';
import './AlfaWrapper.css';

const MENU_1 = [
  {
    type: 'item',
    content: 'Кредиты',
    value: 'value3',
    props: {
      url: '#3',
      disabled: true,
      view: 'underlined'
    }
  },
  {
    type: 'item',
    content: 'Тарифы',
    value: 'value1',
    props: {
      url: '#1',
      view: 'underlined'
    }
  },
  {
    type: 'item',
    content: 'Депозиты',
    value: 'value2',
    props: {
      url: '#2',
      view: 'underlined'
    }
  }
];


class AlfaWrapper extends Component {
  render() {
    return (
      <div className='AlfaWrapper'>
        <div className='AlfaLogo'>
          <AlfaBankIcon size='xl' theme='alfa-on-color' />
        </div>
        <Menu className='AlfaMenu' content={ MENU_1 } view='horizontal' />
        <div className='AlfaContent'>
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default AlfaWrapper;
