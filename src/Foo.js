import React from "react";
import AsyncComponent from "./AsyncComponent";

class FooComponents {
  Hello = () => import("./Hello");

  constructor(){
    const self = this;

    for (var p in self) {
      (function (field_name) {
        Object.defineProperty(self, field_name, {
          get: function () {
            console.log('GET', field_name);
            return <AsyncComponent component={self[field_name]} />;
          },
        });
      })(p);
    }

  }
}

export default new FooComponents();
