// When mapping over arrays, try to avoid using the array index as the key for better performance and stability.
{
    items.map((item, index) => (
        <ListItem key={item.id} />
    ))
}

//Conditional Rendering:
// Use the ternary operator or logical AND (&&) for concise conditional rendering.
const MyComponent = ({ condition }) => (
    condition ? <TrueComponent /> : <FalseComponent />
)

// Memoize with React.memo:
// Use React.memo for memoization to prevent unnecessary renders.
const MemoizedComponent = React.memo(({ prop }) => {
    // Component logic
});

// Custom Hooks:
// Abstract complex logic into custom hooks for reusability.
const useCustomHook = () => {
    // Custom hook logic
    return data;
}

// State Update Function:
// Use the functional form of setState when the new state depends on the previous state.
const increment = () => {
    setCount(prevCount => prevCount + 1);
};

// CSS -in -JS Libraries:
// Consider using CSS-in -JS libraries like styled - components or emotion for styling in a more component - centric way.
import styled from 'styled-components';

const StyledComponent = styled.div`
  color: #333;
  // Other styles
`;
