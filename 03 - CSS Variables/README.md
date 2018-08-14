# CSS Variables

The purpose of this challenge is to learn CSS custom properties (variables).

## Notes

### Declare CSS Variables

They are set using custom property notation (--).

```css
:root {
  --base: #ffc600;
  --blur: 20px;
  --spacing: 20px;
}
```

### Using CSS Variables

They are accessed using var() function.

```css
img {
  background: var(--base);
  padding: var(--spacing);
  filter: blur(var(--blur));
}
```

### CSS Variables in JS

To use the values of CSS variables in JavaScript, it is just like standard properties.

```javascript
style.getPropertyValue(propertyName);
style.setProperty(propertyName, [value], [priority]);
```
