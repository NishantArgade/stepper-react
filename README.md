# Stepper-React

![version](https://img.shields.io/npm/v/stepper-react?color=brightgreen)
![GitHub Workflow Status (branch)](https://img.shields.io/github/workflow/status/NishantArgade/stepper-react/Release/master)
![David](https://img.shields.io/david/NishantArgade/stepper-react)
![David](https://img.shields.io/david/dev/NishantArgade/stepper-react)
![License](https://img.shields.io/npm/l/stepper-react?color=brightgreen)
![Downloads](https://img.shields.io/npm/dm/stepper-react)


Stepper-React is a flexible, customizable step progress indicator for your React applications. It's designed to be easy to use and integrate into your projects, with a clean and modern design.

![stepper-react](https://github.com/NishantArgade/stepper-react/assets/71985065/8453741b-6c51-42b4-a11c-9cae99b7cea7)


## Features

- Fully customizable steps
- Responsive design
- Easy to integrate
- Supports both TypeScript and JavaScript
- **Lightweight**: The package is designed to be lightweight and efficient, ensuring it doesn't add unnecessary bloat to your project.

## Installation

You can install Stepper-React using npm:

```bash
npm install stepper-react
```

### Usage
Here's a basic example of how to use Stepper-React:

```bash
import Stepper from 'stepper-react';

const steps = [
  {topLabel: 'Step 1', bottomLabel: 'Start', content: 'This is the first step.'},
  {topLabel: 'Step 2', bottomLabel: 'Process', content: 'This is the second step.'},
  {topLabel: 'Step 3', bottomLabel: 'Finish', content: 'This is the final step.'},
];

function App() {
  return <Stepper steps={steps} />;
}

```

### Stepper Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `activeStep` | number | `1` | The current active step. |
| `steps` | array of `Step` objects | `[]` | The steps for the stepper. Each step is an object with `topLabel`, `bottomLabel`, and `content` properties. |
| `containerWidth` | number | `7` | The width of the container. |
| `heightforMobileStepper` | string | `"5rem"` | The height for the stepper in mobile view. |
| `topLabelFontSize` | string | `"0.7rem"` | The font size of the top label. |
| `bottomLabelFontSize` | string | `"0.7rem"` | The font size of the bottom label. |
| `contentFontSize` | string | `"0.7rem"` | The font size of the content. |
| `topLabelFontColor` | string | `"rgb(114, 114, 114)"` | The color of the top label. |
| `bottomLabelFontColor` | string | `"rgb(114, 114, 114)"` | The color of the bottom label. |
| `contentFontColor` | string | `"rgb(114, 114, 114)"` | The color of the content. |
| `stepperWrapperBackgroundColor` | string | `"rgb(255, 255, 255)"` | The background color of the stepper wrapper. |
| `stepperContentWrapperBackgroundColor` | string | `"rgb(255, 255, 255)"` | The background color of the stepper content wrapper. |


Each Step object in the steps array has the following properties:
| Property | Type | Description |
| --- | --- | --- |
| `topLabel` | string | The top label for the step. |
| `bottomLabel` | string | The bottom label for the step. |
| `content` | ReactNode | The content for the step. |



### Contributing

We welcome contributions! 


### License

Stepper-React is MIT licensed.

