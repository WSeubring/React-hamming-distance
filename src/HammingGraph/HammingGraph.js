import React from 'react'
import hammingDistance from 'hamming'
import MyHistogram from './MyHistogram'

export default class HammingGraph extends React.Component {
    getHammingDistances = (values) => {
        let arr = []
        
        // Check if array else return empty rray
        if (!Array.isArray(values)) return arr

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
                <h1 style={{textAlign:'center'}}> Hamming distance graph</h1>

                {/* Check if enough data is available to draw histogram, else display message */}
                {products.length >= 1 
                    ? <MyHistogram data={products} tickValues={[1,2,3,4,5]} xlabel='Hamming distance'/>
                    : <p style={{"color":"red", textAlign:'center'}}>Please add at least two values to render the histogram</p>
                }
            </div>
        );
        }
    }

