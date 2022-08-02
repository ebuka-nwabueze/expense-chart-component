# Frontend Mentor - Product preview card component solution

This is a solution to the [Expense chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size for the preview  components
- See hover and focus states for interactive elements




### Links

- Live Site URL: [Expense chart Component](https://62e3e61ccb0d921aa3f555cc--effulgent-daifuku-376ef4.netlify.app/)


## Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox

### What I learned

The bar chart with the amount, amount(height and color), and day was achieved by using a flex with column. 
- Then the height and color ``(bar__chart-height)`` bar was set with the props from the data source in percentage. 
- The amount ```(bar__chart-amount)``` was placed position as absolute because if left with the normal size, it would overflow from the parent flex container. Therefore, making it absolute positioned made sure it stayed within its flex container. 
- The position for ```(bar__chart-amount)``` was set at a calculated distance of the ``(bar__chart-height) + 20%`` from the bottom. The 20% ensure all the flex item has that same gap between the amount and height.

see below:

HTML:
```html
    <div className="bar__chart" onMouseEnter={handleMouse} onMouseLeave={handleMouse}>
      <span className="bar__chart-amount" style={styles}>${amount}</span>
      <div className="bar__chart-height" style={{ height: `${amount}%` }}></div>
      <p className="bar__chart-day">{day}</p>
    </div>
```
CSS:
```css
.bar__chart-amount{
  color: var(--cream);
  background-color: var(--dark-brown);
  border-radius: 0.4rem;
  padding: 0.4rem;
  font-size: 1rem;
  text-align: center;
  font-weight: bold;
  position: absolute;
  display: none;
}, 

```
Typescript:
```js
  const styles = onHover ? {
    display: "block",
    bottom: `calc(${amount + 20}%)`
  } as React.CSSProperties : {}
```

## Author

- Website - [Ebuka Nwabueze](https://www.ebukanwabueze.com)
- Frontend Mentor - [@ebuka-nwabueze](https://www.frontendmentor.io/profile/ebuka-nwabueze)
- Twitter - [@ebukaGN](https://www.twitter.com/ebukaGN)
