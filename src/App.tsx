import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import styles from "@/App.module.scss";
import NotSignPage from "@/hoc/NotSignPage";
import RequireAuth from "@/hoc/RequireAuth";
import { routes } from "@/constants/routes";
import { Header } from "@/components/Header";

const App = () => {
  return (
    <div className={styles.App}>
      <SnackbarProvider maxSnack={5}>
        <BrowserRouter>
          <Routes>
            {routes.map((el, index) => (
              <Route
                key={index}
                path={el.path}
                element={
                  el.private ? (
                    <RequireAuth>
                      <>
                        <Header />
                        <main className={styles.pageWrapper}>
                          {el.component}
                        </main>
                      </>
                    </RequireAuth>
                  ) : (
                    <NotSignPage>{el.component}</NotSignPage>
                  )
                }
              />
            ))}
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </div>
  );
};

export default App;
