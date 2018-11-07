# Geolocation

## Notes

### [Navigator.geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation)

Returns a `Geolocation` object that has access to the location of the device.

### [Geolocation](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)

- `Geolocation.watchPosition()`
  - Has three parameter
    - success callback function that takes a [`Position`](https://developer.mozilla.org/en-US/docs/Web/API/Position) object
    - (Optional) error callback function that takes a [`PositionError`](https://developer.mozilla.org/en-US/docs/Web/API/PositionError) object
    - (Optional) [`PositionOptions`](https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions) object
  - Returns a watch ID that can be unregistered by passing it to [`Geolocation.clearWatch()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/clearWatch)
