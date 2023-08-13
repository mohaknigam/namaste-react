import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import UserContext from "../../utils/UserContext";
import { StaticRouter } from "react-router-dom/server";

test("Load logo on rendering header", async () => {
  const mockUser = {
    name: "Test User",
    email: "test@example.com",
  };
  const header = render(
    <StaticRouter>
      <UserContext.Provider value={{ user: mockUser }}>
        <Provider store={store}>
          <Header />
        </Provider>
      </UserContext.Provider>
    </StaticRouter>
  );
  const logo = await header.findAllByTestId("logo");

  expect(logo[0].src).toBe("http://localhost/dummy.png");
});
test("show online status on rendering header", async () => {
  const mockUser = {
    name: "Test User",
    email: "test@example.com",
  };
  const header = render(
    <StaticRouter>
      <UserContext.Provider value={{ user: mockUser }}>
        <Provider store={store}>
          <Header />
        </Provider>
      </UserContext.Provider>
    </StaticRouter>
  );
  const onlineStatus = await header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("📶");
});
test("cart should be empty on rendering header", async () => {
  const mockUser = {
    name: "Test User",
    email: "test@example.com",
  };
  const header = render(
    <StaticRouter>
      <UserContext.Provider value={{ user: mockUser }}>
        <Provider store={store}>
          <Header />
        </Provider>
      </UserContext.Provider>
    </StaticRouter>
  );
  const cartStatus = await header.getByTestId("cart");

  expect(cartStatus.innerHTML).toBe("🛒 Cart - 0");
});
