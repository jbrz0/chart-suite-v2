/* eslint-disable radix  */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import React from 'react';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import domtoimage from 'dom-to-image';
import ActionBtn from './ActionBtn.jsx';
// import InL from './InputChartMenu.jsx';
import stateData from '../StateData.jsx';
import logoUrl from './../../img/logo.svg';
import chartMenuIcon from './../../img/gear.svg';

const Menu = require('react-burger-menu').stack;

export default class PieChartTemplate extends React.Component {

  constructor(props) {
    super(props);
    this.state = stateData;
  }

  hC(name, e) {
    const change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  exportPng() {
    const node = document.querySelector('.recharts-responsive-container');
    domtoimage.toPng(node)
      .then((dataUrl) => {
        const img = new Image();
        img.src = dataUrl;
        document.getElementById('canvasexport').appendChild(img);
      })
      .catch((error) => {
        console.error('error exporting png!', error);
      });
  }

  render() {
    const data = [
      { name: this.state.y0, uv: this.state.Cat2Box0, pv: this.state.Cat1Box0 },
      { name: this.state.y1, uv: this.state.Cat2Box1, pv: this.state.Cat1Box1 },
      { name: this.state.y2, uv: this.state.Cat2Box2, pv: this.state.Cat1Box2 },
      { name: this.state.y3, uv: this.state.Cat2Box3, pv: this.state.Cat1Box3 },
      { name: this.state.y4, uv: this.state.Cat2Box4, pv: this.state.Cat1Box4 },
      { name: this.state.y5, uv: this.state.Cat2Box5, pv: this.state.Cat1Box5 },
    ];

    const isMenuOpen = (state) => {
      if (state.isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        // scroll
        document.body.style.overflow = 'hidden';
      }
    };

    const LegendWithValues = () => {
      return (
        <div className="pieChartLegend">
          <span><div className="pieCatOneLegendBox"></div>{this.state.catOne}</span>
          <span><div className="pieCatTwoLegendBox"></div>{this.state.catTwo}</span>
        </div>
      );
    };

    data.length = this.state.arrayX;

    return (
      <div>
        <ActionBtn />
        <a href="/" className="chartBrand">
          <img src={logoUrl} width="220" alt="Chart Suite" />
        </a>

        <div className="chartWrap">
          <ResponsiveContainer>
            <PieChart>
              <Legend content={LegendWithValues} />
              <Tooltip />
              <Pie data={data} nameKey="name" innerRadius="25%" valueKey="uv" outerRadius="80%" fill="#5a67f4" />
              <Pie data={data} nameKey="name" valueKey="pv" innerRadius="55%" fill="#98ca29" outerRadius="80%" />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <Menu right onStateChange={isMenuOpen} customBurgerIcon={<img src={chartMenuIcon} alt="" />} >
          <h2>Chart Settings</h2>

          <span className="chartEditorLabel">Categories</span>

          <input
            type="text"
            value={this.state.catOne}
            placeholder="Category"
            onChange={this.hC.bind(this, 'catOne')}
            style={{ display: 'inline-block' }}
            className="chartEditorInput chartEditorInputLeft"
          />
          <input
            type="text"
            value={this.state.catTwo}
            placeholder="Category"
            onChange={this.hC.bind(this, 'catTwo')}
            style={{ display: 'inline-block' }}
            className="chartEditorInput chartEditorInputLeft"
          />

          <span className="chartEditorLabel">Min/Max Y Value</span>

          <input
            type="text"
            value={this.state.minNum}
            placeholder="Min"
            onChange={this.hC.bind(this, 'minNum')}
            style={{ display: 'inline-block' }}
            className="chartEditorInput chartEditorInputLeft"
          />

          <input
            type="text"
            value={this.state.maxNum}
            placeholder="Max"
            onChange={this.hC.bind(this, 'maxNum')}
            style={{ display: 'inline-block' }}
            className="chartEditorInput chartEditorInputLeft"
          />

          <span className="chartEditorLabel">X Values</span>
          <div className="amountWrap">
            {Array.apply(null, Array(5)).map((item, i) => {
              return (<a href="#" key={`arrayVal${i}`} onClick={() => this.setState({ arrayX: i + 2 })}><button>{i + 2}</button></a>);
            }, this)}
          </div>

          {Array.apply(null, Array(this.state.arrayX)).map( function(item, i) {
            return (
              <input
                type="text"
                value={eval(`this.state.y${i}`)}
                key={`xVal${i}`}
                placeholder={`X Val ${i}`}
                onChange={this.hC.bind(this, `y${i}`)}
                style={{ display: 'inline-block' }}
                className="chartEditorInput chartEditorInputLeft"
              />);
          }, this)}
          <br />

          <span className="chartEditorLabel">Y Values: <strong>{this.state.catOne}</strong></span>
          {Array.apply(null, Array(this.state.arrayX)).map( function(item, i) {
            return (
              <input
                type="text"
                value={eval(`this.state.Cat1Box${i}`)}
                key={`Y1Val${i}`}
                placeholder={`Y Val ${i}`}
                onChange={this.hC.bind(this, `Cat1Box${i}`)}
                style={{ display: 'inline-block' }}
                className="chartEditorInput chartEditorInputLeft"
              />);
          }, this)}
          <br />

          <span className="chartEditorLabel">Y Values: <strong>{this.state.catTwo}</strong></span>
          {Array.apply(null, Array(this.state.arrayX)).map( function(item, i) {
            return (
              <input
                type="text"
                value={eval(`this.state.Cat2Box${i}`)}
                key={`Y2Val${i}`}
                placeholder={`Y Val ${i}`}
                onChange={this.hC.bind(this, `Cat2Box${i}`)}
                style={{ display: 'inline-block' }}
                className="chartEditorInput chartEditorInputLeft"
              />);
          }, this)}
          <br />

          <button onClick={this.exportPng} className="exportPngBtn">Save as PNG</button><br />
          <div id="canvasexport" className="exportedPng"></div>
        </Menu>
      </div>
    );
  }
}