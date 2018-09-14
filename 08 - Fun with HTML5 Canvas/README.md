# Fun with HTML5 Canvas

This mini-project allows users to draw on a HTML5 canvas.

## Notes

### Canvas

The canvas element creates a fixed-size drawing surface that exposes one or more **rendering contexts**, which are used to create and manipulate the content shown.

### CanvasRenderingContext2D

The [CanvasRenderingContext2D][1] interface is used for drawing rectangles, text, images and other objects onto the canvas element. It provides the 2D rendering context for the drawing surface of a canvas element.

- lineCap
  Type of endings on the end of lines.

- lineJoin
  Type of corners where two lines meet.

- strokeStyle
  Color or style to use for the lines around shapes.

- beginPath()
  Call this method when you want to create a new path.

- moveTo(x, y)
  Moves the starting point of a new sub-path to the (x, y) coordinates.

- lineTo(x, y)
  Connects the last point in the sub-path to the x, y coordinates with a straight line.

- stroke()
  Strokes the sub-path with the current stroke style.

### hsl color

[hsl][2] stands for hue, saturation, and lightness.

[1]: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
[2]: https://www.w3schools.com/colors/colors_hsl.asp
