# Event Capture, Propagation, Bubbling and Once

There are 3 phases of event propagation:

1. Capturing phase - the event goes down to the target element
2. Target phase - the event reached the target element
3. Bubbling phase - the event bubbles up from the element

### Bubbling

When an event happens on an element, it first runs the event handler on it, then all the up on its ancestors (on the way up).

### Capturing

When set `capture: true` in the 3rd argument of `addEventListener`, the event handler is run on the capturing phase (on the way down).

### Once

When set `once: true` in the 3rd argument of `addEventListener`, the event handler is run only once and then gets unbind.

### `event.stopPropagation()`

Stop the event bubbling or capturing (with `capture: true`).
