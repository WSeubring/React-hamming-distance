# Hamming distance of numeric strings

This web application computes the hamming distance between numeric strings and visualizes the hamming distances of all
pairs in a histogram.

In general I am satisfied with the result, it was interseting to look at React. I believe all requirements are included. There were are a few assumptions and points of improvement, listed below.

## Assumtions and improvements
- For the visualization of the hamming distance I assumed a histogram with an overlapping gaussain function on the data, would show the data nicely.

- Testing could be extended to also cover components, currently one functions is tested. (run ``` npm test``` to see test resutls)

- The graph is only rendered after two values are added, shows a replacing message. Maybe better to be to show an empty graph.

- Likely several React standards, I still need to learn. 
## Running code
### Install packages
```npm install```
### Start the app
```npm start```


### Used packages:
See [package.json](https://github.com/WSeubring/React-hamming-distance/blob/main/package.json)

## Deployment
The current deployment is a static build of the react app (```npm build```) deployed on Heroku.
[https://react-hamming-distance.herokuapp.com/]

It uses a static build because of exceeding memory issues using the node.js app version, since the free version is limited to 512mb of memory.