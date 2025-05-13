import React from "react";
import Image from "next/image";
import backgroundImage2 from "../../../assets/background/Face.png";

interface FluidProps {
  // Add any props here if needed
}

interface FluidState {
  style: {
    color: string;
    height: string;
    width: string;
    margin: number;
  };
}

export default class Fluid extends React.Component<FluidProps, FluidState> {
  private scriptElement: HTMLScriptElement | null = null;

  constructor(props: FluidProps) {
    super(props);
    this.state = {
      style: {
        color: "transparent",
        height: "100vh",
        width: "100vw",
        margin: 0,
      },
    };
  }

  componentDidMount() {
    this.scriptElement = document.createElement("script");
    this.scriptElement.src = "/js/script.js"; // Updated to use absolute path
    this.scriptElement.async = true;
    this.scriptElement.onload = () => this.fluidLoaded();
    document.body.appendChild(this.scriptElement);
  }

  componentWillUnmount() {
    if (this.scriptElement && this.scriptElement.parentNode) {
      this.scriptElement.parentNode.removeChild(this.scriptElement);
    }
  }

  fluidLoaded() {
    console.log("WebGL Canvas Loaded");
  }

  render() {
    return (
      <canvas className="fluid-canvas" style={this.state.style}>
        <Image
          src={backgroundImage2}
          alt="Background"
          layout="fill"
          objectFit="contain"
          priority
          className="flex"
        />
      </canvas>
    );
  }
}
