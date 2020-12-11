import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, PostsList } from './Components/Post';
import { PostEdit } from "./Components/EditPost";
import { PostCreate } from "./Components/CreatePost";
import { Dashboard } from "./Components/Dashboard";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin dataProvider={dataProvider} dashboard={Dashboard}>
      <Resource name="users" list={UserList} />
      <Resource 
        name="posts" 
        list={PostsList} 
        edit={PostEdit}
        create={PostCreate}
        />
    </Admin>
  );

export default App;