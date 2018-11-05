# Webcam Fun

- Run `npm install` to install all dependencies
- Run `npm run start` to start the server

## Notes

### [Navigator.mediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/mediaDevices)

- Read-only

- Returns a `MediaDevices` Object, which provides access to connected media such as camera and mic

### [MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)

`var promise = navigator.mediaDevices.getUserMedia(constraints);`

- constraints parameter is a MediaStreamConstraints object specifying the types of media to request, along with any requirements for each type

- Returns a Promise that resolves to a MediaStream object

### [URL.createObjectURL(object)](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL)

`objectURL = URL.createObjectURL(object);`

- object parameter is a File, Blob or MediaSource object to create an object URL for.

- Returns a DOMString containing an object URL that can be used to reference the contents of the specified source object.

- In older versions of the Media Source specification, attaching a stream to a `<video>` element required creating an object URL for the MediaStream. This is no longer necessary, and browsers are removing support for doing this. Simply set [`srcObject`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/srcObject) to the MediaStream directly.

### [CanvasRenderingContext2D.drawImage()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage)

- Draw image onto the canvas

### [CanvasRenderingContext2D.getImageData()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData)

- Returns an `ImageData` object representing the underlying pixel data for a specified portion of the canvas.

### [CanvasRenderingContext2D.putImageData()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData)

- Paints data from the given ImageData object onto the bitmap

### [HTMLCanvasElement.toDataURL()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL)

- Returns a data URI containing a representation of the image in the format specified by the type parameter. Default type is png.

### [canplay Event](https://www.w3schools.com/tags/av_event_canplay.asp)

- Occurs when the browser has buffered enough and can start playing the specified audio or video.
