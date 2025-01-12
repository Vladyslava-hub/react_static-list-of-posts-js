// App.jsx
import { PostInfo } from './components/PostInfo/PostInfo';
import postsFromServer from './api/posts.json';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      {postsFromServer.map(post => (
        <PostInfo key={post.id} post={post} />
      ))}
    </div>
  </section>
);
