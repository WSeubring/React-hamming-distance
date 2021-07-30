import React from 'react'
import hammingDistance from 'hamming'

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
        // FIXME: Index keys are not recommended
        const itemList = products.map((item, index) => {
            return (
                <li key={index}>{item}</li>
            )
        });

        return (
            <div>
                <h1> Hamming distance</h1>
                <ul>
                    {itemList}
                </ul>
            </div>
        );
        }
    }