import { Component, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'my-button',
  styleUrl: 'my-button.css',
  shadow: true,
})
export class MyButton {
  @Prop() color: string; // Property to set the button color
  @Prop() text: string; // Property to set the button text

  @Event() buttonClick: EventEmitter; // Event to emit when the button is clicked

  handleClick() {
    this.buttonClick.emit(); // Emit the buttonClick event
  }

  render() {
    return (
      <button
        style={{ backgroundColor: this.color }} // Set the button color
        onClick={() => this.handleClick()} // Bind the click handler
      >
        {this.text} // Display the button text
      </button>
    );
  }
}
