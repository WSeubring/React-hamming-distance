import React from "react";
import {
  Histogram,
  DensitySeries,
  withParentSize,
  BarSeries,
  XAxis,
  YAxis
} from "@data-ui/histogram";

const ResponsiveHistogram = withParentSize(
  ({ parentWidth, parentHeight, ...rest }) => (
    <Histogram width={parentWidth} height={parentHeight} {...rest} />
  )
);


export default class MyHistogram extends React.Component{
  render(){
    const rawData = this.props.data

    // Not enought data to render histogram
    if (rawData.length < 1){
      console.log('Histogram could not be drawn because of limited data')
      return null
    } 

    return (
      <div style={{ height: 300 }}>
        <ResponsiveHistogram
          ariaLabel="histogram"
          orientation="vertical"
          cumulative={false}
          normalized={true}
          binCount={5}
          binType="numeric"
          renderTooltip={({ event, datum, data, color }) => (
          <div>
            <strong style={{ color }}>Group: {datum.bin0}</strong>
            <div><strong>count </strong>{datum.count}</div>
            <div><strong>cumulative </strong>{datum.cumulative}</div>
            <div><strong>density </strong>{datum.density}</div>
          </div>
          )}
        >
          <BarSeries animated rawData={rawData} 
            fillOpacity={0.35}
            stroke="#ff9203"
            fill="#ff9203"
          />
          <DensitySeries animated rawData={rawData} 
            stroke="#FF0000"
            smoothing={0.01}
            showArea={false}
            kernel="gaussian"
          />
          <XAxis tickValues={this.props.tickValues} label={this.props.xlabel}/>
          <YAxis />
        </ResponsiveHistogram>
      </div>
    );
  }
}