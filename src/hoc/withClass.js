import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
}; // Uses spread operator to split the props object into each prop example: <WrappedComponent person="name" foo="bar" />

export default withClass;