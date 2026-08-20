import React, { Component } from 'react';
export default class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false, error: null }; }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  componentDidCatch(error, info) { console.error("Boundary Error:", error, info); }
  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center bg-rose-50 dark:bg-rose-950/20 text-rose-700 rounded-2xl m-4 border border-rose-200">
          <h2 className="font-bold text-lg mb-2">Something went wrong</h2>
          <p className="text-sm opacity-80 mb-4">{String(this.state.error)}</p>
          <button onClick={() => this.setState({ hasError: false })} className="px-4 py-2 bg-rose-600 text-white rounded-xl text-sm font-semibold">Try Again</button>
        </div>
      );
    }
    return this.props.children;
  }
}