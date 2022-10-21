import LinkedList from "./linked-list.js";

const linkedList = LinkedList();

describe("linked-list", () => {
  it("should be able to insert a new node to the linked list", () => {
    expect(linkedList.length()).toBe(0);

    linkedList.insert({ id: "987489374" });

    expect(linkedList.length()).toBe(1);
  });
});
