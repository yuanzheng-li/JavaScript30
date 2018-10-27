# Mouse Move Shadow

## Notes

### offsetX & offsetY

- These two are properties of `MouseEvent`.
- Give you the X/Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.
- You have a mouse event listener on a parent node that has a child. If the mouse on the child node, `offsetX & offsetY` will give you the values for the child node.