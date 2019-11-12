# Transitions performance demo

Simple app to show the benefits of using css transform instead of animating the width/height/left/right...

The red square is using transition: transform to move and scale the element. It performs well.

The blue square is using transition: width, height and width. It affects the performance.

## Usage:

- Clone the repo and serve the index.html:
```sh
$ cd flip
$ python -m SimpleHTTPServer
```
- Open the developer tools in Chrome
- Open the performance tab
- Set the 'CPU: 4x slowdown' to see the performance difference between the movement of both squares.

## Flip technique explanation:

- https://css-tricks.com/animating-layouts-with-the-flip-technique/