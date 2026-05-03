import React from 'react';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="eb-content">
            <div className="eb-icon">⚠️</div>
            <h1 className="eb-title">Something went wrong</h1>
            <p className="eb-desc">
              We're sorry for the inconvenience. Please refresh the page
              or contact us directly at{' '}
              <a href="mailto:info@skylinefinserv.in">info@skylinefinserv.in</a>
            </p>
            <div className="eb-actions">
              <button className="btn-primary" onClick={this.handleReload}>
                🔄 Refresh Page
              </button>
              <a href="tel:+919876543210" className="btn-outline eb-call">
                📞 Call Us
              </a>
            </div>
            {process.env.NODE_ENV === 'development' && (
              <details className="eb-details">
                <summary>Error Details (Dev Only)</summary>
                <pre>{this.state.error?.toString()}</pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;