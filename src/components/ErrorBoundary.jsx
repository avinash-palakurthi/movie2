import { Component } from "react";
import NotFound from "./NotFound";

// * ErrorBoundaries dont catch errors for [eventhandlers(onclick...etc),Asynchronous code(setTimeout....etc),server side rendering]
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(error) {
    this.setState({
      error: error,
    });
  }
  render() {
    if (this.state.error) {
      return <NotFound />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
