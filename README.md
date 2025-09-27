# Customer Support Ticket System


## React Fundamentals - Questions & Answers

### 1. What is JSX, and why is it used?

**JSX (JavaScript XML)** is a syntax extension for JavaScript that allows you to write HTML-like code within JavaScript. It's a declarative way to describe what the UI should look like.

**Why JSX is used:**
- **Declarative Syntax**: Makes it easier to visualize and write UI components
- **JavaScript Integration**: Seamlessly combines HTML structure with JavaScript logic
- **Component Composition**: Enables building complex UIs from smaller, reusable components
- **Type Safety**: Works well with TypeScript for better development experience

**Example from our project:**
```jsx
// In TicketCard.jsx
return (
    <div className="card bg-white text-black">
        <div className="card-body">
            <h2 className="card-title">{ticket.title}</h2>
            <p>{ticket.description}</p>
        </div>
    </div>
);
```

**Key Benefits:**
- Transpiles to regular JavaScript using tools like Babel
- Provides better error messages and warnings
- Supports JavaScript expressions within `{}`
- Makes component structure more readable

---

### 2. What is the difference between State and Props?

| **State** | **Props** |
|-----------|-----------|
| **Mutable** - Can be changed within the component | **Immutable** - Cannot be changed by the receiving component |
| **Internal** - Managed within the component | **External** - Passed from parent to child components |
| **Local** - Belongs to a specific component | **Shared** - Can be passed to multiple children |
| **Triggers Re-render** - Changes cause component to re-render | **Read-only** - Used to display data or configure behavior |

**State Example from our project:**
```jsx
// In App.jsx
const [tasks, setTasks] = useState([]);
const [resolvedTasks, setResolvedTasks] = useState([]);

// State is managed here and can be updated
const addTask = (ticket) => {
    setTasks([...tasks, ticket]);
};
```

**Props Example from our project:**
```jsx
// Parent component passing props
<TaskStatus 
    tasks={tasks} 
    onCompleteTask={completeTask} 
    resolvedTasks={resolvedTasks} 
/>

// Child component receiving props
const TaskStatus = ({tasks, onCompleteTask, resolvedTasks}) => {
    // Props are read-only here
    return (
        <div>
            {tasks.map(task => (
                <div key={task.id}>{task.title}</div>
            ))}
        </div>
    );
};
```

---

### 3. What is the useState hook, and how does it work?

**useState** is a React Hook that allows functional components to manage local state. It returns an array with two elements: the current state value and a function to update it.

**Syntax:**
```jsx
const [state, setState] = useState(initialValue);
```

**How it works:**
1. **Initial State**: Sets the initial value when component first renders
2. **State Variable**: Holds the current state value
3. **Setter Function**: Updates the state and triggers a re-render
4. **Immutability**: Always creates a new state rather than mutating existing state

**Examples from our project:**

```jsx
// Simple state for storing tickets
const [tickets, setTickets] = useState([]);

// Object state for multiple values
const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'Low'
});

// Array state with complex operations
const [tasks, setTasks] = useState([]);

const addTask = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]); // Using previous state
};

const removeTask = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
};
```

**Key Points:**
- State updates are **asynchronous**
- Always use the setter function to update state
- For complex state updates, use the callback form: `setState(prevState => newState)`
- Never mutate state directly

---

### 4. How can you share state between components in React?

There are several ways to share state between components:

#### **1. Lifting State Up (Used in our project)**
Move shared state to the closest common parent component.

```jsx
// App.jsx - Parent component holds shared state
function App() {
    const [tasks, setTasks] = useState([]);
    const [resolvedTasks, setResolvedTasks] = useState([]);

    const addTask = (ticket) => {
        setTasks([...tasks, ticket]);
    };

    const completeTask = (completedTask) => {
        setTasks(tasks.filter(task => task.id !== completedTask.id));
        setResolvedTasks([...resolvedTasks, completedTask]);
    };

    return (
        <MainSection 
            tasks={tasks}
            resolvedTasks={resolvedTasks}
            onAddTask={addTask}
            onCompleteTask={completeTask}
        />
    );
}
```

#### **2. Props Drilling**
Pass data through multiple component levels (can become unwieldy).

```jsx
// App -> MainSection -> CustomerTickets -> TicketCard
<TicketCard tickets={tickets} onAddTask={onAddTask} />
```

#### **3. Context API**
For deeply nested components or global state.

```jsx
// Create Context
const TicketContext = createContext();

// Provider Component
function TicketProvider({ children }) {
    const [tickets, setTickets] = useState([]);
    
    return (
        <TicketContext.Provider value={{ tickets, setTickets }}>
            {children}
        </TicketContext.Provider>
    );
}

// Consumer Component
function TicketCard() {
    const { tickets, setTickets } = useContext(TicketContext);
    return <div>{/* Component content */}</div>;
}
```

#### **4. State Management Libraries**
- **Redux**: For complex applications
- **Zustand**: Lightweight alternative
- **Recoil**: Facebook's experimental state management

---

### 5. How is event handling done in React?

React uses **SyntheticEvents** - a wrapper around native DOM events that provides consistent behavior across browsers.

#### **Event Handling Patterns from our project:**

**1. Inline Event Handlers**
```jsx
// In TicketCard.jsx
<div 
    onClick={() => {
        onAddTask(ticket)
    }}
    className="card bg-white text-black cursor-pointer"
>
    {/* Card content */}
</div>
```

**2. Function References**
```jsx
// In TaskStatus.jsx
<button 
    onClick={() => onCompleteTask(task)} 
    className="btn hero-gradient-right"
>
    Complete
</button>
```

**3. Event Handler Functions**
```jsx
// More complex event handling
const handleTicketClick = (ticket, event) => {
    event.preventDefault();
    event.stopPropagation();
    
    // Additional logic
    if (ticket.status === 'Open') {
        onAddTask(ticket);
        showNotification('Ticket added to tasks');
    }
};

return (
    <div onClick={(e) => handleTicketClick(ticket, e)}>
        {/* Content */}
    </div>
);
```

**4. Form Event Handling**
```jsx
const [formData, setFormData] = useState({ title: '', description: '' });

const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
        ...prevData,
        [name]: value
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    // Submit logic
};

return (
    <form onSubmit={handleSubmit}>
        <input 
            name="title"
            value={formData.title}
            onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
    </form>
);
```

#### **Key Event Handling Concepts:**

- **SyntheticEvent**: React's cross-browser event wrapper
- **Event Delegation**: React uses a single event listener on the document root
- **Preventing Default**: Use `event.preventDefault()` to prevent default behavior
- **Event Bubbling**: Use `event.stopPropagation()` to stop event bubbling
- **Event Pooling**: Events are reused for performance (less relevant in React 17+)

#### **Common Event Types:**
- `onClick` - Mouse clicks
- `onChange` - Input value changes
- `onSubmit` - Form submission
- `onFocus`/`onBlur` - Focus events
- `onMouseEnter`/`onMouseLeave` - Hover events
- `onKeyDown`/`onKeyUp` - Keyboard events

---

## Project Structure

This customer support system demonstrates all these React concepts in action:

- **JSX**: Used throughout all components for declarative UI
- **State vs Props**: App manages state, components receive props
- **useState Hook**: Managing tickets, tasks, and resolved tasks
- **State Sharing**: Lifting state up from child components to App
- **Event Handling**: Click handlers for adding/completing tasks

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Tailwind CSS component library
- **Font Awesome** - Icons