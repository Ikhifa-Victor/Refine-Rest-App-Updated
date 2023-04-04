import { Refine } from "@refinedev/core";
import routerBindings, {
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { HeadlessInferencer } from "@refinedev/inferencer/headless";
import { Layout } from "components/Layout";
import { PostCreate } from "pages/create";
import { PostEdit } from "pages/edit";
import { PostList } from "pages/list";
import { PostShow } from "pages/show";

const App = () => {
  return (
    <BrowserRouter>
      <Refine
        routerProvider={routerBindings}
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        resources={[
          {
            name: "posts",
            list: "/posts",
            show: "/posts/show/:id",
            create: "/posts/create",
            edit: "/posts/edit/:id",
          },
        ]}
        options={{
          syncWithLocation: true,
          warnWhenUnsavedChanges: true,
        }}
      >
        <Routes>
          <Route path="posts"
            element={
              <Layout>
                <Outlet/>
              </Layout>
            }
          >
            <Route index element={
              <PostList />
            } />
            <Route
              path="show/:id"
              element={<PostShow />}
            />
            <Route
              path="edit/:id"
              element={<PostEdit />}
            />
            <Route path="create" element={<PostCreate />} />
          </Route>
        </Routes>
        <UnsavedChangesNotifier />
      </Refine>
    </BrowserRouter>
  );
};
export default App;