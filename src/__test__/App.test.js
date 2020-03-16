//Imports
import React from "react";
import { shallow, mount } from "enzyme";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import wait from "waait";

// Component
import App from "../App";

//Mocks
import mockAxios from "axios";
import { fakeAuthor } from "../testUtils";

describe("<App />", () => {
  const history = createMemoryHistory();
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Router history={history}>
        <App />
      </Router>
    );
  });

  afterEach(() => {
    mockAxios.get.mockClear();
  });

  describe("fetching books", () => {
    it("initially has an empty 'books' array in the state", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.instance().state.books.length).toBe(0);
    });

    it("makes a GET request to the correct url", async () => {
      expect(mockAxios.get).toHaveBeenCalledWith("/api/books/");
    });

    it("updates the 'books' state with data from the response", async () => {
      const wrapper = shallow(<App />);
      await wait();
      wrapper.update();
      expect(wrapper.instance().state.books.length).toBe(10);
    });
  });
});
