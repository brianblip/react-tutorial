import { ChildComponent } from "./ChildComponent";

export interface MyComponentProps {
  counter: number;
}

export const MyComponent: React.FC<MyComponentProps> = ({ counter }) => {
  console.log("MyComponent render");
  return (
    <div>
      <h1>My component</h1>
      <p>counter: {counter}</p>
      {counter <= 5 && <ChildComponent />}
    </div>
  );
};
