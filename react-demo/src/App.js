import './App.css';
import {Greet} from './components/Greet';
import {Message} from './components/Message';
import {ClickHandler} from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { StyleSheet } from './components/StyleSheet';
import { Inline } from './components/Inline';
import { Form } from './components/Form';
import { PostLists } from './components/PostLists';
import { PostForm } from './components/PostForm';

function App() {
  return (
    <div className="App">
{/* <Greet name = "Shamin" />
<Greet name = "Sofia" />
<Greet name = "Naveen" > 
<p>This is children props</p>
</Greet>
<Greet/> */}
{/* <ClickHandler/> */}
{/* <Message/> */}
{/* <ParentComponent/> */}
{/* <UserGreeting/> */}
{/* <NameList/> */}
{/* <StyleSheet/> */}
{/* <Inline/> */}
{/* <Form/> */}
{/* <PostLists/> */}
<PostForm/>
    </div>
  );
}

export default App;
