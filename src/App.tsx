import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Message } from './components/Message';
import { Heading } from './components/Heading';
import { Section } from './components/Section';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Styles } from './components/Styles';
import { Login } from './components/state/Login';
import { User } from './components/state/User';
import { Counter } from './components/state/Counter';

import { Portals } from './components/Portals';
import { Main } from './components/Main';
import { GridPage } from './components/GridPage';
import { Inputs } from './components/Inputs';

function App() {

  // const personname = {
  //   first : "Karan",
  //   last : "Sabnani"
  // };

  // const namesList = [
  //   { first: "Karan" , last: "Sabnani"},
  //   { first: "Rahul" , last: "Pandey"},
  //   { first: "James" , last: "Rathore"}
  // ];

  // const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   alert( event);
  // }


  return (
    <div className="App">
      {/* <Greet name="Karan" messageCount={10} isActive={true} /> */}
      {/* <Greet name="Karan" isActive={true} />
      <Person name={personname} info="karan"/>
      <PersonList names={namesList} />
      <Message status="success"/>

      <Section>
        <Heading> Hello, How are you. </Heading>
      </Section>

      <Button handleSubmit={(event,id) => {
        console.log("Button clicked", id);
      }}/>

      <Input value='' handleChange={() => console.log("Changed")}/>

      <Styles styles={
          { padding:"50px" , backgroundColor: "cyan",
            border: "10px solid black"}
        }/>

      <Login />
      <User />
      <Counter/> */}

      {/* <Main /> */}

      {/* <GridPage /> */}

      <Inputs />

    </div>
  );
}

export default App;
