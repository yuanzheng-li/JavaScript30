# JS and CSS Clock

This mini-project creates a clock using JS and CSS.

---

## Notes

### transform-origin

- moves the origin of the transform along the x-axis

### transition-timing-function

- It can be customized using a cubic-bezier function

### Glitch at 0th second/minute/hour

Because there's a `transition: all 0.05s` on hand elements, the degrees change from 444 -> 90 -> 96 in 0.05s. You'll notice hands jump counter-clockwise from 444 -> 0 and then clockwise from 0 -> 90 -> 96 in 0.05s. One solution is set the transition time to 0s when hands at 90 degree.

```javascript
secondHand.style.transition = secondHandDeg === 90 ? "all 0s" : "all 0.05s";
```
