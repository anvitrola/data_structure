import { randomUUID } from "crypto";
import LinkedList from "./linked-list.js";

describe("linked-list", () => {
  it("should be able to insert a new node to the linked list and print list", () => {
    const linkedList = LinkedList();

    expect(linkedList.length()).toBe(0);

    linkedList.insert({ id: "987489374" });
    expect(linkedList.length()).toBe(1);

    linkedList.insert({ id: "387389293" });
    expect(linkedList.length()).toBe(2);

    expect(linkedList.printList()).toEqual([
      { id: "987489374" },
      { id: "387389293" },
    ]);
  });

  it("should be able to remove a node from the list", () => {
    const linkedList = LinkedList();

    for (let i = 0; i < 3; i++) {
      linkedList.insert(randomUUID());
    }

    linkedList.insert(123456);

    for (let i = 0; i < 6; i++) {
      linkedList.insert(randomUUID());
    }

    expect(linkedList.length()).toBe(10);

    linkedList.remove(123456);

    expect(linkedList.length()).toBe(9);
  });
});
