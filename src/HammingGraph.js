import React from 'react'
import hammingDistance from 'hamming'
import MyHistogram from './MyHistogram'

export default class HammingGraph extends React.Component {
    getHammingDistances = (values) => {
        let arr = []

        // Compute hamming distance between all pairs
        for(let i=0; i<=values.length; i++){
            for(let j=i+1; j <=values.length -1; j++){
                let distance = hammingDistance(values[i], values[j])
                arr.push(distance)
            }
        }
        return arr
    }
    
    render() {
        const products = this.getHammingDistances(this.props.values)

        return (
            <div>
                <h1> Hamming distance</h1>
                {products.length > 2 
                    ? <MyHistogram data={products}/>
                    : <p style={{"color":"red"}}>Please add at least two values to render the histogram</p>
                }
            </div>
        );
        }
    }

