# react-logical-components

A component library used to handle common JSX logic like conditional rendering and mapping data to elements in React. The library increases code readability by replacing common logic like short circuit evaluation and ternary operators with components. The components can also be used for responsive and/or adaptive design; certain elements can be shown only on particular screen sizes.

## Installation

### NPM

```bash
npm i react-logical-components
```

### Yarn

```bash
yarn add react-logical-components
```

## Components

### Empty

`Empty` renders an empty fragment. It can be used as a placeholder for components. You can use it when a component is required but you have not created the appropriate component yet.

```jsx
<Empty />
```

### Maybe

`Maybe` is used to display an element if a particular condition is met. If the condition has not been met, an empty fragment is displayed instead. This can be used as an alternative to short circuit evaluation. The code snippet below shows how `Maybe` can be used to toggle an alert element for a form.

```jsx
<Maybe display={true}>
  <span>Form submission failed. Please try again</span>
</Maybe>
```

### Either

`Either` is used to display one of two elements depending on a condition. If the condition is met, one of the elements is displayed. If the condition is not met, the other element is displayed. The component can be used as an alternative to a ternary operator. Below is an example of how `Either` can be used to display a loader while content is being fetched, and upon fetching, display content.

```jsx
<Either displayFirst={true}>
  <span className="loader"></span>
  <main className="content">Main content</main>
</Either>
```

### Any

`Any` can be used to display one of many elements. An index is provided to the component, and the element at that index is displayed. The code snippet below shows how `Any` can be used in a `Tabs` component.

```jsx
<Any display={0}>
  <div className="tabs-tab">Tab 1 content</div>
  <div className="tabs-tab">Tab 2 content</div>
  <div className="tabs-tab">Tab 3 content</div>
</Any>
```

### Some

`Some` is used to display one or more elements out of a group of elements. The elements to be displayed are specified through an array of indices of those elements. The order of the indices matters. This means that the elements will be displayed in the order specified by in the array. This makes it possible to reorder elements on different screen sizes or according to some other condition.

```jsx
<Some display={[0, 1]}>
  <section>Section 1</section>
  <section>Section 2</section>
  <section>Section 3</section>
</Some>
```

### ForEach

`ForEach` is used to map data to elements. This is ideal for lists, tables, select menus and the like. The code snippet below shows how to use `ForEach` to display a list of items.

```jsx
<ul>
  <ForEach
    data={["Item 1", "Item 2", "Item 3"]}
    renderComponent={(item, index) => <li key={String(index)}>{item}</li>}
  />
</ul>
```

## License

MIT License.
